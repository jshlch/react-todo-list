import {TODO} from './constants'

export const fetchTodos = params =>  ({
	type: TODO.FETCH_TODOS,
	payload: params
})

export const addTodo = params =>  ({
	type: TODO.ADD_TODO,
	payload: params
})

export const deleteTodo = params =>  ({
	type: TODO.DELETE_TODO,
	payload: params
})

export const updateTodo = params =>  ({
	type: TODO.UPDATE_TODO,
	payload: params
})

export const successTodo = params =>  ({
	type: TODO.SUCCESS_TODO,
	payload: params
})
