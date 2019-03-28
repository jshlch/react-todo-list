import React, { Component } from 'react';
import { connect } from 'react-redux'
import TodoItem from '../../components/TodoItem'

class List extends Component {	
	render() {
		const renderedList = this.props.todos.map(todo => {
			return (
					<TodoItem todo={todo.description} date={todo.date}/> 
			);
		})
		return(
			<div >
				{renderedList}
			</div>
		)
	}
}

const mapStateToProps = state => ({
		isLoading: state.auth.meta.isLoading,
		todos: state.todos.data
})

// const form = reduxForm({
// })

const withRedux = connect(mapStateToProps, null)(List)

export default withRedux
