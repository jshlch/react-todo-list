import React from 'react'
import {connect} from 'react-redux'
import {reduxForm, Field} from 'redux-form'
import {register} from '../../redux/Registration/actions'
import Card from '../../components/Card'
import Button from '../../components/Button'
import Form from '../../components/Form'
import {renderTextField} from '../../components/ReduxFormField'
import FieldError from '../../components/FieldError'
import './_style.css'

function Registration (props) {
	const {errors, isLoading, handleSubmit} = props

	const handleFormSubmit = formValues => {
		props.registerUser(formValues)
	}

	return(
		<div className="registration-wrapper d-flex align-items-center justify-content-center">
			<Card variant="w-50 p-5">
				<h4 className="gray bold">Register</h4>
				<Form onSubmit={handleSubmit(handleFormSubmit)}>
					<Field 
						fid="name"
						name="name"
						component={renderTextField} 
						placeholder="Name"
						variant="mt-4"
						/>
					<FieldError errors={errors} field="name"/>
					<Field 
						fid="username"
						name="username" 
						component={renderTextField} 
						placeholder="Username"
						variant="mt-4"
					/>
					<FieldError errors={errors} field="username"/>
					<Field 
						fid="password"
						name="password" 
						type="password"
						component={renderTextField} 
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

const mapStateToProps = state => ({
	errors: state.registration.response.errors,
	hasErrors: state.registration.meta.hasErrors,
	isLoading: state.registration.meta.isLoading
})

const mapDispatchToProps = dispatch => {
	return { 
		registerUser: values => dispatch(register(values)) 
	}
}

const form = reduxForm({
	form: 'RegistrationForm'
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)(form(Registration))

export default withRedux
