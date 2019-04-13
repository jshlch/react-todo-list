import React from 'react';
import App from './App';
import ReactDOM from 'react-dom'
import configureStore from './configureStore'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'

function startApp() {
	const history = createBrowserHistory()
	const store = configureStore(history)
	ReactDOM.render(
		<Provider store={store}>
	    <ConnectedRouter history={history}>
				<App />
	  	</ConnectedRouter>
		</Provider>,
		document.getElementById('root')
	);
}

startApp()