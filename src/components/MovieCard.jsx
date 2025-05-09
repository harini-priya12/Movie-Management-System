import React, { useState } from 'react';

const MovieCard = ({ title, genre, releaseDate, poster }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchlisted, setIsWatchlisted] = useState(false);
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    if (value >= 1 && value <= 5) setRating(value);
  };

  return (
    <div style={{
      border: '1px solid #444',
      borderRadius: '12px',
      margin: '10px',
      padding: '15px',
      width: '220px',
      backgroundColor: '#1c1c1c',
      color: '#fff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    }}>
      <img src={poster} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
      <h3 style={{ margin: '10px 0' }}>{title}</h3>
      <p style={{ color: '#aaa', marginBottom: '10px' }}>{genre} | {releaseDate}</p>

      {/* Favorite and Watchlist Buttons */}
      <div style={{ marginBottom: '10px' }}>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          style={{
            backgroundColor: isFavorite ? '#ffd700' : '#333',
            color: isFavorite ? '#000' : '#fff',
            border: 'none',
            padding: '6px 10px',
            margin: '4px',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          {isFavorite ? '★ Favorited' : '☆ Add to Favorites'}
        </button>

        <button
          onClick={() => setIsWatchlisted(!isWatchlisted)}
          style={{
            backgroundColor: isWatchlisted ? '#90ee90' : '#333',
            color: isWatchlisted ? '#000' : '#fff',
            border: 'none',
            padding: '6px 10px',
            margin: '4px',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          {isWatchlisted ? '✔ Watchlisted' : '+ Add to Watchlist'}
        </button>
      </div>

      {/* Rating Section */}
      <div>
        <p style={{ marginBottom: '6px' }}>Your Rating:</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {[1, 2, 3, 4, 5].map((value) => (
            <img
              key={value}
              src={value <= rating
                ? 'https://upload.wikimedia.org/wikipedia/commons/1/17/Star_full.svg'
                : 'https://upload.wikimedia.org/wikipedia/commons/4/49/Star_empty.svg'}
              alt={`${value} star`}
              onClick={() => handleRating(value)}
              style={{
                width: '24px',
                height: '24px',
                cursor: 'pointer',
                marginRight: '4px'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
