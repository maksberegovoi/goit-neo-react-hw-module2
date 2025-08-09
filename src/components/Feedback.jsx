import React from 'react';


const Feedback = ({feedback, positive}) => {
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
};

export default Feedback;