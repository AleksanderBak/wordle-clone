import React from "react";
import Key from "./Key";

export default function Keyboard(props) {
    const { func, keys, usedLetters } = props;
    const row1 = keys.map((key, index) => {
        if (index < 10) {
            return (
                <Key
                    letter={key}
                    func={func}
                    key={index}
                    usedLetters={usedLetters}
                />
            );
        }
    });

    const row2 = keys.map((key, index) => {
        if (index >= 10 && index < 20) {
            return (
                <Key
                    letter={key}
                    func={func}
                    key={index}
                    usedLetters={usedLetters}
                />
            );
        }
    });

    const row3 = keys.map((key, index) => {
        if (index >= 20) {
            return (
                <Key
                    letter={key}
                    func={func}
                    key={index}
                    usedLetters={usedLetters}
                />
            );
        }
    });

    return (
        <div className="flex flex-col items-center m-12">
            <div className="flex flex-row">{row1}</div>
            <div className="flex flex-row">{row2}</div>
            <div className="flex flex-row">{row3}</div>
        </div>
    );
}
