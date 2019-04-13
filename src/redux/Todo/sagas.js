import {put, call, fork, takeLatest, all} from 'redux-saga/effects'
import {showLoading, hideLoading} from 'react-redux-loading-bar'
import {reset} from 'redux-form'
import {TODO} from './constants'
import * as action from './actions'
import * as api from '../../services/Todo/api'

// Worker sagas
// @param  returns action object
function* fetchTodos ({type, payload}) {
	try {
		yield put(showLoading())
		const response = yield call(api.fetchTodos)
		const {success, data} = response.data
		if (success) {
			yield put(action.successTodo(data.todos))
			yield put(reset('AddTodoForm'))
		}
		yield put(hideLoading())
	} catch (err) {
		yield console.log(err)
	} 
}

function* addTodo ({type, payload}) {
	try {
			yield put(showLoading())
		const response = yield call(api.addTodo, payload)
		const {success, data} = response.data
		if(success) {
			yield put(action.successTodo(data.todos))
			yield put(reset('AddTodoForm'))
		} else {
			yield console.log("SOMETHING WENT WRONG")
		}
			yield put(hideLoading())
	} catch(err) {
		yield console.log(err)
	}
}

function* deleteTodo ({type, payload}) {
	try {
			yield put(showLoading())
		const response = yield call(api.deleteTodo, payload)
		const {success, data} = response.data
		if(success) {
			yield put(action.successTodo(data.todos))
		} else {
			yield console.log("SOMETHING WENT WRONG")
		}
			yield put(hideLoading())
	} catch(err) {
		yield console.log(err)
	}
}

function* updateTodo ({type, payload}) {
	try {
			yield put(showLoading())
		const response = yield call(api.updateTodo, payload)
		const {success, data} = response.data
		if(success) {
			yield put(action.successTodo(data.todos))
		} else {
			yield console.log("SOMETHING WENT WRONG")
		}
			yield put(hideLoading())
	} catch(err) {
		yield console.log(err)
	}
}

// Watcher saga: watches for actions dispatched to the store, starts worker saga
function* watchRequestFetchTodos () {
	yield takeLatest(TODO.FETCH_TODOS, fetchTodos)
}

function* watchRequestAddTodo () {
	yield takeLatest(TODO.ADD_TODO, addTodo)
}

function* watchRequestDeleteTodo () {
	yield takeLatest(TODO.DELETE_TODO, deleteTodo);
}

function* watchRequestUpdateTodo () {
	yield takeLatest(TODO.UPDATE_TODO, updateTodo);
}

export default function* todos() {
	yield all([
		fork(watchRequestFetchTodos),
		fork(watchRequestAddTodo),
		fork(watchRequestDeleteTodo),
		fork(watchRequestUpdateTodo)
	])
}

