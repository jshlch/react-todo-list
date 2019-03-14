import api from '../../utils/api';

export const registerUser = params => {
	return api.callPost('/register' + params)
}
