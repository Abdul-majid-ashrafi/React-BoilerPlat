import * as firebase from "firebase";
import { Observable } from 'rxjs'
import { AuthActions } from '../actions'


export class AuthEpic {

    static register = (action$) =>
        action$.ofType(AuthActions.REGISTER)
            .switchMap(({ payload }) => {
                return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.pass)
                    .then((response) => {
                        payload.uid = response.uid
                        return firebase.database().ref(`/users/${response.uid}`).set(payload).then(() => {
                            return {
                                type: AuthActions.REGISTER_SUCCESS,
                                payload: payload
                            }
                        })
                    })
                    .catch((error) => {
                        return {
                            type: AuthActions.REGISTER_FAIL,
                            payload: error.code
                        }
                    })
            })

    static login = (action$) =>
        action$.ofType(AuthActions.LOGIN)
            .switchMap(({ credentials }) => {
                return Observable.fromPromise(firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.pass))
                    .catch(err => {
                        return Observable.of({
                            type: AuthActions.LOGIN_FAIL,
                            payload: err
                        });
                    })
                    .switchMap((res) => {
                        if (!res.payload) {
                            console.log('response wala', res)
                            return Observable.fromPromise(firebase.database().ref('/').child(`users/${res.uid}`).once('value'))
                                .map(data => {
                                    // let obj = {}
                                    // obj["uid"] = res.uid
                                    // obj = Object.assign({}, obj, data.val())
                                    AuthEpic.setLocalStorage(res.uid)
                                    return {
                                        type: AuthActions.LOGIN_SUCCESS,
                                        payload: data.val()
                                    }
                                })
                        } else {
                            console.log('error wala', res)
                            // error
                            return Observable.of({
                                type: AuthActions.LOGIN_FAIL,
                                payload: res.payload.code
                            });
                        }
                    })
            })



    static logout = (actions$) =>
        actions$.ofType('LOGOUT')
            .switchMap(() => {
                firebase.auth().signOut();
                AuthEpic.clearLocalStorage();
                return Observable.of({
                    type: 'LOGOUT_SUCCESS'
                })
            })


    static setLocalStorage(userObj) {
        localStorage.setItem('store', JSON.stringify(userObj));
    }

    static clearLocalStorage() {
        localStorage.removeItem('store');
    }

    static getLocalStorage() {
        return JSON.parse(localStorage.getItem('store'));
    }
}





    // static register = (action$) =>
    //     action$.ofType(AuthActions.REGISTER)
    //         .switchMap(({ payload }) => {
    //             console.log(payload)
    //             return Observable.of({
    //                 type: AuthActions.REGISTER_SUCCESS,
    //                 // payload: payload
    //             });
    //         })

