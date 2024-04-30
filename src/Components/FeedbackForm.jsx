import React from "react";
import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtndisabled] = useState(true);
  const [message, setMessage] = useState("");
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtndisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleInputText = (e) => {
    if (text === "") {
      setBtndisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 9) {
      setMessage("Text must be at least 10 charecters");
      setBtndisabled(true);
    } else {
      setMessage(null);
      setBtndisabled(false);
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            onChange={handleInputText}
            type="text"
            placeholder="Write a review"
            value={text}
          ></input>
          <Button type="submit" isDisabaled={btnDisabled}>
            Send
          </Button>
        </div>
      </form>

      {message && <div className="message">{message}</div>}
    </Card>
  );
};

export default FeedbackForm;
