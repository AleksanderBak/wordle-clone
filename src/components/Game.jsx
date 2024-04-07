import {React, useState} from 'react';
import Row from './Row';

export default function Game(props) {

    return (
        <div className="w-[100%] flex flex-row items-center justify-center mt-5">
            <div className="flex flex-col">
                <Row active={true} word={props.word}/>
                <Row active={false} word={props.word}/>
                <Row active={false} word={props.word}/>
                <Row active={false} word={props.word}/>
                <Row active={false} word={props.word}/>
            </div>
        </div>
        
    )
}