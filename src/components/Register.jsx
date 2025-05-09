// src/components/Register.jsx
import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registering:', name, email, password);
    // Later: Call backend API and save JWT
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto', color: '#fff' }}>
      <h2 style={{ color: '#f5c518' }}>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Register</button>
      </form>
    </div>
  );
};

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  marginBottom: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  backgroundColor: '#f5c518',
  color: '#000',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Register;
