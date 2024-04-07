import React from "react";

export default function Key(props) {
    return (
        <button onClick={() => props.func(props.letter)}  className="flex justify-center items-center rounded-md font-Poppins text-xl p-3 min-w-10 h-14 m-1 text-white bg-gray-500 hover:bg-gray-400 duration-75">{props.letter}</button>
    )
}