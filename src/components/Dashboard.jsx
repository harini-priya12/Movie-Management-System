import React, { useState } from 'react';
import { useMovieContext } from '../context/MovieContext';
import MovieReviewSection from './MovieReviewSection';
import { useAuth } from '../context/AuthContext';

const dummyMovies = [
  {
    title: 'Inception',
    genre: 'Sci-Fi',
    year: '2010',
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
    crew: ['Christopher Nolan (Director)', 'Emma Thomas (Producer)'],
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEj0RnZ8hY-Rx3pGptH3Fuo3Ch13KrbbkMxQ&s',
    trailerUrl: 'YoHD9XEInc0',
  },
  {
    title: 'The Dark Knight',
    genre: 'Action',
    year: '2008',
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    crew: ['Christopher Nolan (Director)', 'Charles Roven (Producer)'],
    poster: 'https://m.media-amazon.com/images/I/81IfoBox2TL.jpg',
    trailerUrl: 'EXeTwQWrcwY',
  },
  {
    title: 'Interstellar',
    genre: 'Adventure',
    year: '2014',
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    crew: ['Christopher Nolan (Director)', 'Emma Thomas (Producer)'],
    poster: 'https://m.media-amazon.com/images/I/61ef5BpdZTL.jpg',
    trailerUrl: 'zSWdZVtXT7E',
  },
  {
    title: 'Avengers: Endgame',
    genre: 'Action',
    year: '2019',
    director: 'Anthony and Joe Russo',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo'],
    crew: ['Kevin Feige (Producer)'],
    poster: 'https://m.media-amazon.com/images/I/71niXI3lxlL.jpg',
    trailerUrl: 'TcMBFSGVi1c',
  },
  {
    title: 'Joker',
    genre: 'Drama',
    year: '2019',
    director: 'Todd Phillips',
    cast: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
    crew: ['Todd Phillips (Director)', 'Bradley Cooper (Producer)'],
    poster: 'https://m.media-amazon.com/images/I/81lCSCwfLkL._AC_UF1000,1000_QL80_.jpg',
    trailerUrl: 'zAGVQLHvwOY',
  },
  {
    title: 'Parasite',
    genre: 'Thriller',
    year: '2019',
    director: 'Bong Joon Ho',
    cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'],
    crew: ['Bong Joon Ho (Director)', 'Kwak Sin-ae (Producer)'],
    poster: 'https://m.media-amazon.com/images/I/81-rG+CAzuL._AC_UF894,1000_QL80_.jpg',
    trailerUrl: '5xH0HfJHsaY',
  },
  {
    title: 'The Matrix',
    genre: 'Sci-Fi',
    year: '1999',
    director: 'Lana and Lilly Wachowski',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    crew: ['Joel Silver (Producer)'],
    poster: 'https://m.media-amazon.com/images/I/71PfZFFz9yL._AC_UF1000,1000_QL80_.jpg',
    trailerUrl: 'vKQi3bBA1y8',
  },
  {
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    year: '1994',
    director: 'Frank Darabont',
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    crew: ['Niki Marvin (Producer)'],
    poster: 'https://m.media-amazon.com/images/I/51R0XUE2OAL._AC_UF894,1000_QL80_.jpg',
    trailerUrl: 'NmzuHjWmXOc',
  },
  {
    title: 'Forrest Gump',
    genre: 'Drama',
    year: '1994',
    director: 'Robert Zemeckis',
    cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
    crew: ['Wendy Finerman (Producer)'],
    poster: 'https://images-cdn.ubuy.co.in/6341130b59f5d1339534ead5-forrest-gump-movie-poster-regular.jpg',
    trailerUrl: 'bLvqoHBptjg',
  },
  {
    title: 'Gladiator',
    genre: 'Historical Drama',
    year: '2000',
    director: 'Ridley Scott',
    cast: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'],
    crew: ['Douglas Wick (Producer)'],
    poster: 'https://m.media-amazon.com/images/I/61dcMsYIAJL._AC_UF894,1000_QL80_.jpg',
    trailerUrl: 'owK1qxDselE',
  },
  {
    title: 'Titanic',
    genre: 'Romance',
    year: '1997',
    director: 'James Cameron',
    cast: ['Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane'],
    crew: ['James Cameron (Director)', 'Jon Landau (Producer)'],
    poster: 'https://m.media-amazon.com/images/I/61xncIl872L._AC_UF1000,1000_QL80_.jpg',
    trailerUrl: '2e-eXJ6HgkQ',
  },
  {
    title: 'The Avengers',
    genre: 'Superhero',
    year: '2012',
    director: 'Joss Whedon',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
    crew: ['Kevin Feige (Producer)'],
    poster: 'https://images-cdn.ubuy.co.in/67c96f00ba5a7f75883bd56c-the-avengers-movie-poster-b-11-x-17.jpg',
    trailerUrl: 'eOrNdBpGMv8',
  },
  {
    title: 'Spider-Man: No Way Home',
    genre: 'Action',
    year: '2021',
    director: 'Jon Watts',
    cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch'],
    crew: ['Kevin Feige (Producer)'],
    poster: 'https://m.media-amazon.com/images/I/710FiJX7EJL._AC_UF1000,1000_QL80_.jpg',
    trailerUrl: 'JfVOs4VSpmA',
  },
  {
    title: 'The Lion King',
    genre: 'Animation',
    year: '1994',
    director: 'Roger Allers, Rob Minkoff',
    cast: ['Matthew Broderick', 'Jeremy Irons', 'James Earl Jones'],
    crew: ['Don Hahn (Producer)'],
    poster: 'https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjM0ZDExZWI4MmQ0MTc1NGIyMDVhMzM1LXRoZS1saW9uLWtpbmctMjAxOS1tb3ZpZS1wb3N0ZXIuanBn.jpg',
    trailerUrl: '7TavVZMewpY',
  },
  {
    title: 'Dune',
    genre: 'Sci-Fi',
    year: '2021',
    director: 'Denis Villeneuve',
    cast: ['Timothée Chalamet', 'Rebecca Ferguson', 'Oscar Isaac'],
    crew: ['Denis Villeneuve (Director)', 'Mary Parent (Producer)'],
    poster: 'https://m.media-amazon.com/images/I/71mY5zOlgFL.jpg',
    trailerUrl: 'n9xhJrPXop4',
  },
];


