import React, { useState } from 'react';

const MovieReviewSection = ({ movieId }) => {
  const [userRating, setUserRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [userReview, setUserReview] = useState('');
  const [submittedReviews, setSubmittedReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(null);

  const handleStarClick = (index) => {
    setUserRating(index);
  };

  const handleSubmitReview = () => {
    if (!userRating || userReview.trim() === '') return;

    const newReview = {
      id: Date.now(),
      rating: userRating,
      text: userReview,
    };

    const updatedReviews = [...submittedReviews, newReview];
    setSubmittedReviews(updatedReviews);
    setUserReview('');
    setUserRating(0);
    updateAverageRating(updatedReviews);
  };

  const handleDelete = (id) => {
    const updated = submittedReviews.filter((r) => r.id !== id);
    setSubmittedReviews(updated);
    updateAverageRating(updated);
  };

  const handleEdit = (id) => {
    const reviewToEdit = submittedReviews.find((r) => r.id === id);
    setUserReview(reviewToEdit.text);
    setUserRating(reviewToEdit.rating);
    handleDelete(id);
  };

  const updateAverageRating = (reviews) => {
    const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
    setAverageRating(avg.toFixed(1));
  };
  const [isHovered, setIsHovered] = useState(false);

const submitButtonStyle = {
  background: isHovered ? '#e3b617' : '#f5c518', // IMDb yellow + hover effect
  color: 'black',
  border: 'none',
  padding: '10px 16px',
  marginTop: '0.5rem',
  fontWeight: 'bold',
  fontSize: '14px',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background 0.3s',
};


  return (
    <div style={{ borderTop: '1px solid #ccc', marginTop: '1rem', paddingTop: '1rem' }}>
      <h3 style={{ marginBottom: '0.5rem' }}>⭐ Rate & Review</h3>

      <div>
        {[1, 2, 3, 4, 5].map((index) => (
          <span
            key={index}
            style={{
              fontSize: '24px',
              color: (hoveredStar || userRating) >= index ? '#f5b301' : '#ccc',
              cursor: 'pointer',
              marginRight: '5px',
            }}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => setHoveredStar(index)}
            onMouseLeave={() => setHoveredStar(0)}
          >
            ★
          </span>
        ))}
      </div>

      <textarea
        placeholder="Write your review here..."
        value={userReview}
        onChange={(e) => setUserReview(e.target.value)}
        rows={3}
        style={{ width: '100%', marginTop: '0.5rem', padding: '0.5rem' }}
      ></textarea>

<button
  onClick={handleSubmitReview}
  style={submitButtonStyle}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  Submit Review
</button>


      {averageRating && (
        <p style={{ marginTop: '1rem' }}>
          <strong>Average Rating:</strong> {averageRating} / 5
        </p>
      )}

      {submittedReviews.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <h4>🗣 User Reviews</h4>
          {submittedReviews.map((review) => (
            <div
              key={review.id}
              style={{
                background: '#f9f9f9',
                padding: '0.5rem',
                marginBottom: '0.5rem',
                borderRadius: '5px',
              }}
            >
              <p>
                {'★'.repeat(review.rating)}
                {'☆'.repeat(5 - review.rating)}
              </p>
              <p>{review.text}</p>
              <button
                onClick={() => handleEdit(review.id)}
                style={{
                  marginRight: '0.5rem',
                  padding: '3px 6px',
                  background: '#ffc107',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(review.id)}
                style={{
                  padding: '3px 6px',
                  background: '#dc3545',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieReviewSection;
