import React from "react";
import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  //
  let average =
    feedback.reduce((total, curr) => {
      return total + curr.rating;
    }, 0) / feedback.length;
  average = average
    .toFixed(1)
    .replace(/^([\d,]+)$|^([\d,]+)\.0*$|^([\d,]+\.[0-9]*?)0*$/, "$1$2$3");

  return (
    <div>
      <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
      </div>
    </div>
  );
};

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
