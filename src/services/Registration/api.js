import api from '../../utils/api';

export const register = params => {
	return api.callPost('/register' , params)
}
