import React from 'react';
import Cube from './Cube';

export default function Row(props) {

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
        return <Cube letter={letter} key={index}/>
    })

    while (cubes.length < 5) {
        cubes.push(<Cube letter="" key={cubes.length}/>)
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