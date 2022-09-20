const moviesURL = 'https://api.nomoreparties.co/beatfilm-movies';

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

export function getAllMovies() {
  return fetch(moviesURL, {
    method: 'GET'
  })
    .then(res => getResponseData(res))
}

