import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'
import { connectRouter } from 'connected-react-router'
import { loadingBarReducer } from 'react-redux-loading-bar'
import auth from './containers/Login/redux/reducer'
import registration from './containers/Registration/redux/reducer'
import todos from './containers/Todo/redux/reducer'

export default history =>  combineReducers({
	auth,
	registration,
	todos,
  	loadingBar: loadingBarReducer,
	form:  formReducer,
	router: connectRouter(history)
}) 

