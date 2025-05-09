import React, { useEffect, useState } from 'react';

const ManageMovies = () => {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({
    title: '',
    genre: '',
    year: '',
    director: '',
    posterUrl: '',
    trailerUrl: '',
  });
  const [editId, setEditId] = useState(null);

  // Load movies from localStorage on mount
  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    setMovies(savedMovies);
  }, []);

  // Save movies to localStorage when movies state changes
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId !== null) {
      const updated = movies.map((m) =>
        m.id === editId ? { ...form, id: editId } : m
      );
      setMovies(updated);
      setEditId(null);
    } else {
      const newMovie = { ...form, id: Date.now() };
      setMovies([...movies, newMovie]);
    }
    setForm({
      title: '',
      genre: '',
      year: '',
      director: '',
      posterUrl: '',
      trailerUrl: '',
    });
  };

  const handleEdit = (movie) => {
    setForm(movie);
    setEditId(movie.id);
  };

  const handleDelete = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🎬 Manage Movies</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        {['title', 'genre', 'year', 'director', 'posterUrl', 'trailerUrl'].map(
          (field) => (
            <input
              key={field}
              type="text"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              style={styles.input}
              required={field !== 'trailerUrl'}
            />
          )
        )}
        <button type="submit" style={styles.submitButton}>
          {editId ? 'Update Movie' : 'Add Movie'}
        </button>
      </form>

      <div style={styles.movieList}>
        {movies.map((movie) => (
          <div key={movie.id} style={styles.movieCard}>
            <img
              src={movie.posterUrl}
              alt={movie.title}
              style={styles.poster}
            />
            <div style={styles.movieInfo}>
              <h3 style={styles.movieTitle}>{movie.title}</h3>
              <p style={styles.movieMeta}>
                {movie.genre} | {movie.year} | {movie.director}
              </p>
              <div style={styles.buttonGroup}>
                <button style={styles.editButton} onClick={() => handleEdit(movie)}>
                  Edit
                </button>
                <button style={styles.deleteButton} onClick={() => handleDelete(movie.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 🔧 Styling
const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#121212',
    color: '#fff',
    fontFamily: 'sans-serif',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#f5c518',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  form: {
    display: 'grid',
    gap: '1rem',
    maxWidth: '600px',
    margin: '0 auto 3rem',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    fontSize: '16px',
  },
  submitButton: {
    backgroundColor: '#f5c518',
    color: '#000',
    fontWeight: 'bold',
    padding: '0.75rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: '0.3s',
  },
  movieList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  movieCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  poster: {
    width: '100%',
    height: '360px',
    objectFit: 'cover',
  },
  movieInfo: {
    padding: '1rem',
    textAlign: 'center',
  },
  movieTitle: {
    margin: '0 0 0.5rem',
    color: '#f5c518',
  },
  movieMeta: {
    fontSize: '14px',
    color: '#aaa',
    marginBottom: '1rem',
  },
  buttonGroup: {
    display: 'flex',
    gap: '0.5rem',
    justifyContent: 'center',
  },
  editButton: {
    padding: '6px 10px',
    backgroundColor: 'transparent',
    color: '#f5c518',
    border: '1px solid #f5c518',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    padding: '6px 10px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ManageMovies;
