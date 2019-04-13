import {AUTH} from './constants'

const INITIAL_STATE = {
	response: {},
	meta: {
		isLoading: false,
		hasErrors: false
	}
}

const app = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case AUTH.REGISTER_USER:
			return {
				...state, 
				meta: {
					isLoading: true,
					hasErrors: false
				}
			}
		case AUTH.REGISTER_USER_SUCCESS:
			return {
				response: action.payload, 
				meta: {
					isLoading: false,
					hasErrors: false
				}
			}
		case AUTH.REGISTER_USER_VALIDATION_FAILED:
			return {
				response: action.payload, 
				meta: {
					isLoading: false,
					hasErrors: true
				}
			}
		default:
			return state
	}
}

export default app
