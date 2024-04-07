import React from 'react';
import Cube from './Cube';

export default function Row(props) {

    const letters = props.word.split("");

    const cubes = letters.map((letter, index) => {
        return <Cube letter={letter} key={index}/>
    })

    while (cubes.length < 5) {
        cubes.push(<Cube letter="" key={cubes.length}/>)
    }

    return (
        <div className="flex flex-row justify-between">
            {props.active ? cubes : cubes.map((cube, index) => {
                return <Cube key={index}/>
            })}
        </div>
    )
}