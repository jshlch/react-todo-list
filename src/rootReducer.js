import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'
import { connectRouter } from 'connected-react-router'
import auth from './containers/Auth/reducer'
import login from './containers/Login/reducer'
import registration from './containers/Registration/reducer'
import todo from './containers/Todo/reducer'

export default history =>  combineReducers({
	auth: login,
	registration,
	todos: todo,
	form:  formReducer,
	router: connectRouter(history)
}) 