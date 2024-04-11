import React from 'react';
import AnswerField from './AnswerField';
import {motion} from 'framer-motion';

// export default function AnswerRow(props) {

//     let {rowNum, activeRow, word, prevWords, answer} = props;

//     const active = rowNum === activeRow;
//     let currentWord = "";
//     let showAnswer = false;
    
//     answer = answer.split("");

//     if (rowNum < activeRow) {
//         currentWord = prevWords[rowNum];
//         showAnswer = true;
//     } else if (rowNum === activeRow){
//         currentWord = word;
//     } 
    
//     const letters = currentWord.split("");

//     const fields = letters.map((letter, index) => {
//         return <AnswerField letter={letter} key={index} answer={showAnswer && answer} id={index}/>
//     })

//     while (fields.length < 5) {
//         fields.push(<AnswerField letter="" key={fields.length}/>)
//     }

//     return (
//         <div className="flex flex-row justify-between">
//             {fields}
//         </div>
//     )
// }

const AnswerRow = (props) => {

    let {rowNum, activeRow, word, prevWords, answer} = props;

    let currentWord = "";
    let showAnswer = false;
    
    answer = answer.split("");

    if (rowNum < activeRow) {
        currentWord = prevWords[rowNum];
        showAnswer = true;
    } else if (rowNum === activeRow){
        currentWord = word;
    } 
    
    const letters = currentWord.split("");

    const fields = letters.map((letter, index) => {
        return <AnswerField letter={letter} key={index} answer={showAnswer && answer} id={index}/>
    })

    while (fields.length < 5) {
        fields.push(<AnswerField letter="" key={fields.length}/>)
    }

    return (
        <motion.div className="flex flex-row justify-between">
            {fields}
        </motion.div>
    )
}

export default AnswerRow;