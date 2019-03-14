import {put, call, fork, takeEvery, takeLatest, all} from 'redux-saga/effects'
import {AUTH} from './constants'
import * as auth from './actions'
import* as api from './api'

// Watcher saga: watches for actions dispatched to the store, starts worker saga
function* watchRequestRegisterUser() {
	yield takeEvery(AUTH.REGISTER_USER, registerUser)
}

// Worker saga
function* registerUser(action) {
	try {
		const response = yield call(api.registerUser, action.payload)	
		yield put(auth.registerUserSuccess(response))
	} catch(err) {
		yield console.log(err)
	}
}

export default function* registration() {
	yield all([
		fork(watchRequestRegisterUser)
	])
}

