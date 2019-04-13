import {fork, all} from 'redux-saga/effects';
import auth from './redux/Login/sagas'
import registration from './redux/Registration/sagas'
import todos from './redux/Todo//sagas'

export default function* rootSaga() {
	yield all([
		fork(auth),
		fork(registration),
		fork(todos),
	])
}