import { useEffect, useState } from "react";
import Key from "./Key";
import keys from "../data/keys";

export default function Keyboard(props) {
    const [lastPressed, setLastPressed] = useState("");

    const handleKeyPress = (event) => {
        const key = event.key.toUpperCase();
        if (keys.includes(key)) {
            setLastPressed(key);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress, false);
    }, []);

    const row1 = keys.map((key, index) => {
        if (index < 10) {
            return (
                <Key
                    letter={key}
                    key={index}
                    animatePress={lastPressed === key}
                />
            );
        }
    });

    const row2 = keys.map((key, index) => {
        if (index >= 10 && index < 20) {
            return (
                <Key
                    letter={key}
                    key={index}
                    animatePress={lastPressed === key}
                />
            );
        }
    });

    const row3 = keys.map((key, index) => {
        if (index >= 20) {
            return (
                <Key
                    letter={key}
                    key={index}
                    animatePress={lastPressed === key}
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
