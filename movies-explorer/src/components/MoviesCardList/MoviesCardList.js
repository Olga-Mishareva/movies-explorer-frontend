import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({
  matchedMovies,
  userMatchedMovies,
  showedMovies,
  isUsersFilmsSearched,
  isSearched,
  noResult,
  likedMovies,
  onMore,
  savedMovies,
  getSavedMovies,
  onSave,
  onRemove,
}) {
  const location = useLocation();
  const [moviesList, setMoviesList] = useState([]);

  // console.log(userMatchedMovies)
  // console.log(isSearched)

  useEffect(() => {
    setMoviesList(location.pathname === '/movies' ? showedMovies : isUsersFilmsSearched ? userMatchedMovies : savedMovies);
  }, [savedMovies, showedMovies, userMatchedMovies])

  // console.log(showedMovies)
  // console.log(moviesList)

  return (
    <div className={`card-list card-list_${noResult ? "invisible" : ""}`}>
      <ul className="card-list__grid">
        {moviesList.map((movie) => {
          return (
            <MoviesCard
              key={movie.id || movie._id}
              movie={movie}
              showedMovies={showedMovies}
              savedMovies={savedMovies}
              // liked={liked}
              // setLiked={setLiked}
              getSavedMovies={getSavedMovies}
              onSave={onSave}
              onRemove={onRemove}
            />
          );
        })}
      </ul>
      <button
        className={`card-list__more-btn card-list__more-btn_${
          location.pathname === "/saved-movies" ||
          matchedMovies.length === showedMovies.length ||
          noResult ||
          !isSearched
            ? "invisible"
            : ""
        }`}
        type="button"
        onClick={onMore}>
        Ещё
      </button>
    </div>
  );
}

export default MoviesCardList;
