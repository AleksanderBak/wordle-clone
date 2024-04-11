import React from 'react';
import { useEffect, useRef } from 'react';
import {motion, useAnimation} from 'framer-motion';
// export default function AnswerField(props) {

//     const {letter, answer, id} = props;
    
//     const styleCorrectPlace = "bg-green-600"
//     const styleCorrectLetter = "bg-orange-600"
//     const styleIncorrect = "bg-gray-600"
//     let bg = ""
//     if (answer) {
//         if (answer[id].toUpperCase() === letter) {
//             bg = styleCorrectPlace
//         } else if (answer.includes(letter.toUpperCase())) {
//             bg = styleCorrectLetter
//         } else {
//             bg = styleIncorrect
//         }
//     }
//     return (
//         <div className={`flex items-center justify-center w-16 h-16 m-1 border-gray-500 border-solid border-[1px] text-white text-4xl font-Poppins ${bg} transition-all duration-${10000 * props.id}`}>{letter}</div>
//     )
// }

const AnswerField = (props) => {
    const {letter, answer, id} = props;
    const controls = useAnimation();

    const firstRender = useRef(true);

    const styleCorrectPlace = '#a2cf6e'
    const styleCorrectLetter = '#ffcd38'
    const styleIncorrect = '#9e9e9e'
    let bg = ""

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        controls.start({ y: [0, -5, 0]});
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
             className={`flex items-center justify-center w-16 h-16 m-1 border-gray-500 border-solid border-[1px] text-white text-4xl font-Poppins`}
             animate={controls}
             transition={{ duration: 0.3 }}
             initial={false}
        >{letter}</motion.div>
    )
}

export default AnswerField;