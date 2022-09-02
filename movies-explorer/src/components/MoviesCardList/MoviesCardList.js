import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({
  matchedMovies,
  moviesToShow,
  isSearched,
  noResult,
  onMore,
  savedMovies,
  onSave,
  onRemove,
}) {
  const { pathname } = useLocation();

  return (
    <div className={`card-list card-list_${noResult ? "invisible" : ""}`}>
      <ul className="card-list__grid">
        {moviesToShow.map((movie) => {
          return (
            <MoviesCard
              key={movie.id || movie.movieId}
              movie={movie}
              savedMovies={savedMovies}
              onSave={onSave}
              onRemove={onRemove}>
            </MoviesCard>
          );
        })}
      </ul>
      <button
        className={`card-list__more-btn card-list__more-btn_${
          pathname === "/saved-movies" ||
          matchedMovies.length === moviesToShow.length ||
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
