import { animate, motion } from "framer-motion";

const Key = (props) => {
    let bgStyle = "#818384";
    const { func, letter, usedLetters, animatePress } = props;

    if (usedLetters[0].includes(letter)) {
        bgStyle = "#538d4e";
    } else if (usedLetters[1].includes(letter)) {
        bgStyle = "#3a3a3c";
    } else if (usedLetters[2].includes(letter)) {
        bgStyle = "#b59f3b";
    }

    const pressAnimation = {
        scale: [1, 0.9, 1],
        transition: { duration: 0.1 },
    };

    return (
        <motion.button
            onClick={() => func(letter)}
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
