import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import { logger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// DEV tools middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware, logger))
)

sagaMiddleware.run(rootSaga)

export default configureStore