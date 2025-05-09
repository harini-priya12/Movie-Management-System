import { useState, useEffect } from 'react';

const ManageAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnn, setNewAnn] = useState({
    title: '',
    message: '',
    scheduledDate: '',
    pinned: false,
  });
  const [editingAnn, setEditingAnn] = useState(null);

  // Simulate initial fetch (optional dummy data)
  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        title: 'Welcome to My Movies!',
        message: 'This is your first announcement.',
        scheduledDate: new Date().toISOString(),
        pinned: true,
      },
    ];
    setAnnouncements(dummyData);
  }, []);

  const saveAnnouncement = () => {
    if (!newAnn.title || !newAnn.message) {
      alert('Title and message are required.');
      return;
    }

    if (editingAnn) {
      setAnnouncements((prev) =>
        prev.map((a) => (a.id === editingAnn.id ? { ...a, ...newAnn } : a))
      );
    } else {
      const newItem = {
        id: Date.now(),
        ...newAnn,
      };
      setAnnouncements((prev) => [...prev, newItem]);
    }

    setNewAnn({ title: '', message: '', scheduledDate: '', pinned: false });
    setEditingAnn(null);
  };

  const remove = (id) => {
    setAnnouncements((prev) => prev.filter((a) => a.id !== id));
  };

  const edit = (a) => {
    setEditingAnn(a);
    setNewAnn({
      title: a.title,
      message: a.message,
      scheduledDate: a.scheduledDate,
      pinned: a.pinned,
    });
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#121212', color: '#fff' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#f5c518', marginBottom: '2rem' }}>
        Manage Announcements
      </h2>

      <input
        placeholder="Title"
        value={newAnn.title}
        onChange={(e) => setNewAnn({ ...newAnn, title: e.target.value })}
        style={{
          backgroundColor: '#1e1e1e',
          color: '#fff',
          padding: '0.5rem',
          border: '1px solid #555',
          borderRadius: '5px',
          width: '100%',
          marginBottom: '1rem',
        }}
      />

      <textarea
        placeholder="Message"
        value={newAnn.message}
        onChange={(e) => setNewAnn({ ...newAnn, message: e.target.value })}
        style={{
          backgroundColor: '#1e1e1e',
          color: '#fff',
          padding: '0.5rem',
          border: '1px solid #555',
          borderRadius: '5px',
          width: '100%',
          marginBottom: '1rem',
        }}
      />

      <input
        type="datetime-local"
        value={newAnn.scheduledDate}
        onChange={(e) => setNewAnn({ ...newAnn, scheduledDate: e.target.value })}
        style={{
          backgroundColor: '#1e1e1e',
          color: '#fff',
          padding: '0.5rem',
          border: '1px solid #555',
          borderRadius: '5px',
          width: '100%',
          marginBottom: '1rem',
        }}
      />

      <label style={{ marginBottom: '1rem', display: 'block' }}>
        <input
          type="checkbox"
          checked={newAnn.pinned}
          onChange={(e) => setNewAnn({ ...newAnn, pinned: e.target.checked })}
        />
        {' '}Pin Announcement
      </label>

      <button
        onClick={saveAnnouncement}
        style={{
          backgroundColor: '#f5c518',
          color: '#000',
          padding: '0.6rem 1.2rem',
          borderRadius: '5px',
          fontWeight: 'bold',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.3s ease-in-out',
        }}
      >
        {editingAnn ? 'Update Announcement' : 'Post Announcement'}
      </button>

      <ul style={{ marginTop: '2rem', paddingLeft: '0', listStyle: 'none' }}>
        {announcements.length > 0 ? (
          announcements.map((a) => (
            <li
              key={a.id}
              style={{
                backgroundColor: '#1e1e1e',
                padding: '1rem',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              <div>
                <strong>{a.title}</strong>
                <p>{a.message}</p>
                <p>Scheduled: {new Date(a.scheduledDate).toLocaleString()}</p>
                <p>{a.pinned ? '📌 Pinned' : 'Not Pinned'}</p>
              </div>
              <div>
                <button
                  onClick={() => edit(a)}
                  style={{
                    backgroundColor: '#f5c518',
                    color: '#000',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease-in-out',
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => remove(a.id)}
                  style={{
                    backgroundColor: '#f5c518',
                    color: '#000',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease-in-out',
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No announcements available.</p>
        )}
      </ul>
    </div>
  );
};

export default ManageAnnouncements;
