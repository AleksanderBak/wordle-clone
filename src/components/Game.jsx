import {React, useState} from 'react';
import Row from './Row';

export default function Game(props) {
    const rows = []
    
    for (let i = 0; i < 5; i++){
        rows.push(<Row rowNum={i} key={i} activeRow={props.activeRow} word={props.word} prevWords={props.prevWords}/>)
    }

    return (
        <div className="w-[100%] flex flex-row items-center justify-center mt-5">
            <div className="flex flex-col">
                {rows}
            </div>
        </div>
    )
}