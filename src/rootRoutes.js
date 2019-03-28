import React from 'react'
import { Login, Registration, Todo } from './pages'
import {Route, Switch } from 'react-router-dom'

const routes = () => {
	return(
		<Switch>
			<Route exact path="/" component={() => <Login />} />
			<Route path="/register" component={() => <Registration />} />
			<Route path="/todo" component={() => <Todo />} />
		</Switch>
	)	
}

export default routes