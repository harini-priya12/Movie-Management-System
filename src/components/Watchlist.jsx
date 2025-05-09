import React from 'react';
import { useMovieContext } from '../context/MovieContext';

const Watchlist = () => {
  const { favorites, watchlist } = useMovieContext();

  return (
    <div style={{ padding: '2rem', color: '#fff' }}>
      <h2 style={{ fontSize: '22px', marginBottom: '1rem' }}>My Watchlist</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {watchlist.length > 0 ? watchlist.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        )) : <p style={{ color: '#ccc' }}>No movies in watchlist.</p>}
      </div>

      <h2 style={{ fontSize: '22px', marginTop: '3rem', marginBottom: '1rem' }}>My Favorites</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {favorites.length > 0 ? favorites.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        )) : <p style={{ color: '#ccc' }}>No favorite movies yet.</p>}
      </div>
    </div>
  );
};

const MovieCard = ({ movie }) => (
  <div style={{
    backgroundColor: '#1e1e1e',
    borderRadius: '8px',
    overflow: 'hidden',
    width: '200px',
    margin: '1rem',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)'
  }}>
    <img src={movie.poster} alt={movie.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
    <div style={{ padding: '0.5rem' }}>
      <h3 style={{ fontSize: '16px', marginBottom: '0.5rem', color: '#f5c518' }}>{movie.title}</h3>
      <p style={{ fontSize: '14px', color: '#ccc' }}>{movie.genre} • {movie.year}</p>
    </div>
  </div>
);

export default Watchlist;
