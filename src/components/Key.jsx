import React from "react";

export default function Key(props) {
    return (
        <button className="flex justify-center items-center rounded-md font-Poppins text-xl p-3 min-w-10 h-14 m-1 text-white bg-gray-500">{props.letter}</button>
    )
}