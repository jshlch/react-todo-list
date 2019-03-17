import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

const configureStore = history => {
	const sagaMiddleware = createSagaMiddleware()
	const routeMiddleware = routerMiddleware(history)
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

	const store = createStore(
		rootReducer(history),
		composeEnhancers(
			applyMiddleware(
				sagaMiddleware, 
				routeMiddleware
			)
		)
	)
	sagaMiddleware.run(rootSaga)

	return store
}

export default configureStore
