import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    color: '#f5c518',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  };

  const activeStyle = {
    backgroundColor: '#2c2c2c',
    boxShadow: '0 0 10px #f5c518',
    transform: 'scale(1.05)',
  };

  return (
    <nav style={{
      backgroundColor: '#1e1e1e',
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      boxShadow: '0 2px 10px rgba(0,0,0,0.6)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <h1 style={{ color: '#f5c518', fontSize: '1.5rem', margin: 0 }}>🎬 My Movie App</h1>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
  <NavLink to="/" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>
    Home
  </NavLink>
  <NavLink to="/watchlist" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>
    Watchlist
  </NavLink>
  <NavLink to="/ratings" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>
    Ratings
  </NavLink>
  <NavLink to="/profile" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>
    Profile
  </NavLink>
  <NavLink to="/login" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>
    Login
  </NavLink>
  <NavLink to="/register" style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeStyle : {}) })}>
    Register
  </NavLink>
</div>
    </nav>
  );
};

export default Navbar;
