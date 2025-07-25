import React from 'react';


const Options = ({updateFeedback, totalFeedback}) => {
  return (
    <div>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={() => updateFeedback()}>Reset</button>
      )}
    </div>
  );
};

export default Options;