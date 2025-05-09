import React, { useState } from 'react';

const Ratings = () => {
const [reviews, setReviews] = useState([
    {
        title: 'Interstellar',
        stars: 5,
        comment: 'Mind-blowing and emotional sci-fi journey.',
    },
    {
        title: 'Joker',
        stars: 4,
        comment: 'Dark, powerful, and masterfully acted.',
    },
]);

  const [newReview, setNewReview] = useState({
    title: '',
    stars: 0,
    comment: '',
  });

  const handleRating = (value) => {
    setNewReview({ ...newReview, stars: value });
  };

  const handleAddReview = () => {
    if (
      newReview.title.trim() &&
      newReview.stars > 0 &&
      newReview.comment.trim()
    ) {
      setReviews([...reviews, newReview]);
      setNewReview({ title: '', stars: 0, comment: '' });
    }
  };

  return (
    <div
      style={{
        padding: '2rem',
        color: '#fff',
        backgroundColor: '#121212',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2
        style={{
          fontSize: '24px',
          marginBottom: '1.5rem',
          color: '#f5c518',
        }}
      >
        Rate & Review Movies
      </h2>

      {/* Add Review Section */}
      <div
        style={{
          marginBottom: '2rem',
          padding: '1rem',
          backgroundColor: '#1e1e1e',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
        }}
      >
        <h3 style={{ marginBottom: '0.8rem' }}>Add Your Review</h3>
        <input
          type="text"
          placeholder="Movie Title"
          value={newReview.title}
          onChange={(e) =>
            setNewReview({ ...newReview, title: e.target.value })
          }
          style={{
            padding: '0.5rem',
            width: '200px',
            marginRight: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />

        <span style={{ marginRight: '1rem' }}>
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              onClick={() => handleRating(value)}
              style={{
                fontSize: '24px',
                cursor: 'pointer',
                color: value <= newReview.stars ? '#FFD700' : '#888',
                marginRight: '5px',
              }}
            >
              ★
            </span>
          ))}
        </span>

        <input
          type="text"
          placeholder="Your Comment"
          value={newReview.comment}
          onChange={(e) =>
            setNewReview({ ...newReview, comment: e.target.value })
          }
          style={{
            padding: '0.5rem',
            width: '300px',
            marginRight: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />

        <button
          onClick={handleAddReview}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#f5c518',
            color: '#000',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
          }}
        >
          Submit
        </button>
      </div>

      {/* Review List */}
      <div>
        <h3 style={{ marginBottom: '1rem' }}>All Reviews</h3>
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#1e1e1e',
              padding: '1rem',
              borderRadius: '10px',
              marginBottom: '1rem',
              boxShadow: '0 1px 5px rgba(0,0,0,0.3)',
            }}
          >
            <h4 style={{ color: '#f5c518', marginBottom: '0.5rem' }}>
              {review.title}
            </h4>
            <div style={{ display: 'flex', marginBottom: '0.5rem' }}>
              {[1, 2, 3, 4, 5].map((val) => (
                <span
                  key={val}
                  style={{
                    color: val <= review.stars ? '#FFD700' : '#555',
                    fontSize: '20px',
                    marginRight: '4px',
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            <p style={{ color: '#ccc' }}>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ratings;
