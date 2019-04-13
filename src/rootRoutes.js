import React from 'react'
import {PageLogin, PageRegistration, PageTodo} from './pages'
import {Route, Switch } from 'react-router-dom'

const routes = () => {
	return(
		<Switch>
			<Route exact path="/" component={() => <PageLogin />} />
			<Route path="/register" component={() => <PageRegistration />} />
			<Route path="/todos" component={() => <PageTodo />} />
		</Switch>
	)	
}

export default routes