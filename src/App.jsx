import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar.jsx";
import AnswerBoard from "./components/AnswerBoard.jsx";
import Keyboard from "./components/Keyboard.jsx";
import { keys } from "./data/keys.js";
import { words } from "./data/words.js";
import FinalAlert from "./components/FinalAlert.jsx";

const App = () => {
    const [gameState, setGameState] = useState({
        word: "",
        activeRow: 0,
        prevWords: [],
        gameWon: false,
        answer: words[Math.floor(Math.random() * words.length)].toUpperCase(),
    });

    const [gameEnd, setGameEnd] = useState(false);
    const [correctLetters, setCorrectLetters] = useState([""]);
    const [incorrectLetters, setIncorrectLetters] = useState([""]);
    const [semiCorrectLetters, setSemiCorrectLetters] = useState([""]);
    const [showAlert, setShowAlert] = useState(false);

    function endGame() {
        setGameEnd(true);
    }

    function runAlert() {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 1000);
    }

    function handleKeyPress(event) {
        handleClick(event.key.toUpperCase());
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress, false);
        return () => {
            document.removeEventListener("keydown", handleKeyPress, false);
        };
    }, [gameState]);

    function handleClick(letter) {
        if (gameEnd) {
            return;
        } else {
            switch (letter.toUpperCase()) {
                case "ENTER":
                    if (gameState.word.length < 5) {
                        break;
                    }
                    if (gameState.word === gameState.answer) {
                        setGameState((prevGameState) => {
                            return {
                                ...prevGameState,
                                activeRow: prevGameState.activeRow + 1,
                                word: "",
                                prevWords: [
                                    ...prevGameState.prevWords,
                                    gameState.word,
                                ],
                                gameWon: true,
                            };
                        });
                        endGame();
                    } else {
                        if (words.includes(gameState.word.toLowerCase())) {
                            let letters = gameState.word.split("");
                            for (let i = 0; i < letters.length; i++) {
                                if (
                                    gameState.answer[i] === letters[i] &&
                                    !correctLetters.includes(letters[i])
                                ) {
                                    setCorrectLetters((prevLetters) => {
                                        return [...prevLetters, letters[i]];
                                    });
                                } else if (
                                    gameState.answer.includes(letters[i])
                                ) {
                                    setSemiCorrectLetters((prevLetters) => {
                                        return [...prevLetters, letters[i]];
                                    });
                                } else {
                                    setIncorrectLetters((prevLetters) => {
                                        return [...prevLetters, letters[i]];
                                    });
                                }
                            }
                            if (gameState.activeRow === 4) {
                                endGame();
                            }
                            setGameState((prevGameState) => {
                                return {
                                    ...prevGameState,
                                    activeRow: prevGameState.activeRow + 1,
                                    prevWords: [
                                        ...prevGameState.prevWords,
                                        gameState.word,
                                    ],
                                    word: "",
                                };
                            });
                        } else {
                            runAlert();
                        }
                    }
                    break;

                case "BACKSPACE":
                    if (gameState.word.length > 0) {
                        setGameState((prevGameState) => {
                            return {
                                ...prevGameState,
                                word: prevGameState.word.slice(0, -1),
                            };
                        });
                    }
                    break;

                default:
                    if (keys.includes(letter)) {
                        if (gameState.word.length < 5) {
                            setGameState((prevGameState) => {
                                return {
                                    ...prevGameState,
                                    word: prevGameState.word + letter,
                                };
                            });
                        }
                    }
                    break;
            }
        }
    }

    return (
        <>
            {gameEnd && (
                <FinalAlert answer={gameState.answer} win={gameState.gameWon} />
            )}
            <Navbar />
            <AnswerBoard
                word={gameState.word}
                activeRow={gameState.activeRow}
                prevWords={gameState.prevWords}
                answer={gameState.answer.toUpperCase()}
                showAlert={showAlert}
            />
            <Keyboard
                func={handleClick}
                keys={keys}
                usedLetters={[
                    correctLetters,
                    incorrectLetters,
                    semiCorrectLetters,
                ]}
            />
        </>
    );
};

export default App;
