import {put, call, fork, takeLatest, all} from 'redux-saga/effects'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { push } from 'connected-react-router'
import {AUTH} from './constants'
import * as action from './actions'
import * as util from '../../utils/auth'
import * as api from '../../services/Login/api'

// Worker sagas
// @param  returns action object
function* loginUser({type, payload}) {
	try {
    	yield put(showLoading())
		const response = yield call(api.login, payload)
		if (response.data.success){
	    	yield put(hideLoading())
			yield util.authenticateUser(response.data.token)
			yield put(action.loginSuccess(response.data.user))
			yield put(push('/todos'))
		} else {
	    	yield put(hideLoading())
			yield put(action.loginFailed(response.data.error))
		}
	} catch(err) {
		yield console.log('React JS '+err)
	}
}

function* logoutUser({type}) {
	try {
		yield util.deauthenticateUser()
		yield put(push('/'))
	} catch(err) {
		yield console.log('React JS '+err)
	}
}

// Watcher saga: watches for actions dispatched to the store, starts worker saga
function* watchRequestLogin() {
	yield takeLatest(AUTH.LOGIN, loginUser)
}

function* watchRequestLogout() {
	yield takeLatest(AUTH.LOGOUT, logoutUser)
}

export default function* authLogin() {
	yield all([
		fork(watchRequestLogin),
		fork(watchRequestLogout),
	])
}

