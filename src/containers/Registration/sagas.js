import * as auth from './actions'
import * as api from './api'
import {AUTH} from './constants'
import { push } from 'connected-react-router'
import {reset} from 'redux-form'
import {put, call, fork, takeEvery, takeLatest, all} from 'redux-saga/effects'


// Worker saga
function* registerUser(action) {
	try {
		const response = yield call(api.registerUser, action.payload)	
		if(response.data.success) {
			yield put(auth.registerUserSuccess(response.data))
			yield put(push('/'))
			yield put(reset('RegistrationForm'))
		} else {
			yield put(auth.registerUserValidationFailed(response.data))
		}
	} catch(err) {
		yield console.log('React JS '+err)
	}
}

// Watcher saga: watches for actions dispatched to the store, starts worker saga
function* watchRequestRegisterUser() {
	yield takeEvery(AUTH.REGISTER_USER, registerUser)
}

export default function* registration() {
	yield all([
		fork(watchRequestRegisterUser)
	])
}

