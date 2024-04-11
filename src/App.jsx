import { useState, useEffect, useRef} from 'react'
import Navbar from './components/Navbar.jsx'
import AnswerBoard from './components/AnswerBoard.jsx'
import Keyboard from './components/Keyboard.jsx'
import {keys} from './data/keys.js'
import {words} from './data/words.js'

function App() {
  const [gameState, setGameState] = useState({
    word: "",
    activeRow: 0,
    prevWords: [],
    gameRunning: true,
    answer: words[Math.floor(Math.random() * words.length)]
  });
  
  const [usedLetters, setUsedLetters] = useState({
    incorrect: [],
    correct: [],
    incorrectPlace: []
  });

  console.log(gameState.answer);
  
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
          if (gameState.word.toUpperCase() === gameState.answer.toUpperCase()) {
            setGameState(prevGameState => {
              return {
                ...prevGameState,
                activeRow: prevGameState.activeRow + 1,
                word: "",
                prevWords: [...prevGameState.prevWords, gameState.word],
                gameRunning : false,
              }
            })
          } else {
            if (words.includes(gameState.word.toLowerCase())) {
              setGameState(prevGameState => {
                return {
                  ...prevGameState,
                  activeRow: prevGameState.activeRow + 1,
                  prevWords: [...prevGameState.prevWords, gameState.word],
                  word: "",
                }
              })
            } else {
              break;
            }
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
      <AnswerBoard word={gameState.word} activeRow={gameState.activeRow} prevWords={gameState.prevWords} answer={gameState.answer.toUpperCase()}/>
      <Keyboard func={handleClick} keys={keys} guessedLetters={usedLetters}/>
    </>
  )
}

export default App
