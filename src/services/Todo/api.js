import api from '../../utils/api';

export const fetchTodos = params => {
	return api.callGet('/todos') 
}

export const addTodo = params => {
	return api.callPost('/todos' , params) 
}

export const updateTodo = params => {
	return api.callPut('/todos/' + params) 
}

export const deleteTodo = params => {
	return api.callDelete('/todos/' + params) 
}

