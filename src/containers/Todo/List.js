import React, { Component } from 'react';
import TodoItem from '../../components/TodoItem'

class List extends Component {	
	render() {
		return (
			<div className="mt-3">
				<TodoItem todo="Wash the dishes" date="01/02/19"/> 
				<TodoItem todo="Take a bath" date="01/02/19"/> 
				<TodoItem todo="Feed the homeless" date="01/02/19"/> 
				<TodoItem todo="Punch the wall" date="01/02/19"/> 
			</div>
		);
	}
}

export default List
