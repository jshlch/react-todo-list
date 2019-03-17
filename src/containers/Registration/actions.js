import {AUTH} from './constants'

export const registerUser = params =>  ({
	type: AUTH.REGISTER_USER,
	payload: params
})

export const registerUserSuccess = params =>  ({
	type: AUTH.REGISTER_USER_SUCCESS,
	payload: params
})

export const registerUserValidationFailed = params =>  ({
	type: AUTH.REGISTER_USER_VALIDATION_FAILED,
	payload: params
})