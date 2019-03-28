import React, {Component} from 'react'
import Card from '../../components/Card'
import Loader from '../../components/Loader'
import Button from '../../components/Button'
import Form from '../../components/Form'
import TextField from '../../components/TextField'
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux'
import {login} from './actions'
import './style.css'

class Login extends Component {
	handleFormSubmit = formValues => {
		this.props.authUser(formValues)
	}

	renderInput({input, fid, placeholder, variant, type, meta}) {
		console.log(input)
		return(
			<TextField fid={fid} placeholder={placeholder} type={type} variant={variant} {...input} />
		)
	}

	render() {
		const {handleSubmit, isLoading} = this.props;
		return(
			<div className="login-wrapper d-flex align-items-center justify-content-center">
				<Loader isLoading={isLoading}/>
				<Card variant="w-50 p-5">
					<h4 className="bold">Login</h4>
						<Form onSubmit={handleSubmit(this.handleFormSubmit)}>
								<Field 
									name="username" 
									fid="username"
									placeholder="Username"
									component={this.renderInput} 
									variant="mt-4"
								/>
								<Field 
									name="password" 
									fid="password"
									type="password"
									placeholder="Password"	
									component={this.renderInput} 
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
}

const mapDispatchToProps = dispatch => ({
	authUser: values => dispatch(login(values))
})

const mapStateToProps = state => ({
		isLoading: state.auth.meta.isLoading
})

const form = reduxForm({
	form: 'LoginForm'
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)(form(Login))

export default withRedux
