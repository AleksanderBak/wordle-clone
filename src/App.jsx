import { useState, useEffect, useRef} from 'react'
import Navbar from './components/Navbar.jsx'
import AnswerBoard from './components/AnswerBoard.jsx'
import Keyboard from './components/Keyboard.jsx'
import {keys} from './components/keys.js'

function App() {
  const [gameState, setGameState] = useState({
    word: "",
    activeRow: 0,
    prevWords: []
  });

  const answer = "react";
  
  
  function handleKeyPress(event) {
    handleClick(event.key.toUpperCase());
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, false);
    return () => {
      document.removeEventListener("keydown", handleKeyPress, false);
    }
  }, [gameState]);


  function handleClick(letter) {
    switch (letter.toUpperCase()) {
      case "ENTER":
        if (gameState.word.length < 5) {
          break;
        }
        if (gameState.word.toUpperCase() === answer.toUpperCase()) {
          alert("You win!");
        } else {
          setGameState(prevGameState => {
            return {
              activeRow: prevGameState.activeRow + 1,
              prevWords: [...prevGameState.prevWords, gameState.word],
              word: "",
            }
          })
        }
        break;
      
      case "BACKSPACE":
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
        if (keys.includes(letter)) {
          if (gameState.word.length < 5) {
            setGameState(prevGameState => {
              return {
                ...prevGameState,
                word: prevGameState.word + letter
              }
            })
          }
        }
        break;
    }
  }


  return (
    <>
      <Navbar />
      <AnswerBoard word={gameState.word} activeRow={gameState.activeRow} prevWords={gameState.prevWords}/>
      <Keyboard func={handleClick} keys={keys}/>
    </>
  )
}

export default App
