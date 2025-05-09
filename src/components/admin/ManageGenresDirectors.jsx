import { useState, useEffect } from 'react';

const ManageGenresDirectors = () => {
  const [genres, setGenres] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [newGenre, setNewGenre] = useState('');
  const [newDirector, setNewDirector] = useState('');

  // Load from localStorage
  useEffect(() => {
    const storedGenres = JSON.parse(localStorage.getItem('genres')) || [];
    const storedDirectors = JSON.parse(localStorage.getItem('directors')) || [];
    setGenres(storedGenres);
    setDirectors(storedDirectors);
  }, []);

  // Save to localStorage whenever genres or directors change
  useEffect(() => {
    localStorage.setItem('genres', JSON.stringify(genres));
  }, [genres]);

  useEffect(() => {
    localStorage.setItem('directors', JSON.stringify(directors));
  }, [directors]);

  const addGenre = () => {
    if (!newGenre.trim()) return;
    const newEntry = { id: Date.now(), name: newGenre.trim() };
    setGenres([...genres, newEntry]);
    setNewGenre('');
  };

  const addDirector = () => {
    if (!newDirector.trim()) return;
    const newEntry = { id: Date.now(), name: newDirector.trim() };
    setDirectors([...directors, newEntry]);
    setNewDirector('');
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#121212', color: '#fff' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#f5c518', marginBottom: '2rem' }}>
        🎬 Manage Genres & Directors
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
      }}>
        {/* Genres Section */}
        <div>
          <h3 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '0.5rem' }}>Genres</h3>
          <input
            value={newGenre}
            onChange={(e) => setNewGenre(e.target.value)}
            placeholder="New Genre"
            style={{
              backgroundColor: '#1e1e1e',
              color: '#fff',
              padding: '0.5rem',
              border: '1px solid #555',
              borderRadius: '5px',
              width: '100%',
              marginBottom: '0.5rem'
            }}
          />
          <button
            onClick={addGenre}
            style={{
              backgroundColor: '#f5c518',
              color: '#000',
              padding: '0.4rem 1rem',
              borderRadius: '5px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s ease-in-out',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e3b617')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f5c518')}
          >
            Add Genre
          </button>

          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: '#ccc' }}>
            {genres.map((g) => (
              <li key={g.id} style={{ padding: '0.2rem 0' }}>{g.name}</li>
            ))}
          </ul>
        </div>

        {/* Directors Section */}
        <div>
          <h3 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '0.5rem' }}>Directors</h3>
          <input
            value={newDirector}
            onChange={(e) => setNewDirector(e.target.value)}
            placeholder="New Director"
            style={{
              backgroundColor: '#1e1e1e',
              color: '#fff',
              padding: '0.5rem',
              border: '1px solid #555',
              borderRadius: '5px',
              width: '100%',
              marginBottom: '0.5rem'
            }}
          />
          <button
            onClick={addDirector}
            style={{
              backgroundColor: '#f5c518',
              color: '#000',
              padding: '0.4rem 1rem',
              borderRadius: '5px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s ease-in-out',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e3b617')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f5c518')}
          >
            Add Director
          </button>

          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: '#ccc' }}>
            {directors.map((d) => (
              <li key={d.id} style={{ padding: '0.2rem 0' }}>{d.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManageGenresDirectors;
