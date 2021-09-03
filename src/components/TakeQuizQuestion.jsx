// @ts-nocheck
import React, { useRef, useState } from 'react'
import { MdNavigateNext } from 'react-icons/md'

function TakeQuizQuestion({ question: { item, question, choices, totalQuestions }, next }) {
    const selected = useRef()
    const [answer, setAnswer] = useState('')

    const handleNext = () => {
        selected.current.classList.remove('answer')
        selected.current = null
        let temp = answer
        setAnswer('')
        next(temp)
    }

    const toggleAnswer = e => {
        if (selected.current) {
            selected.current.classList.remove('answer')
        }
        e.target.classList.toggle('answer')
        selected.current = e.target
        setAnswer(selected.current.textContent)
    }
    return (

        <div className="col-span-2 border-purple-600 text-secondary-200 bg-gray-50 rounded-md border pt-8 px-8 pb-6 font-body" style={{ width: "50.5rem" }}>

            <div className="flex justify-center">
                <div className="flex">
                    <div className="rounded-full bg-quaternary w-12 shadow h-12 font-header font-medium items-center flex justify-center text-gray-50 mr-5">
                        <span className="mr-1">Q</span>
                        <span>{item}</span>
                    </div>

                    <h1 className="w-11/12 text-4xl font-serif text-purple-800 font-medium">{question}</h1>
                </div>
                <p className="ml-4">{item}/{totalQuestions}</p>
            </div>

            <div className="grid grid-cols-1 m-10 gap-2 w-1/2 mx-auto">

                {
                    choices.map((choice, index) => {
                        return (
                            <div key={index} className="h-11 transform col-span-1 inline-flex text-center  bg-gray-100 border-gray-300 hover:border-purple-500 border rounded-md" onClick={toggleAnswer} >
                                <span className="px-4 my-auto  w-full pointer-events-none" >
                                    {choice}
                                </span>
                            </div>
                        )
                    })

                }
            </div>

            <div className='text-right'>
                <button onClick={handleNext} disabled={!answer} className={`${!answer && 'invisible'} border border-primary hover:bg-green-600 hover:text-gray-50 hover:border-green-500 text-secondary-200 py-1 pl-2 transition-all duration-150 ease-linear rounded-lg `}>
                    <span>Next</span>
                    <MdNavigateNext className="inline-flex text-2xl self-start items-start" />
                </button>
            </div>
        </div>


    )
}

export default TakeQuizQuestion
