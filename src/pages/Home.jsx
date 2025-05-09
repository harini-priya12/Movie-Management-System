import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieReviewSection from '../components/MovieReviewSection';

const imageUrls = [
  'https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg', // Avengers: Endgame
  'https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg',        // Inception
  'https://m.media-amazon.com/images/I/81kz06oSUeL.jpg',             // Interstellar
  'https://image.tmdb.org/t/p/original/6BMIooQpnhL4Q892WySS1Xy74yy.jpg', // Barbie
  'https://m.media-amazon.com/images/I/91xEP5+wQZL.jpg',             // Your Name
];

const movieList = [
  {
    id: 1,
    title: 'Inception',
    genre: 'Sci-Fi',
    year: 2010,
    poster: 'https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg',
    trailerUrl: 'https://www.youtube.com/embed/YoHD9XEInc0',
  },
  {
    id: 2,
    title: 'Interstellar',
    genre: 'Adventure',
    year: 2014,
    poster: 'https://m.media-amazon.com/images/I/81kz06oSUeL.jpg',
    trailerUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E',
  },
  {
    id: 3,
    title: 'Barbie',
    genre: 'Comedy',
    year: 2023,
    poster: 'https://image.tmdb.org/t/p/original/6BMIooQpnhL4Q892WySS1Xy74yy.jpg',
    trailerUrl: 'https://www.youtube.com/embed/pBk4NYhWNMM',
  },
  {
    id: 4,
    title: 'Your Name',
    genre: 'Romance',
    year: 2016,
    poster: 'https://m.media-amazon.com/images/I/91xEP5+wQZL.jpg',
    trailerUrl: 'https://www.youtube.com/embed/xU47nhruN-Q',
  }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#121212', color: '#fff', minHeight: '100vh' }}>
      {/* Background Carousel */}
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <div
          style={{
            backgroundImage: `url(${imageUrls[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)',
            position: 'absolute',
            width: '100%',
            height: '100%',
            transition: 'background-image 1s ease-in-out',
            zIndex: 0,
          }}
        />
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          textAlign: 'center',
          padding: '2rem',
        }}>
          <h1 style={{
            color: '#f5c518',
            fontSize: '3rem',
            textShadow: '2px 2px 6px black',
          }}>
            🎥 Welcome to MovieVerse
          </h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
            Explore top movies on our <Link to="/dashboard" style={{ color: '#f5c518', textDecoration: 'underline' }}>Dashboard</Link>
          </p>
        </div>
      </div>

      {/* Movie Cards */}
      <div style={{ padding: '2rem' }}>
        <h2 style={{ marginBottom: '1rem', color: '#f5c518' }}>🎬 Featured Movies</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {movieList.map((movie) => (
            <div
              key={movie.id}
              style={{
                width: '180px',
                cursor: 'pointer',
                backgroundColor: '#1e1e1e',
                padding: '0.5rem',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                transition: 'transform 0.3s ease-in-out',
              }}
              onClick={() => setSelectedMovie(movie)}
            >
              <img
                src={movie.poster}
                alt={movie.title}
                style={{ width: '100%', borderRadius: '4px' }}
              />
              <h3 style={{ margin: '0.5rem 0 0 0' }}>{movie.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{movie.genre} • {movie.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Movie Review + Trailer */}
      {selectedMovie && (
        <div style={{ padding: '2rem', backgroundColor: '#1a1a1a' }}>
          <h2 style={{ color: '#f5c518' }}>{selectedMovie.title} Trailer & Reviews</h2>
          <MovieReviewSection movie={selectedMovie} />
        </div>
      )}
    </div>
  );
};

export default Home;
