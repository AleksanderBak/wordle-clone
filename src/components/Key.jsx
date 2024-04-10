import React from "react";
import {motion} from "framer-motion";

export default function Key(props) {
    const {func, letter} = props;
    return (
        <button onClick={() => func(letter)}  className="flex justify-center items-center rounded-md font-Poppins text-xl p-3 min-w-10 h-14 m-1 text-white bg-gray-500 hover:bg-gray-400 duration-75">{letter}</button>
    )
}