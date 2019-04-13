import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchTodos, deleteTodo, updateTodo} from './redux/actions'
import TodoListItem from '../../components/TodoListItem'

function TodoList (props) {
	// cDM
	useEffect(() => {
		setTimeout(() => { props.fetchTodos() }, 200)
	} , [])

	const handleDeleteClick = params => {
		props.deleteTodo(params)
	}

	const handleDoneClick = params => {
		props.updateTodo(params)
	}

	const renderedList = props.todos.map(todo => {
		return <TodoListItem key={todo.id} todo={todo} handleDeleteClick={handleDeleteClick} handleDoneClick={handleDoneClick}/> 
		})
	return (
		<div>
			{renderedList}
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	fetchTodos: () => dispatch(fetchTodos()),
	deleteTodo:  params => dispatch(deleteTodo(params)),
	updateTodo:  params => dispatch(updateTodo(params)),
})

const mapStateToProps = state => ({
	isLoading: state.todos.meta.isLoading,
	todos: state.todos.data
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default withRedux
