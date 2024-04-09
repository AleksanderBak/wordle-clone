import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import AnswerBoard from './components/AnswerBoard.jsx'
import Keyboard from './components/Keyboard.jsx'

function App() {
  const [gameState, setGameState] = useState({
    word: "",
    activeRow: 0,
    prevWords: []
  });

  const answer = "react";
  
  function handleClick(letter) {
    switch (letter) {
      case "Enter":
        if (gameState.word.length < 5) {
          break;
        }
        if (gameState.word.toLowerCase() === answer.toLowerCase()) {
          alert("You win!");
        } else {
          setGameState(prevGameState => {
            return {
              word: "",
              activeRow: prevGameState.activeRow + 1,
              prevWords: [...prevGameState.prevWords, gameState.word]
            }
          })
        }
        break;
      
      case "Backspace":
        if (gameState.word.length > 0) {
          setGameState(prevGameState => {
            return {
              ...prevGameState,
              word: prevGameState.word.slice(0, -1)
            }
          })
        }
        break;
      
      default:
        if (gameState.word.length < 5) {
          setGameState(prevGameState => {
            return {
              ...prevGameState,
              word: prevGameState.word + letter
            }
          })
        }
    }
  }

  return (
    <>
      <Navbar />
      <AnswerBoard word={gameState.word} activeRow={gameState.activeRow} prevWords={gameState.prevWords}/>
      <Keyboard func={handleClick} />
    </>
  )
}

export default App
