import {TODO} from './constants'

export const addTodo = params =>  ({
	type: TODO.ADD_TODO,
	payload: params
})

export const deleteTodo = params =>  ({
	type: TODO.DELETE_TODO,
	payload: params
})

export const markTodoAsDone = params =>  ({
	type: TODO.MARK_TODO_AS_DONE,
	payload: params
})