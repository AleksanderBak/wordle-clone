import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import AnswerBoard from "./components/AnswerBoard.jsx";
import Keyboard from "./components/Keyboard.jsx";
import FinalAlert from "./components/FinalAlert.jsx";
import { useSelector, useDispatch } from "react-redux";
import { newLetter } from "./gameStateSlice.js";

const App = () => {
    const dispatch = useDispatch();

    const isGameRunning = useSelector((state) => state.gameState.isGameRunning);

    function handleKeyPress(event) {
        if (isGameRunning) {
            handleClick(event.key.toUpperCase(), dispatch);
        }
    }

    const handleClick = (letter, dispatch) => {
        dispatch(newLetter(letter));
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress, false);
        return () => {
            document.removeEventListener("keydown", handleKeyPress, false);
        };
    }, [isGameRunning]);

    return (
        <>
            {!isGameRunning && <FinalAlert />}
            <Navbar />
            <AnswerBoard />
            {isGameRunning && <Keyboard />}
        </>
    );
};

export default App;
