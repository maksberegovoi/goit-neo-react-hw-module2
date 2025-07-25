import React from 'react';


const Feedback = ({feedback, good, totalFeedback}) => {
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Positive: {Math.round((good / totalFeedback) * 100)}%</p>
    </div>
  );
};

export default Feedback;