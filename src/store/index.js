import { createStore, combineReducers, applyMiddleware } from "redux";
import { combineEpics, createEpicMiddleware } from 'redux-observable'

// all reducer import
import { authReducer } from './reducers'

// all Epic import
import { AuthEpic } from './epics'

const allReducer = combineReducers({
    authReducer
})

const allEpics = combineEpics(
    AuthEpic.register,
    AuthEpic.login
)

const epicMiddleware = createEpicMiddleware(allEpics)

export const store = createStore(
    allReducer,
    applyMiddleware(epicMiddleware)
)
store.subscribe(() => { console.log(store.getState()) })