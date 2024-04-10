import React from 'react';

export default function AnswerField(props) {

    const {letter, answer, id} = props;
    
    const styleCorrectPlace = "bg-green-600"
    const styleCorrectLetter = "bg-orange-600"
    const styleIncorrect = "bg-gray-600"
    let bg = ""
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
        <div className={`flex items-center justify-center w-16 h-16 m-1 border-gray-500 border-solid border-[1px] text-white text-4xl font-Poppins ${bg} transition-all duration-${10000 * props.id}`}>{letter}</div>
    )
}