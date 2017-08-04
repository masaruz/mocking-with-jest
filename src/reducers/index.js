import { combineReducers } from 'redux'
import userReducer from './userReducer'
import textReducer from './textReducer'

export default combineReducers({
    user: userReducer,
    text: textReducer
})