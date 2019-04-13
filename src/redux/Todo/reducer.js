import {TODO} from './constants'
import {AUTH} from '../Login/constants'

const INITIAL_STATE = {
	data: [],
	meta: {
		isLoading: false,
		hasErrors: false
	}
}

const todos = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case TODO.FETCH_TODOS:
			return {
				data: [
					...state.data
				], 
				meta: {
					isLoading: true,
					hasErrors: false
				}
			}
		case TODO.ADD_TODO:
			return {
				data: [
					...state.data
				], 
				meta: {
					isLoading: true,
					hasErrors: false
				}
			}
		case TODO.DELETE_TODO:
			return {
				data: [
					...state.data
				],
				meta: {
					isLoading: true,
					hasErrors: false
				}
			}
		case TODO.UPDATE_TODO:
			return {
				data: [
					...state.data
				],
				meta: {
					isLoading: true,
					hasErrors: false
				}
			}
		case TODO.SUCCESS_TODO:
			return {
				data: [
					...action.payload
				],
				meta: {
					isLoading: false,
					hasErrors: false
				}
			}
		case AUTH.LOGOUT:
			return {
				data: [],
				meta: {
					isLoading: false
				} 
			}
		default:
			return state
	}
}

export default todos
