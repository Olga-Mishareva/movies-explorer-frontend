import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import useMoviesSearch from '../../utils/useMoviesSearch';
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({
  matchedMovies,
  showedMovies,
  userMatchedMovies,
  isUsersFilmsSearched,
  isSearched,
  noResult,
  likedMovies,
  onMore,
  savedMovies,
  setUserMatchedMovies,
  getSavedMovies,
  onSave,
  onRemove,
}) {
  const location = useLocation();
  // const { userMatchedMovies } = useMoviesSearch();
  const [moviesList, setMoviesList] = useState([]);


  useEffect(() => {
    if (location.pathname === '/saved-movies') {
      let userMatchedList = [];
      userMatchedMovies.map(machedMovie => {
      return savedMovies.forEach(savedMovie => {
        if (machedMovie._id === savedMovie._id) {
          userMatchedList.push(machedMovie);
        }
      });
    });
    setUserMatchedMovies(userMatchedList);
  }
  }, [savedMovies]);

  console.log(userMatchedMovies)

  // console.log(userMatchedMovies)
  // console.log(isSearched)

  // useEffect(() => {  // два, чтобы не рендерился если не по тому пути
  //   if (location.pathname === '/movies') {
  //     setMoviesList(showedMovies.map(movie => {
        
  //       return savedMovies.forEach(savedMovie => {
  //         console.log(movie, savedMovie)
  //         return movie.id === savedMovie.movieId ? savedMovie : movie;
  //       });
  //     }));
  //   }
  // }, [savedMovies]);

  // console.log(showedMovies)

  useEffect(() => {
    // if (location.pathname === '/saved-movies') {
    //   setMoviesList(showedMovies);
    // }
    setMoviesList(location.pathname === '/movies' ? showedMovies : !isUsersFilmsSearched ? savedMovies : userMatchedMovies);
  }, [savedMovies, showedMovies, userMatchedMovies])

  // console.log(showedMovies)
  // console.log(moviesList)

  return (
    <div className={`card-list card-list_${noResult ? "invisible" : ""}`}>
      <ul className="card-list__grid">
        {moviesList.map((movie) => {
          return (
            <MoviesCard
              key={movie.id || movie.movieId}
              movie={movie}
              showedMovies={showedMovies}
              savedMovies={savedMovies}
              userMatchedMovies={userMatchedMovies}
              isUsersFilmsSearched={isUsersFilmsSearched}
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
