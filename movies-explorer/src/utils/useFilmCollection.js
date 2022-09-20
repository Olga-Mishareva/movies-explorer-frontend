import { getAllMovies } from './MoviesApi';
import useLocalStorage from './useLocalStorage';

function useFilmCollection(setError, setIsPopupOpen) {
  const [filmsCollection, setFilmsCollection] = useLocalStorage([], 'collection');

  function getFilmsCollection() {
    getAllMovies()
      .then(data => {
        setFilmsCollection(data);
      })
      .catch(err => {
        setError(err.message);
        setIsPopupOpen(true);
      });
  }

  return { filmsCollection, getFilmsCollection };
}

export default useFilmCollection;