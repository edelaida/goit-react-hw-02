//import React from "react";

// import { useEffect } from "react";

const Feedback = ({ values, total, PositiveFeedback }) => {
  // useEffect(() => {
  //   console.log(`feedback total ${totalFeedback}`);
  // }, [totalFeedback]);
  const isTotal = total === 0;
  return (
    <div>
      <p>Feedback</p>
      {isTotal ? (
        <p>No feedback yet</p>
      ) : (
        <ul>
          <li>Good: {values.good}</li>
          <li>Neutral {values.neutral} </li>
          <li>Bad {values.bad} </li>
          <li>Total {total} </li>
          <li>Positive {PositiveFeedback} </li>
        </ul>
      )}
    </div>
  );
};

export default Feedback;
