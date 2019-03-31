import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import Card from '../../components/Card'
import Loader from '../../components/Loader'
import TextField from '../../components/TextField'
import Form from '../../components/Form'
import TodoList from './TodoList'
import './style.css'
import {addTodo} from './actions'

class Todo extends Component {

	renderInput = ({input, fid, placeholder, type, meta}) => {
		return(
			<TextField fid={fid} placeholder={placeholder} type={type} {...input} />
		)
	}

	handleFormSubmit = formData => {
		const todo = {
			description: formData.todo,
			date: this.getCurrentDate()
		}
		this.props.addTodo(todo)
	}

	getCurrentDate = () => {
		const today = new Date();
		const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
		return date
	}

	render() {
		const {isLoading, hasErrors, handleSubmit} = this.props;
		return (
			<div className="todo-wrapper d-flex align-items-center justify-content-center">
				<Loader isLoading={isLoading}/>
					<div className="w-50 p-5"> 
						<div className="">
							<h4 className="bold">Todos</h4>
							<div className="my-4">
								<Form onSubmit={handleSubmit(this.handleFormSubmit)}>
									<div className="d-flex align-items-center">
										<i className="far fa-sticky-note medium light-gray mr-4"></i>
										<Field 
											name="todo" 
											fid="todo"
											placeholder="What is your next plan?"
											component={this.renderInput} 
										/>
									</div>
								</Form>
							</div>
							<TodoList /> 
						</div>
					</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	addTodo : data => dispatch(addTodo(data))
})

const mapStateToProps = state =>  ({
	hasErrors: state.todos.meta.hasErrors,
	isLoading: state.todos.meta.isLoading
})

const form = reduxForm({
	form: 'AddTodoForm'
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)(form(Todo))

export default withRedux
