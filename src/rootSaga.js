import {fork, all} from 'redux-saga/effects';
import registration from './containers/Registration/sagas'
import auth from './containers/Login/sagas'

export default function* rootSaga() {
	yield all([
		fork(registration),
		fork(auth)
	])
}