import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import TodoListItem from '../../components/TodoListItem'
import {fetchTodos, deleteTodo, updateTodo} from '../../redux/Todo/actions'

function TodoList (props) {
	// cDM
	useEffect(() => {
		console.log('Rendered')
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
