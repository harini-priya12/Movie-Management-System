import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const storedUsername = localStorage.getItem('username');

    if (isLoggedIn && storedUsername) {
      setIsAuthenticated(true);
      setUsername(storedUsername);
    } else {
      setIsAuthenticated(false);
      navigate('/login'); // force redirect to login
    }
  }, [navigate]);

  if (!isAuthenticated) return null; // prevents flicker

  return (
    <div style={{ padding: '2rem', color: '#fff' }}>
      <h2 style={{ color: '#f5c518' }}>👤 Welcome, {username}</h2>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: '#f5c518' }}>📌 Personal Details</h3>
        <p>Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
        <p>Preferences: Sci-fi, Drama</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: '#f5c518' }}>🎞️ Activity Summary</h3>
        <p>Movies Watched: 12</p>
        <p>Reviewed: 5</p>
        <p>Favorited: 3</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: '#f5c518' }}>⚙️ Account Settings</h3>
        <button style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#f5c518',
          border: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Change Password
        </button>
      </div>
    </div>
  );
};

export default Profile;
