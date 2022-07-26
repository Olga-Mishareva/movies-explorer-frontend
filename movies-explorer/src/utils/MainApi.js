const baseURL = 'https://api.movies.om.nomoredomains.xyz';
// const baseURL = 'http://localhost:3000';

function getResponseData(res) {
  if (res.ok) {
    return res.json();
  }
  else {
    return res.json()
      .then(data => {
        throw new Error(data.message);
      });
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

export function getUser() {
  return fetch(`${baseURL}/users/me`, {
    method: 'GET',
    credentials: 'include',
  })
   .then(res => getResponseData(res))
}

export function updateUser(name, email) {
  return fetch(`${baseURL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email })
  })
   .then(res => getResponseData(res))
}

export function addMovie({ country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId }) {
  return fetch(`${baseURL}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      country,
      director, 
      duration, 
      year, 
      description,
      image, 
      trailerLink, 
      nameRU, 
      nameEN, 
      thumbnail, 
      movieId
    })
  })
    .then(res => getResponseData(res))
}

export function getAddedMovies() {
  return fetch(`${baseURL}/movies`, {
    method: 'GET',
    credentials: 'include',
  })
    .then(res => getResponseData(res))
}

export function removeMovie({ id }) {
  return fetch(`${baseURL}/movies/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  })
    .then(res => getResponseData(res))
}