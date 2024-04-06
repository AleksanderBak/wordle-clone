import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Game from './components/Game.jsx'
import Keyboard from './components/Keyboard.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Game />
      <Keyboard />
    </>
  )
}

export default App
