import {fork, all} from 'redux-saga/effects';
import auth from './containers/Login/redux/sagas'
import registration from './containers/Registration/redux/sagas'
import todos from './containers/Todo/redux/sagas'

export default function* rootSaga() {
	yield all([
		fork(auth),
		fork(registration),
		fork(todos),
	])
}