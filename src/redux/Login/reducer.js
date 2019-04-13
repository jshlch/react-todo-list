import {AUTH} from './constants'

const INITIAL_STATE = {
	response: {},
	meta: {
		isLoading: false
	}
}

const login = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case AUTH.LOGIN:
			return {
				...state,
				meta: {
					isLoading: true
				} 
			}
		case AUTH.LOGIN_SUCCESS:
			return {
				response: action.payload,
				meta: {
					isLoading: false
				} 
			}
		case AUTH.LOGIN_FAILED:
			return {
				response: action.payload,
				meta: {
					isLoading: false
				} 
			}
		case AUTH.LOGOUT:
			return {
				response: {},
				meta: {
					isLoading: false
				} 
			}
		default:
			return state
	}
}

export default login
