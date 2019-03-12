import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import rootReducer from './reducers'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';

// React DevTools Config
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Store
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware())
)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);