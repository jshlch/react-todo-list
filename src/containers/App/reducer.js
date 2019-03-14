import {AUTH} from './constants'

const INITIAL_STATE = {
	user: {},
	authToken: null,
	isLoading: false
}

const app = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		default:
			return state
	}
}

export default app
