import React from 'react';
import Cube from './Cube';

export default function Row() {
    return (
        <div className="flex flex-row justify-between">
            <Cube />
            <Cube />
            <Cube />
            <Cube />
            <Cube />
        </div>
    )
}