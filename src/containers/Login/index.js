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

		this.handleFormSubmit.bind(this)
	}

	handleFormSubmit() {

	}

	renderInput({input, fid, placeholder, meta}) {
		return(
			<TextField fid={fid} placeholder={placeholder} {...input} />
		)
	}

	render() {
		console.log(this.props)
		return(
			<div className="login-wrapper d-flex align-items-center justify-content-center">
				<Card variant="w-50">
					<h4 className="bold">Login</h4>
						<Form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
							<div className="login-wrapper__form mt-5 mb-3">
								<Field 
									name="username" 
									component={this.renderInput} 
									fid="username"
									placeholder="Username"
								/>
								<Field 
									name="password" 
									component={this.renderInput} 
									fid="password"
									placeholder="Password"	
								/>
							</div>
							<Button variant="btn" text="Login"/>
							<Button variant="btn-flat gray" text="Register"/>
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
