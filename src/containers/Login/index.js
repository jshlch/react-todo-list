import React, {Component} from 'react'
import Card from '../../components/Card'
import Button from '../../components/Button'
import Form from '../../components/Form'
import TextField from '../../components/TextField'
import {reduxForm, Field} from 'redux-form'
import './style.css'

class Login extends Component {
	constructor(props) {
		super(props)

		this.renderInput.bind(this)
		this.handleFormSubmit.bind(this)
	}

	handleFormSubmit(formValues) {
		console.log(formValues)
	}

	renderInput({input, fid, placeholder, type, meta}) {
		return(
			<TextField fid={fid} placeholder={placeholder} type={type} {...input} />
		)
	}

	render() {
		console.log(this.props)
		return(
			<div className="login-wrapper d-flex align-items-center justify-content-center">
				<Card variant="w-50">
					<h4 className="bold">Login</h4>
						<Form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
							<div className="login-wrapper__form my-4">
								<Field 
									name="username" 
									fid="username"
									placeholder="Username"
									component={this.renderInput} 
								/>
								<Field 
									name="password" 
									fid="password"
									type="password"
									placeholder="Password"	
									component={this.renderInput} 
								/>
							</div>
							<Button variant="btn" text="Login"/>
							<Button variant="btn-flat gray" text="Register" link="/register"/>
						</Form>
				</Card>
			</div>
		)
	}
}

const withRedux = reduxForm({ 
	form: 'loginForm'
})(Login)

export default withRedux
