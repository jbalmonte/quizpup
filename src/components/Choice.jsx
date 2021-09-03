// @ts-nocheck
import React, { useEffect, useRef, useState } from "react"
import { RiCloseFill } from 'react-icons/ri'

function Choice({ choices, handleAnswer, questionCount, choiceCount, correctAnswer }) {

    const [choice, setChoice] = useState("")
    const radioRef = useRef()


    useEffect(() => {
        choices.current[choiceCount - 1] = choice
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [choice])

    const handleDelete = (e) => {
        handleAnswer("")
        e.currentTarget.closest('div').remove()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => radioRef.current.checked && handleAnswer(choice), [choice])

    return (

        <div className="text-center flex group relative">
            <span className="flex items-center leading-normal rounded-l-md border border-r-0 border-gray-400 px-3 whitespace-no-wrap text-secondary-100 ">
                <input
                    type="radio"
                    name={`q${questionCount}`}
                    className="w-4 h-4"
                    onClick={e => handleAnswer(e.target.value)}
                    value={choice}
                    ref={radioRef}
                    required
                />
            </span>
            <input
                value={choice}
                required
                onChange={e => setChoice(e.target.value)}
                type="text"
                className=" text-base px-4 py-2 border border-gray-400 rounded-r-md focus:outline-none focus:border-green-400 w-11/12" />
            {
                choiceCount > 2 &&
                <span
                    className="absolute opacity-0 text-gray-600 hover:opacity-100 text-3xl top-2 right-2 z-10"
                    onClick={handleDelete}>
                    <RiCloseFill />
                </span>
            }
        </div >
    )
}

export default Choice
