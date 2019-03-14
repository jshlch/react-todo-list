import {AUTH} from './constants'

export const loginUser = params =>  {
	type: AUTH.LOGIN_USER;
	payload: params
}

