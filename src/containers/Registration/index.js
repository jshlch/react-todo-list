import React, {Component} from 'react'
import Card from '../../components/Card'
import Loader from '../../components/Loader'
import Button from '../../components/Button'
import Form from '../../components/Form'
import TextField from '../../components/TextField'
import {connect} from 'react-redux'
import {reduxForm, Field} from 'redux-form'
import {registerUser} from './actions'
import './style.css'

class Registration extends Component {
	handleFormSubmit = formValues => {
		const {registerUser} = this.props
		registerUser(formValues)
	}

	renderInput({input, fid, placeholder, type, meta}) {
		return(
			<TextField fid={fid} placeholder={placeholder} type={type} {...input} />
		)
	}

	render() {
		console.log(process.env.REACT_APP_DEV_API_URL)
		const {isLoading} = this.props
		return(
			<div className="registration-wrapper d-flex align-items-center justify-content-center">
			<Loader isLoading={isLoading}/>
				<Card variant="w-50">
					<h4 className="bold">Register</h4>
						<Form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
							<div className="registration-wrapper__form my-4">
								<Field 
									name="name" 
									component={this.renderInput} 
									fid="name"
									placeholder="Name"
									/>
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
									type="password"
									placeholder="Password"	
								/>
							</div>
							<Button variant="btn" text="Register"/>
							<Button variant="btn-flat gray" text="Login" link="/"/>
						</Form>
				</Card>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	isLoading: state.registration.isLoading
})

const mapDispatchToProps = dispatch => {
	return { 
		registerUser: values => dispatch(registerUser(values)) 
	}
}

const form = reduxForm({
	form: 'registrationForm'
})

const withRedux = connect(mapStateToProps, mapDispatchToProps)(form(Registration))

export default withRedux
