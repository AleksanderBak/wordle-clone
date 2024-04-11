import React from 'react';
import { useEffect, useRef } from 'react';
import {motion, useAnimation} from 'framer-motion';

const AnswerField = (props) => {
    const {letter, answer, id} = props;
    const scaleControls = useAnimation();
    const colorControls = useAnimation();

    const firstRender = useRef(true);

    const styleCorrectPlace = '#466020'
    const styleCorrectLetter = '#B59F3B'
    const styleIncorrect = '#3A3A3C'
    let bg = ""

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        scaleControls.start({ scale: [1, 1.1, 1]});
    }, [letter]);

    if (answer) {
        if (answer[id].toUpperCase() === letter) {
            bg = styleCorrectPlace
        } else if (answer.includes(letter.toUpperCase())) {
            bg = styleCorrectLetter
        } else {
            bg = styleIncorrect
        }
    }
    return (
        <motion.div
            style={{backgroundColor: bg}}
            className={`flex items-center justify-center w-16 h-16 m-1 border-gray-500 border-solid border-[2px] text-white text-4xl font-bold font-Poppins`}
        >{letter}</motion.div>
    )
}

export default AnswerField;