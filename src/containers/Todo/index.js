import React, { Component } from 'react';
import Card from '../../components/Card'
import TextField from '../../components/TextField'
import Form from '../../components/Form'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import './style.css'

class Todo extends Component {

	renderInput = ({input, fid, placeholder, type, meta}) => {
		return(
			<TextField fid={fid} placeholder={placeholder} type={type} {...input} />
		)
	}

	handleFormSubmit = formValues => {
		// this.props.authUser(formValues)
		console.log(formValues)
	}

	render() {
		const {handleSubmit} = this.props;
		return (
			<div className="todo-wrapper d-flex align-items-center justify-content-center">
					<Card variant="w-50"> 
						<Form onSubmit={handleSubmit(this.handleFormSubmit)}>
							<div className="d-flex align-items-baseline">
								<i className="fas fa-plus light-gray mr-3"></i>
								<Field 
										name="todo" 
										fid="todo"
										placeholder="What to do next?"
										component={this.renderInput} 
									/>
							</div>
						</Form>
						<div>
							<h4 className="bold">Todos</h4>
						</div>
					</Card>
			</div>
		);
	}
}

// const mapDispatchToProps = dispatch ({
// 	null
// })

// const mapStateToProps = this.state. ({
// 	null
// })

const form = reduxForm({
	form: 'AddTodoForm'
})

const withRedux = connect(null, null)(form(Todo))

export default withRedux
