import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const handleLogin = () => {
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
    // Simulated login logic (replace with real API later)
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else if(username === 'user' && password === 'user123'){
      // regular user
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      localStorage.setItem('isAdmin', 'false');
       navigate('/dashboard');
    } else {
      setError('Invalid credentials.');
    }
  }
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#121212',
    }}>
      <form
        onSubmit={handleLogin}
        style={{
          backgroundColor: '#1e1e1e',
          padding: '2rem',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0,0,0,0.8)',
          color: '#fff',
          width: '300px'
        }}
      >
        <h2 style={{ color: '#f5c518', textAlign: 'center' }}>🔐 Login</h2>

        {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          style={{
            width: '100%',
            padding: '0.5rem',
            marginBottom: '1rem',
            borderRadius: '5px',
            border: '1px solid #555',
            backgroundColor: '#2a2a2a',
            color: '#fff'
          }}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          style={{
            width: '100%',
            padding: '0.5rem',
            marginBottom: '1rem',
            borderRadius: '5px',
            border: '1px solid #555',
            backgroundColor: '#2a2a2a',
            color: '#fff'
          }}
        />

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.6rem',
            backgroundColor: '#f5c518',
            color: '#000',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Login
        </button>

        <p style={{ marginTop: '1rem', fontSize: '13px', textAlign: 'center', color: '#888' }}>
          Try: <br />
          <strong>user/userpass</strong> or <strong>admin/adminpass</strong>
        </p>
      </form>
    </div>
  );
};

export default Login;
