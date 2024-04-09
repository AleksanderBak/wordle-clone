import React from 'react';
import AnswerField from './AnswerField';

export default function AnswerRow(props) {

    const active = props.rowNum === props.activeRow;
    let currentWord = "";
    let showAnswer = false;
    const answer = props.answer.split("");

    if (props.rowNum < props.activeRow) {
        currentWord = props.prevWords[props.rowNum];
        showAnswer = true;
    } else if (props.rowNum === props.activeRow){
        currentWord = props.word;
    } 
    
    const letters = currentWord.split("");

    const fields = letters.map((letter, index) => {
        return <AnswerField letter={letter} key={index} answer={showAnswer && answer} id={index}/>
    })

    while (fields.length < 5) {
        fields.push(<AnswerField letter="" key={fields.length}/>)
    }

    return (
        <div className="flex flex-row justify-between">
            {fields}
        </div>
    )
}