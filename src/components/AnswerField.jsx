import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const AnswerField = (props) => {
    const { letter, answer, id } = props;
    const scaleControls = useAnimation();
    let bg = "";

    useEffect(() => {
        scaleControls.start({ scale: [1, 1.1, 1] });
    }, [letter]);

    if (answer) {
        if (answer[id].toUpperCase() === letter) {
            bg = "#538d4e";
        } else if (answer.includes(letter.toUpperCase())) {
            bg = "#b59f3b";
        } else {
            bg = "#3a3a3c";
        }
    }
    return (
        <motion.div
            style={{ backgroundColor: bg }}
            animate={scaleControls}
            transition={{ duration: 0.2 }}
            className={`flex items-center justify-center w-16 h-16 m-1 border-gray-500 border-solid border-[2px] text-white text-4xl font-bold font-Poppins`}
        >
            {letter}
        </motion.div>
    );
};

export default AnswerField;
