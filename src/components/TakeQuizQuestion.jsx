// @ts-nocheck
import React, { useRef } from 'react'
import { MdNavigateNext } from 'react-icons/md'

const TakeQuizQuestion = ({ question: { item, question, choices }, next }) => {
    const selected = useRef()
    const handleNext = () => {
        selected.current.classList.remove('answer')
        selected.current = null
        next()
    }
    const toggleAnswer = e => {
        if (selected.current) selected.current.classList.remove('answer')
        e.target.classList.toggle('answer')
        selected.current = e.target
    }
    return (

        <div className="col-span-2 border-purple-600 text-secondary-200 bg-gray-50 rounded-md border pt-8 px-8 pb-6 font-body" style={{ width: "50.5rem" }}>

            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="rounded-full bg-quaternary w-12 shadow h-12 font-header font-medium items-center flex justify-center text-gray-50 mr-5">
                        <span className="mr-1">Q</span>
                        <span>{item}</span>
                    </div>

                    <h1 className="text-4xl font-serif text-purple-800 font-medium">{question}</h1>
                </div>
                <p>{item}/15</p>
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
            <div className="text-right hover:text-green-600">
                <button onClick={handleNext} className="border border-primary hover:border-green-600 text-secondary-200 py-1 pl-2 transition-colors duration-150 ease-linear rounded-lg hover:bg-green-600 hover:text-gray-50">
                    <span>Next</span>
                    <MdNavigateNext className="inline-flex text-2xl self-start items-start" />
                </button>
            </div>
        </div>


    )
}

export default TakeQuizQuestion
