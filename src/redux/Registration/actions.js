import {AUTH} from './constants'

export const register = params =>  ({
	type: AUTH.REGISTER_USER,
	payload: params
})

export const registerSuccess = params =>  ({
	type: AUTH.REGISTER_USER_SUCCESS,
	payload: params
})

export const registerValidationFailed = params =>  ({
	type: AUTH.REGISTER_USER_VALIDATION_FAILED,
	payload: params
})