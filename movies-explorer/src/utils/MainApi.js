export const baseURL = 'https://api.movies.om.nomoredomains.xyz';

function getResponseData(res) {
  if (res.ok) res.json();
  else {
    return res.json()
      .then(data => new Error(data.message));
  }
}

export function register(name, email, password) {
  return fetch(`${baseURL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  })
    .then(res => getResponseData(res))
}

export function login(email, password) {
  return fetch(`${baseURL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
    .then(res => getResponseData(res))
}

export function logout(email) {
  return fetch(`${baseURL}/signout`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }) 
  })
    .then(res => getResponseData(res))
}