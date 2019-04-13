import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'
import { connectRouter } from 'connected-react-router'
import { loadingBarReducer } from 'react-redux-loading-bar'
import auth from './redux/Login/reducer'
import registration from './redux/Registration/reducer'
import todos from './redux/Todo/reducer'

export default history =>  combineReducers({
	auth,
	registration,
	todos,
	loadingBar: loadingBarReducer,
	form:  formReducer,
	router: connectRouter(history)
}) 

