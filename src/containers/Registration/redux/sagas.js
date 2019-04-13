import { push } from 'connected-react-router'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import {reset} from 'redux-form'
import {put, call, fork, takeLatest, all} from 'redux-saga/effects'
import * as auth from './actions'
import * as api from '../api'
import {AUTH} from './constants'

// Worker saga
function* register (action) {
	try {
    	yield put(showLoading())
		const response = yield call(api.register, action.payload)	
		if(response.data.success) {
			yield put(auth.registerSuccess(response.data))
			yield put(reset('RegistrationForm'))
			yield put(push('/'))
		} else {
			yield put(auth.registerValidationFailed(response.data))
		}
    	yield put(hideLoading())
	} catch(err) {
		yield console.log(err)
	}
}

// Watcher saga: watches for actions dispatched to the store, starts worker saga
function* watchRequestRegister () {
	yield takeLatest(AUTH.REGISTER_USER, register)
}

export default function* registration () {
	yield all([
		fork(watchRequestRegister)
	])
}

