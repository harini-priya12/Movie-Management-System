import React, { useState } from "react";
import ManageMovies from "./admin/ManageMovies";
import ManageGenresDirectors from "./admin/ManageGenresDirectors";
import MonitorUserActivity from "./admin/MonitorUserActivity";
import ManageAnnouncements from "./admin/ManageAnnouncements";

const Admin = () => {
  const [activeTab, setActiveTab] = useState('movies');

  const renderTab = () => {
    switch (activeTab) {
      case 'movies':
        return <ManageMovies />;
      case 'genres':
        return <ManageGenresDirectors />;
      case 'users':
        return <MonitorUserActivity />;
      case 'announcements':
        return <ManageAnnouncements />;
      default:
        return <ManageMovies />;
    }
  };

  const handleLogout = () => {
    // Clear session or token logic here (frontend only)
    localStorage.removeItem('adminToken');
    window.location.href = '/admin-login'; // or your login route
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#1c1c1c', color: '#fff' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', backgroundColor: '#2a2a2a', padding: '2rem', boxShadow: '4px 0px 10px rgba(0,0,0,0.3)' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#f5c518', marginBottom: '2rem' }}>
          Admin Panel
        </h1>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button
            onClick={() => setActiveTab('movies')}
            style={{
              padding: '0.8rem',
              backgroundColor: activeTab === 'movies' ? '#f5c518' : '#333',
              color: activeTab === 'movies' ? '#000' : '#fff',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
          >
            🎬 Manage Movies
          </button>
          <button
            onClick={() => setActiveTab('genres')}
            style={{
              padding: '0.8rem',
              backgroundColor: activeTab === 'genres' ? '#f5c518' : '#333',
              color: activeTab === 'genres' ? '#000' : '#fff',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
          >
            🧩 Genres & Directors
          </button>
          <button
            onClick={() => setActiveTab('users')}
            style={{
              padding: '0.8rem',
              backgroundColor: activeTab === 'users' ? '#f5c518' : '#333',
              color: activeTab === 'users' ? '#000' : '#fff',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
          >
            📊 User Activity
          </button>
          <button
            onClick={() => setActiveTab('announcements')}
            style={{
              padding: '0.8rem',
              backgroundColor: activeTab === 'announcements' ? '#f5c518' : '#333',
              color: activeTab === 'announcements' ? '#000' : '#fff',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
          >
            📢 Announcements
          </button>
        </nav>
        <button
          onClick={handleLogout}
          style={{
            marginTop: '2rem',
            backgroundColor: '#f44336',
            color: '#fff',
            padding: '0.8rem',
            borderRadius: '5px',
            fontWeight: 'bold',
            width: '100%',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: '1', padding: '2rem', overflowY: 'auto', backgroundColor: '#121212' }}>
        {renderTab()}
      </main>
    </div>
  );
};

export default Admin;
