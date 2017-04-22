import { AuthActions } from '../actions'

const initialState = {
    user: {},
    isRegister: false,
    isLoading: false,
    isLoggedIn: false,
    error: {}
}
export const authReducer = (state = initialState, action) => {
    console.log(action)
    let newState = state
    switch (action.type) {
        case AuthActions.REGISTER:
            return Object.assign({}, state, { isLoading: true });

        case AuthActions.REGISTER_SUCCESS:
            // newState = state;
            newState['isLoading'] = false;
            newState['isRegister'] = true;
            return Object.assign({}, state, newState)

        case AuthActions.REGISTER_FAIL:
            // newState = state;
            newState['error'] = action.payload
            newState['isLoading'] = false;
            return Object.assign({}, state, newState);

        // LOGIN Action handlers
        case AuthActions.LOGIN:
            return Object.assign({}, state, { isLoading: true });

        case AuthActions.LOGIN_SUCCESS:
            // newState = state;
            newState['isLoading'] = false;
            newState['isLoggedIn'] = true;
            newState['user'] = action.payload;
            return Object.assign({}, state, newState)

        case AuthActions.LOGIN_FAIL:
            newState['error'] = action.payload
            newState['isLoading'] = false;
            return Object.assign({}, state, newState);
        // LOGIN Action handlers End

        //logout 
        case AuthActions.LOGOUT:
            return Object.assign({}, state);
        case AuthActions.LOGOUT_SUCCESS:
            // newState = state;
            newState['isLoggedIn'] = false;
            newState['user'] = {};
            return Object.assign({}, state, newState);

        case AuthActions.LOGOUT_FAIL:
            return Object.assign({}, state)

        //default state return
        default:
            return state;
    }
}