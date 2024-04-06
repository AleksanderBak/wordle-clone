import React from 'react';
import Row from './Row';

export default function Game() {
    return (
        <div className="w-[100%] flex flex-row items-center justify-center mt-5">
            <div className="flex flex-col">
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
            </div>
        </div>
        
    )
}