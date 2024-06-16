import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { newLetter } from "../gameStateSlice";

const Key = (props) => {
    const { letter, animatePress } = props;
    let bgStyle;
    const dispatch = useDispatch();

    const correctLetters = useSelector(
        (state) => state.gameState.correctLetters
    );

    const semiCorrectLetters = useSelector(
        (state) => state.gameState.semiCorrectLetters
    );

    if (correctLetters.includes(letter)) {
        bgStyle = "#538d4e";
    } else if (semiCorrectLetters.includes(letter)) {
        bgStyle = "#b59f3b";
    } else {
        bgStyle = "#818384";
    }

    const pressAnimation = {
        scale: [1, 0.9, 1],
        transition: { duration: 0.1 },
    };

    return (
        <motion.button
            onClick={() => dispatch(newLetter(letter.toUpperCase()))}
            whileTap={pressAnimation}
            style={{ backgroundColor: bgStyle }}
            className={`flex justify-center items-center rounded-md font-Poppins text-xl p-3 min-w-10 h-14 m-1 text-white`}
            whileHover={{ backgroundColor: "#9ca3af" }}
            duration={0.3}
            animate={animatePress ? { ...pressAnimation } : { scale: 1 }}
        >
            {letter}
        </motion.button>
    );
};

export default Key;
