/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import React, { useEffect, useRef, useState } from "react"
import { RiCloseFill } from 'react-icons/ri'

function Choice({ id, questionNumber, choicesCount, setState, handleDeleteChoice }) {

    const [choice, setChoice] = useState("")
    const radioRef = useRef()

    useEffect(() => setState(prev => ({ ...prev, choices: { ...prev.choices, [id]: choice } })), [choice]);

    useEffect(() => radioRef?.current.checked && setState(prev => ({ ...prev, answer: choice })), [choice])

    return (
        <div className="text-center flex group">
            <span className="flex items-center leading-normal rounded-l-md border border-r-0 border-gray-400 px-3 whitespace-no-wrap text-secondary-100 ">
                <input
                    type="radio"
                    name={`q${questionNumber}`}
                    className="w-4 h-4"
                    onClick={e => setState(prev => ({ ...prev, answer: e.target.value }))}
                    value={choice}
                    ref={radioRef}
                    required
                />
            </span>

            <div className="relative w-11/12">
                <input
                    value={choice}
                    required
                    onChange={e => setChoice(e.target.value)}
                    type="text"
                    className="text-base pr-3 px-4 py-2 w-full border border-gray-400 rounded-r-md focus:outline-none focus:border-green-400" />
                {
                    choicesCount > 2 &&
                    <span
                        className="absolute block bg-white opacity-0 text-gray-600 hover:opacity-100 text-3xl top-2 right-2 z-20"
                        onClick={() => handleDeleteChoice(id, choice)}>
                        <RiCloseFill />
                    </span>
                }
            </div>
        </div >

    )
}

export default Choice
