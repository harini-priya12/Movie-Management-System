import React from 'react';

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: '#141414',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #333',
      }}
    >
      <h1 style={{ fontSize: '24px', color: '#f5c518' }}>IMDb Clone</h1>
      <nav>
        <a href="#" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Watchlist</a>
        <a href="#" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Profile</a>
      </nav>
    </header>
  );
};

export default Header;
