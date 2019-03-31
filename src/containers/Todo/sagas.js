// import * as api from './api'
// import { push } from 'connected-react-router'
import {reset} from 'redux-form'
import {put, call, fork, takeEvery, all} from 'redux-saga/effects'
import * as todo from './actions'
import {TODO} from './constants'

// Worker saga
function* addTodo(action) {
	// try {
	// 	const response = yield call(api.registerUser, action.payload)	
	// 	if(response.data.success) {
	// 		yield put(auth.registerUserSuccess(response.data))
	// 		yield put(push('/'))
	// 		yield put(reset('RegistrationForm'))
	// 	} else {
	// 		yield put(auth.registerUserValidationFailed(response.data))
	// 	}
	// } catch(err) {
	// 	yield console.log('React JS '+err)
	// }
	yield put(todo.addTodo(action.payload))
	yield put(todo.success())
	yield put(dispatch(reset('AddTodoForm')))
}

function* deleteTodo(action) {
	yield put(todo.deleteTodo(action.payload))
	yield put(todo.success())
}


// Watcher saga: watches for actions dispatched to the store, starts worker saga
function* watchRequestAddTodo() {
	yield takeEvery(TODO.ADD_TODO, addTodo)
}

function* watchRequestDeleteTodo() {
	yield takeEvery(TODO.DELETE_TODO, deleteTodo);
}

export default function* todo() {
	yield all([
		fork(watchRequestAddTodo),
		fork(watchRequestDeleteTodo)
	])
}

