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
    
    // const currentWord = props.rowNum < props.activeRow ? props.prevWords[props.rowNum] : props.word;
    // console.log(currentWord)
    const letters = currentWord.split("");

    const cubes = letters.map((letter, index) => {
        return <AnswerField letter={letter} key={index}/>
    })

    while (cubes.length < 5) {
        cubes.push(<AnswerField letter="" key={cubes.length}/>)
    }

    return (
        <div className="flex flex-row justify-between">
            {/* {active ? cubes : cubes.map((cube, index) => {
                return <Cube letter={""} key={index}/>
            })} */}
            {cubes}
        </div>
    )
}