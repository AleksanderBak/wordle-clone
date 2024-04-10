import { useState, useEffect, useRef} from 'react'
import Navbar from './components/Navbar.jsx'
import AnswerBoard from './components/AnswerBoard.jsx'
import Keyboard from './components/Keyboard.jsx'
import {keys} from './data/keys.js'

function App() {
  const [gameState, setGameState] = useState({
    word: "",
    activeRow: 0,
    prevWords: [],
    gameRunning: true,
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
    if (!gameState.gameRunning) {
      return;
    } else {
      switch (letter.toUpperCase()) {
        case "ENTER":
          if (gameState.word.length < 5) {
            break;
          }
          if (gameState.word.toUpperCase() === answer.toUpperCase()) {
            setGameState(prevGameState => {
              return {
                word: "",
                activeRow: prevGameState.activeRow + 1,
                prevWords: [...prevGameState.prevWords, gameState.word],
                gameRunning : false,
              }
            })
          } else {
            setGameState(prevGameState => {
              return {
                ...prevGameState,
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
  }


  return (
    <>
      <Navbar />
      <AnswerBoard word={gameState.word} activeRow={gameState.activeRow} prevWords={gameState.prevWords} answer={answer.toUpperCase()}/>
      <Keyboard func={handleClick} keys={keys}/>
    </>
  )
}

export default App
