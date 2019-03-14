import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'
import app from './containers/App/reducer'
import login from './containers/Login/reducer'
import registration from './containers/Registration/reducer'

const rootReducer = combineReducers({
	app,
	login,
	registration,
	form:  formReducer
})

export default rootReducer