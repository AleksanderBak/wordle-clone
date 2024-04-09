import {React, useState} from 'react';
import AnswerRow from './AnswerRow';

export default function AnswerBoard(props) {
    const rows = []
    
    for (let i = 0; i < 5; i++){
        rows.push(
            <AnswerRow 
                rowNum={i} 
                key={i} 
                activeRow={props.activeRow} 
                word={props.word} 
                prevWords={props.prevWords} 
                answer={props.answer}
                />)
    }

    return (
        <div className="w-[100%] flex flex-row items-center justify-center mt-5">
            <div className="flex flex-col">
                {rows}
            </div>
        </div>
    )
}