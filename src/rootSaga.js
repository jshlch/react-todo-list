import {fork, all} from 'redux-saga/effects';
import registration from './containers/Registration/sagas'

export default function* rootSaga() {
	yield all([
		fork(registration)
	])
}