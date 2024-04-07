import React from "react";
import Key from "./Key";

export default function Keyboard(props) {
    return (
        <div className="flex flex-col items-center m-12">
            <div className="flex flex-row">
                <Key letter={"Q"} func={props.func}/>
                <Key letter={"W"} func={props.func}/>
                <Key letter={"E"} func={props.func}/>
                <Key letter={"R"} func={props.func}/>
                <Key letter={"T"} func={props.func}/>
                <Key letter={"Y"} func={props.func}/>
                <Key letter={"U"} func={props.func}/>
                <Key letter={"I"} func={props.func}/>
                <Key letter={"O"} func={props.func}/>
                <Key letter={"P"} func={props.func}/>
            </div>
            <div className="flex flex-row">
                <Key letter={"A"} func={props.func}/>
                <Key letter={"S"} func={props.func}/>
                <Key letter={"D"} func={props.func}/>
                <Key letter={"F"} func={props.func}/>
                <Key letter={"G"} func={props.func}/>
                <Key letter={"H"} func={props.func}/>
                <Key letter={"J"} func={props.func}/>
                <Key letter={"K"} func={props.func}/>
                <Key letter={"L"} func={props.func}/>
            </div>
            <div className="flex flex-row">
                <Key letter={"Enter"} func={props.func}/>
                <Key letter={"Z"} func={props.func}/>
                <Key letter={"X"} func={props.func}/>
                <Key letter={"C"} func={props.func}/>
                <Key letter={"V"} func={props.func}/>
                <Key letter={"B"} func={props.func}/>
                <Key letter={"N"} func={props.func}/>
                <Key letter={"M"} func={props.func}/>
                <Key letter={"Backspace"} func={props.func}/>
            </div>
        </div>
    )
}