const Dashboard = () => {
  const { favorites, watchlist, addToFavorites, addToWatchlist } = useMovieContext();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [directorFilter, setDirectorFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const { user } = useAuth();
  const isFavorite = (movie) => favorites.some((fav) => fav.title === movie.title);
  const isInWatchlist = (movie) => watchlist.some((wm) => wm.title === movie.title);

  const filteredMovies = dummyMovies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!genreFilter || movie.genre === genreFilter) &&
      (!directorFilter || movie.director === directorFilter) &&
      (!yearFilter || movie.year === yearFilter)
    );
  });

  const uniqueGenres = [...new Set(dummyMovies.map((m) => m.genre))].sort();
  const uniqueDirectors = [...new Set(dummyMovies.map((m) => m.director))].sort();
  const uniqueYears = [...new Set(dummyMovies.map((m) => m.year))].sort((a, b) => b - a);
  const handleAddToFavorites = (movie) => {
    if (!user) {
      alert("Please log in to add to favorites");
      return;
    }
    addToFavorites(movie);
  };
  
  const handleAddToWatchlist = (movie) => {
    if (!user) {
      alert("Please log in to add to watchlist");
      return;
    }
    addToWatchlist(movie);
  };
  
  return (
    <div style={{ padding: '2rem', backgroundColor: '#121212', color: '#fff' }}>
      <h1 style={{ color: '#f5c518' }}>🎥 Dashboard - Click a Poster</h1>

      {/* 🔍 Search and Filters */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', margin: '1rem 0' }}>
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '0.5rem',
            borderRadius: '5px',
            border: '1px solid #555',
            backgroundColor: '#1e1e1e',
            color: '#fff',
          }}
        />

        {[{
          value: genreFilter,
          onChange: setGenreFilter,
          label: 'All Genres',
          options: uniqueGenres,
        }, {
          value: directorFilter,
          onChange: setDirectorFilter,
          label: 'All Directors',
          options: uniqueDirectors,
        }, {
          value: yearFilter,
          onChange: setYearFilter,
          label: 'All Years',
          options: uniqueYears,
        }].map(({ value, onChange, label, options }, idx) => (
          <select
            key={idx}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{
              padding: '0.5rem',
              borderRadius: '5px',
              backgroundColor: '#1e1e1e',
              color: '#fff',
              border: '1px solid #555',
            }}
          >
            <option value="">{label}</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        ))}
      </div>

      {/* 🎞 Movie Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        {filteredMovies.length > 0 ? filteredMovies.map((movie) => (
          <div
            key={movie.title}
            style={{ textAlign: 'center', cursor: 'pointer' }}
            onClick={() => setSelectedMovie(movie)}
            title="Click to view details and trailer"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              style={{
                width: '100%',
                height: '240px',
                objectFit: 'cover',
                borderRadius: '6px',
                transition: 'transform 0.2s ease-in-out',
              }}
              onError={(e) =>
                (e.target.src = 'https://via.placeholder.com/160x240?text=No+Image')
              }
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
            />
            <p style={{ color: '#f5c518', marginTop: '0.3rem' }}>
              {movie.title} ({movie.year})
            </p>
            <p style={{ fontSize: '12px', color: '#aaa' }}>{movie.genre}</p>
          </div>
        )) : <p>No movies match the selected filters.</p>}
      </div>

      {/* 🎬 Selected Movie Details */}
      {selectedMovie && (
        <div
          style={{
            marginTop: '2rem',
            padding: '1rem',
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
          }}
        >
          <h2 style={{ color: '#f5c518' }}>
            {selectedMovie.title} ({selectedMovie.year})
          </h2>

          <div style={{ margin: '1rem 0' }}>
          <button onClick={() => handleAddToFavorites(selectedMovie)}
              style={{
                marginRight: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: isFavorite(selectedMovie) ? '#f5c518' : '#333',
                color: isFavorite(selectedMovie) ? '#000' : '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: '0.3s',
              }}>
              {isFavorite(selectedMovie) ? '★ In Favorites' : '☆ Add to Favorites'}
            </button>
            <button onClick={() => handleAddToWatchlist(selectedMovie)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: isInWatchlist(selectedMovie) ? '#f5c518' : '#333',
                color: isInWatchlist(selectedMovie) ? '#000' : '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: '0.3s',
              }}
            >
              {isInWatchlist(selectedMovie) ? '✔ In Watchlist' : '+ Add to Watchlist'}
            </button>
          </div>

          <h3 style={{ marginTop: '1rem' }}>🎭 Cast</h3>
          <ul>
            {selectedMovie.cast.map((actor) => (
              <li key={actor}>{actor}</li>
            ))}
          </ul>

          <h3>🎬 Crew</h3>
          <ul>
            {selectedMovie.crew.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
          <h3>📝 Description</h3>
<p style={{ lineHeight: '1.6', marginTop: '0.5rem' }}>
  <strong>{selectedMovie.title}</strong> is a {selectedMovie.genre.toLowerCase()} film released in {selectedMovie.year}, directed by {selectedMovie.director}. 
  The movie stars {selectedMovie.cast.slice(0, 2).join(', ')} and more. 
  It features a talented crew including {selectedMovie.crew.join(', ')}.
</p>

          <h3>📽 Trailer</h3>
          <div style={{ position: 'relative', paddingTop: '56.25%', marginTop: '1rem' }}>
            <iframe
              src={`https://www.youtube.com/embed/${selectedMovie.trailerUrl}`}
              title="Trailer"
              frameBorder="0"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '6px',
              }}
            ></iframe>
          </div>
          <MovieReviewSection movieId={selectedMovie.title} />

        </div>
      )}
    </div>
  );
};

export default Dashboard;
