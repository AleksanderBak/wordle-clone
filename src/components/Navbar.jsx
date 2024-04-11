import React from 'react'
import {motion} from 'framer-motion'

function Navbar() {
    return (
        <nav className='flex flex-row justify-center h-20 items-center border-b-2 border-solid border-gray-500'>
            <h1 className='font-Poppins text-3xl text-white'>Wordle Clone</h1>
        </nav>
    )
}


export default Navbar