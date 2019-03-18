import React, {Component} from 'react'
import Card from '../../components/Card'
import Loader from '../../components/Loader'
import Button from '../../components/Button'
import Form from '../../components/Form'
import TextField from '../../components/TextField'
import FieldError from '../../components/FieldError'
import {connect} from 'react-redux'
import {reduxForm, Field} from 'redux-form'
import {registerUser} from './actions'
import './style.css'

class Registration extends Component {
	
	handleFormSubmit = formValues => {
		const {registerUser} = this.props
		registerUser(formValues)
	}

	renderInput({input, fid, placeholder, type, variant, meta}) {
		return(
			<TextField fid={fid} placeholder={placeholder} type={type} variant={variant} {...input} />
		)
	}

	render() {
		const {errors, isLoading, handleSubmit} = this.props
		return(
			<div className="registration-wrapper d-flex align-items-center justify-content-center">
			<Loader isLoading={isLoading}/>
				<Card variant="w-50 p-5">
					<h4 className="bold">Register</h4>
						<Form onSubmit={handleSubmit(this.handleFormSubmit)}>
								<Field 
									fid="name"
									name="name"
									component={this.renderInput} 
									placeholder="Name"
									variant="mt-4"
									/>
								<FieldError errors={errors} field="name"/>
								<Field 
									fid="username"
									name="username" 
									component={this.renderInput} 
									placeholder="Username"
									variant="mt-4"
								/>
								<FieldError errors={errors} field="username"/>
								<Field 
									fid="password"
									name="password" 
									type="password"
									component={this.renderInput} 
									placeholder="Password"	
									variant="mt-4"
								/>
								<FieldError errors={errors} field="password"/>
							<div className="mt-5">
								<Button variant="btn-raised btn-primary w-50" text="Register"/>
								<Button variant="btn-secondary gray w-50" text="Login" link="/"/>
							</div>
						</Form>
				</Card>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	errors: state.registration.response.errors,
	hasErrors: state.registration.meta.hasErrors,
	isLoading: state.registration.meta.isLoading
})

const mapDispatchToProps = dispatch => {
	return { 
		registerUser: values => dispatch(registerUser(values)) 
	}
}

const form = reduxForm({
	form: 'RegistrationForm'
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)(form(Registration))

export default withRedux
