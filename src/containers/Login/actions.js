import {AUTH} from './constants'

export const login = params =>  ({
	type: AUTH.LOGIN,
	payload: params
})

export const loginSuccess = params =>  ({
	type: AUTH.LOGIN_SUCCESS,
	payload: params
})


