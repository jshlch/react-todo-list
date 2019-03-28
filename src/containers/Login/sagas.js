import {put, call, fork, takeEvery, takeLatest, all} from 'redux-saga/effects'
import {reset} from 'redux-form'
import {AUTH} from './constants'
import * as auth from './actions'
import * as api from './api'

// Worker saga
function* loginUser(action) {
	try {
		const response = yield call(api.login, action.payload)
		yield put(auth.loginSuccess(response.data))
	} catch(err) {
		yield console.log('React JS'+err)
	}
}

// Watcher saga: watches for actions dispatched to the store, starts worker saga
function* watchRequestLogin() {
	yield takeEvery(AUTH.LOGIN, loginUser)
}

export default function* authLogin() {
	yield all([
		fork(watchRequestLogin)
	])
}

