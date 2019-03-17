//Setting user token  inside local storage
export function authenticateUser(token) {
  localStorage.setItem('token', token);
}

export function deauthenticateUser() {
  localStorage.removeItem('token');
}

export function isUserAuthenticated() {
  return localStorage.getItem('token') !== null;
}

export function getToken() {
  return localStorage.getItem('token');
}
