import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {addTodo} from './redux/actions'
import {logout} from '../Login/redux/actions'
import {renderTextField} from '../../components/ReduxFormField'
import Form from '../../components/Form'
import TodoList from './TodoList'
import './_style.css'

function Todo (props) {
	const {todos, handleSubmit} = props;

	const handleFormSubmit = (formData) => {
		const todo = {
			description: formData.todo
		}
		props.addTodo(todo)
	}

	const handleLogoutClick = () => {
		props.logoutUser()
	}

	return (
		<div className={todos.length <= 3 ? 'todo-wrapper d-flex justify-content-center hv-100' : 'todo-wrapper d-flex justify-content-center'}>
			<div className="d-flex align-items-center todo-logout pointer" onClick={handleLogoutClick}>
				<i className="fas fa-chevron-left xxsmall light-gray"></i>
				<span className="light-gray xsmall bold ml-2">LOGOUT</span>
			</div>
			<div className="d-flex flex-column justify-content-center w-50 p-5"> 
				<div className="">
					<h4 className="gray light">Todos</h4>
					<div className="my-4">
						<Form onSubmit={handleSubmit(handleFormSubmit)}>
							<div className="d-flex align-items-center">
								<i className="far fa-sticky-note medium light-gray mr-4"></i>
								<Field 
									name="todo" 
									fid="todo"
									placeholder="What is your next plan?"
									component={renderTextField} 
								/>
							</div>
						</Form>
					</div>
					<TodoList /> 
				</div>
			</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	addTodo : data => dispatch(addTodo(data)),
	logoutUser : () => dispatch(logout())
})

const mapStateToProps = state =>  ({
	todos: state.todos.data,
	isLoading: state.todos.meta.isLoading
})

const form = reduxForm({
	form: 'AddTodoForm'
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)(form(Todo))

export default withRedux