import React from 'react'
import {connect} from 'react-redux'
import {reduxForm, Field} from 'redux-form'
import Card from '../../components/Card'
import Button from '../../components/Button'
import Form from '../../components/Form'
import {renderTextField} from '../../components/ReduxFormField'
import {login} from '../../redux/Login/actions'
import './_style.css'

function Login (props) {
	const {handleSubmit, isLoading, loginUser} = props

  	const handleFormSubmit = formValues => {
	 	loginUser(formValues)
  }

	return(
		<div className="login-wrapper d-flex align-items-center justify-content-center">
			<Card variant="w-50 p-5">
				<h4 className="gray bold">Login</h4>
					<Form onSubmit={handleSubmit(handleFormSubmit)}>
						<Field 
							name="username" 
							component={renderTextField} 
							fid="username"
							placeholder="Username"
							variant="mt-4"
						/>
						<Field 
							name="password" 
							fid="password"
							type="password"
							placeholder="Password"	
							component={renderTextField} 
							variant="mt-4"
						/>
						<div className="mt-5">
							<Button variant="btn-raised btn-primary w-50" text="Login" />
							<Button variant="btn-secondary gray w-50" text="Register"  link="/register"/>
						</div>
					</Form>
			</Card>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	loginUser: values => dispatch(login(values))
})

const mapStateToProps = state => ({
		isLoading: state.auth.meta.isLoading
})

const form = reduxForm({
	form: 'LoginForm'
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)(form(Login))

export default withRedux
