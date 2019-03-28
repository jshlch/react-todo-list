import {TODO} from './constants'

const INITIAL_STATE = {
	data: [],
	meta: {
		isLoading: false,
		hasErrors: false
	}
}

const todo = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case TODO.ADD_TODO:
			return {
				data: [
					...state.data,
					action.payload
				], 
				meta: {
					isLoading: true,
					hasErrors: false
				}
			}
		default:
			return state
	}
}

export default todo
