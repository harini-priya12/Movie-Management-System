import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

const MonitorUserActivity = () => {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [movieFilter, setMovieFilter] = useState('');
  const [userFilter, setUserFilter] = useState('');
  const [activityTypeFilter, setActivityTypeFilter] = useState('');

  // Dummy data for demonstration
  const dummyData = [
    {
      username: 'john_doe',
      movieTitle: 'Inception',
      activityType: 'favorite',
      date: new Date().toISOString(),
    },
    {
      username: 'jane_smith',
      movieTitle: 'The Matrix',
      activityType: 'watchlist',
      date: new Date().toISOString(),
    },
    {
      username: 'john_doe',
      movieTitle: 'Interstellar',
      activityType: 'review',
      date: new Date().toISOString(),
    },
    {
      username: 'susan_lee',
      movieTitle: 'Avengers: Endgame',
      activityType: 'favorite',
      date: new Date().toISOString(),
    },
  ];

  // Initial fetch (dummy data)
  useEffect(() => {
    setActivities(dummyData);
    setFilteredActivities(dummyData);
  }, []);

  // Filter the activities automatically when filters change
  useEffect(() => {
    let filtered = activities;

    if (movieFilter) {
      filtered = filtered.filter(a =>
        a.movieTitle.toLowerCase().includes(movieFilter.toLowerCase())
      );
    }
    if (userFilter) {
      filtered = filtered.filter(a =>
        a.username.toLowerCase().includes(userFilter.toLowerCase())
      );
    }
    if (activityTypeFilter) {
      filtered = filtered.filter(
        a => a.activityType.toLowerCase() === activityTypeFilter.toLowerCase()
      );
    }

    setFilteredActivities(filtered);
  }, [movieFilter, userFilter, activityTypeFilter, activities]);

  // Export to Excel
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredActivities);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'User Activities');
    XLSX.writeFile(wb, 'user_activities.xlsx');
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#121212', color: '#fff' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#f5c518', marginBottom: '2rem' }}>
        🎬 User Activity Monitoring
      </h2>

      {/* Filters */}
      <div style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Filter by Movie"
          value={movieFilter}
          onChange={e => setMovieFilter(e.target.value)}
          style={{ padding: '0.8rem', borderRadius: '5px', flex: '1 1 200px' }}
        />
        <input
          type="text"
          placeholder="Filter by User"
          value={userFilter}
          onChange={e => setUserFilter(e.target.value)}
          style={{ padding: '0.8rem', borderRadius: '5px', flex: '1 1 200px' }}
        />
        <select
          value={activityTypeFilter}
          onChange={e => setActivityTypeFilter(e.target.value)}
          style={{ padding: '0.8rem', borderRadius: '5px', flex: '1 1 200px' }}
        >
          <option value="">Filter by Activity Type</option>
          <option value="favorite">Favorite</option>
          <option value="watchlist">Watchlist</option>
          <option value="review">Review</option>
        </select>
      </div>

      {/* Export button */}
      <div style={{ marginBottom: '2rem' }}>
        <button
          onClick={exportToExcel}
          style={{
            backgroundColor: '#4CAF50',
            color: '#fff',
            padding: '0.8rem 1.2rem',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Export to Excel
        </button>
      </div>

      {/* Activity Table */}
      <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ color: '#FF8C00' }}>
            <th style={{ padding: '8px', borderBottom: '1px solid #333' }}>User</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #333' }}>Movie</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #333' }}>Type</th>
            <th style={{ padding: '8px', borderBottom: '1px solid #333' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredActivities.length > 0 ? (
            filteredActivities.map((a, i) => (
              <tr key={i} style={{ borderTop: '1px solid #555' }}>
                <td style={{ padding: '8px' }}>{a.username}</td>
                <td style={{ padding: '8px' }}>{a.movieTitle}</td>
                <td style={{ padding: '8px' }}>{a.activityType}</td>
                <td style={{ padding: '8px' }}>{new Date(a.date).toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ padding: '8px', textAlign: 'center' }}>
                No activities found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MonitorUserActivity;
