import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard'
import flashcards from "../flashcards.json"

function App() {
  const [flashcard, setFlashcard] = useState(Math.floor(Math.random() * flashcards.length))
  const [englishFirst, setEnglishFirst] = useState(false)
  const [side, setSide] = useState(true)
  const numFlashcards = flashcards.length 

  function nextCard() {
    setFlashcard(Math.floor(Math.random() * flashcards.length));
    setSide(true);
  }

  function toggleEnglishFirst() {
    setEnglishFirst(!englishFirst);
    setSide(true);
  }

  function toggleSide() {
    setSide(!side);
  }
 

  return (
    <div className='App'>
      <div className="header">
        <h2>Beginner Korean Flashcards 🇰🇷</h2>
        <h3>Start your jounrey learning Korean with these beginner level flashcards!</h3>
        <h4>Number of Cards: {numFlashcards}</h4>
      </div>
      <Flashcard onClick={toggleSide} english={flashcards[flashcard].english} korean={flashcards[flashcard].korean} side={side} engFirst={englishFirst}/>
      <div className='buttons'>
          <button onClick={nextCard}>Next →</button>
          <button onClick={toggleEnglishFirst}>{englishFirst ? "Korean" : "English"} First</button>
        </div>
    </div>
  )
}

export default App
