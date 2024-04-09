import React from 'react';
import AnswerField from './AnswerField';

export default function AnswerRow(props) {

    const active = props.rowNum === props.activeRow;
    let currentWord = "";

    if (props.rowNum < props.activeRow) {
        currentWord = props.prevWords[props.rowNum];
    } else if (props.rowNum === props.activeRow){
        currentWord = props.word;
    } 
    
    const letters = currentWord.split("");

    const fields = letters.map((letter, index) => {
        return <AnswerField letter={letter} key={index}/>
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