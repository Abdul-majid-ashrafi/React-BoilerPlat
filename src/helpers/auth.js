import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCXs2qMUazezjisKUS2ICNAKbasCkJdGDQ",
    authDomain: "react-sample-17caa.firebaseapp.com",
    databaseURL: "https://react-sample-17caa.firebaseio.com"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth