// context/MovieContext.jsx
import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const addToFavorites = (movie) => {
    if (!favorites.some((m) => m.title === movie.title)) {
      setFavorites([...favorites, movie]);
    }
  };

  const addToWatchlist = (movie) => {
    if (!watchlist.some((m) => m.title === movie.title)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  return (
    <MovieContext.Provider value={{ favorites, watchlist, addToFavorites, addToWatchlist }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
