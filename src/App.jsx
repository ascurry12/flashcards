import { useState } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";
import flashcards from "../flashcards.json";
import AnswerForm from "./components/AnswerForm";

function App() {
  const [flashcard, setFlashcard] = useState(0);
  const [englishFirst, setEnglishFirst] = useState(false);
  const [side, setSide] = useState(true);
  const [correct, setCorrect] = useState(
    englishFirst ? flashcards[flashcard].korean : flashcards[flashcard].english
  );
  const [guess, setGuess] = useState("");
  const [currentStreak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [hasCorrect, setHasCorrect] = useState("no-answer");
  const numFlashcards = flashcards.length;


  function nextCard() {
    var newFlashcard = 0;
    if (flashcard == flashcards.length - 1) {
      newFlashcard = 0;
    } else {
      newFlashcard = flashcard + 1
    }
    setFlashcard(newFlashcard);
    setCorrect(
      englishFirst
        ? flashcards[newFlashcard].korean
        : flashcards[newFlashcard].english
    );
    setSide(true);
    setGuess('');
    setHasCorrect('no-input');
  }

  function prevCard() {
    var newFlashcard = 0;
    if (flashcard == 0) {
      newFlashcard = flashcards.length - 1
    } else {
      newFlashcard = flashcard - 1;
    }
    setFlashcard(newFlashcard);
    setCorrect(
      englishFirst
        ? flashcards[newFlashcard].korean
        : flashcards[newFlashcard].english
    );
    setSide(true);
    setGuess('');
    setHasCorrect('no-input');
  }

  function toggleEnglishFirst() {
    var notEng = !englishFirst;
    setEnglishFirst(notEng);
    setSide(true);
    setCorrect(
      notEng
        ? flashcards[flashcard].korean
        : flashcards[flashcard].english
    );
  }

  function toggleSide() {
    setSide(!side);
  }

  return (
    <div className="App">
      <div className="header">
        <h2>Beginner Korean Flashcards 🇰🇷</h2>
        <h3>
          Start your journey learning Korean with these beginner level
          flashcards!
        </h3>
        <h4>Number of Cards: {numFlashcards}</h4>
        <h5>Current Streak: {currentStreak}</h5>
        <h5>Longest Streak: {longestStreak}</h5>
      </div>
      <Flashcard
        onClick={toggleSide}
        english={flashcards[flashcard].english}
        korean={flashcards[flashcard].korean}
        side={side}
        engFirst={englishFirst}
      />
      <AnswerForm
        handleChange={(e) => {
          setGuess(e.target.value);
          console.log(guess.toLowerCase() == correct.toLowerCase());
          console.log(guess.toLowerCase(), correct.toLowerCase());
        }}
        userInput={guess}
        correctAnswer={correct}
        setStreak={setStreak}
        currentStreak={currentStreak}
        setLongestStreak={setLongestStreak}
        longestStreak={longestStreak}
        setHasCorrect={setHasCorrect}
        hasCorrect={hasCorrect}
      />
      <div className="buttons">
        <button onClick={prevCard}>← Prev</button>
        <button onClick={nextCard}>Next →</button>
        <button onClick={toggleEnglishFirst}>
          {englishFirst ? "Korean" : "English"} First
        </button>
      </div>
    </div>
  );
}

export default App;
