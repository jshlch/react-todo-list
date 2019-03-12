import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Login, Registration } from './pages'

const routes = () => {
	return(
		<Router>
			<div>
				<Route exact path="/" component={() => <Login />} />
			</div>
		</Router>
	)
}

export default routes