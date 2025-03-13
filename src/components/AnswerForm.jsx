import React from "react";
import "./AnswerForm.css";
import { useState } from "react";
const AnswerForm = (props) => {
  function checkAnswer() {
    var newStreak = props.currentStreak;
    var newLongest = props.longestStreak;
    var newHasCorrect = props.hasCorrect;
    if (
      props.userInput.toLowerCase() != "" &&
      props.userInput.toLowerCase() == props.correctAnswer.toLowerCase()
    ) {
      newStreak += 1;
      newHasCorrect = "correct";
      props.setHasCorrect(newHasCorrect);
      props.setStreak(newStreak);
      if (newLongest < newStreak) props.setLongestStreak(newStreak);
    } else if (props.userInput.toLowerCase() != "") {
      newHasCorrect = "wrong";
      props.setHasCorrect(newHasCorrect);
      newStreak = 0;
      props.setStreak(newStreak);
    }
  }
  return (
    <div className="answer-form">
      <form className="answer-input">
        <label><strong>Guess the answer here: </strong></label>
        <input
            className="text-box"
          id={props.hasCorrect}
          type="text"
          placeholder="Your answer"
          value={props.userInput}
          onChange={props.handleChange}
        ></input>
      </form>
      <button type="submit" onClick={checkAnswer}>
        Check Answer
      </button>
    </div>
  );
};

export default AnswerForm;
