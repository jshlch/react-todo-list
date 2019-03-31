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
		case TODO.DELETE_TODO:
			const newData = state.data.filter(todo => todo.description !== action.payload )
			return {
				data: newData, 
				meta: {
					isLoading: true,
					hasErrors: false
				}
			}
		case TODO.SUCCESS:
			console.log("TEST")
			return {
				data: [
					...state.data
				],
				meta: {
					isLoading: false,
					hasErrors: false
				}
			}
		default:
			return state
	}
}

export default todo
