import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Game from './components/Game.jsx'
import Keyboard from './components/Keyboard.jsx'

function App() {
  const [word, setWord] = useState("");

  
  function handleClick(letter) {
    switch (letter) {
      case "Enter":
        console.log("Enter");
        break;
      
      case "Backspace":
        if (word.length > 0) {
          setWord(word.slice(0, -1));
        }
        break;
      
      default:
        if (word.length < 5) {
          setWord(word + letter);
        }
    }
  }

  return (
    <>
      <Navbar />
      <Game word={word}/>
      <Keyboard func={handleClick} />
    </>
  )
}

export default App
