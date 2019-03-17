import {AUTH} from './constants'

const INITIAL_STATE = {
	user: {
		authToken: null
	},
	meta: {
		isLoading: false
	}
}

const auth = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		default:
			return state
	}
}

export default auth
