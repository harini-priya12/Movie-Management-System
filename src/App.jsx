import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Watchlist from './components/Watchlist';
import Ratings from './components/Ratings';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { MovieProvider } from './context/MovieContext';
import { useMovieContext } from './context/MovieContext'; // path must be correct
import Profile from './components/Profile';
import Admin from './components/Admin';
const App = () => {
  return (
    <MovieProvider>
    <Router>
      <div style={{ backgroundColor: '#121212', minHeight: '100vh', color: '#fff' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/ratings" element={<Ratings />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

      </div>
    </Router>
    </MovieProvider>
  );
};

export default App;
