import {AUTH} from './constants'

const INITIAL_STATE = {
	user: {},
	isLoading: false
}

const app = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case AUTH.REGISTER_USER:
			return {...state, isLoading: true}
		case AUTH.REGISTER_USER_SUCCESS:
			return {user: action.payload, isLoading: false}
		default:
			return state
	}
}

export default app
