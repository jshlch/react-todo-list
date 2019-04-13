import api from '../../utils/api';

export const login = params => {
	return api.callPost('/login' , params)
}
