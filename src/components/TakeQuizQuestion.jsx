// @ts-nocheck
import React, { useRef, useState } from 'react'
import { MdNavigateNext } from 'react-icons/md'

function TakeQuizQuestion({ item, question: { question, choices }, correctAnswer, totalQuestions, next }) {
    const selected = useRef()
    const [answer, setAnswer] = useState('')
    const [isCorrect, setIsCorrect] = useState(undefined)
    const [disabled, setDisabled] = useState()

    const handleNext = () => {
        setIsCorrect(answer === correctAnswer ? true : false)
        let answerCopy = answer
        setAnswer('')
        setDisabled(true)
        setTimeout(() => {
            selected.current.classList.remove('answer')
            selected.current = null
            setIsCorrect(undefined)
            setDisabled(false)
            next(answerCopy)
        }, 3000)
    }


    console.log(item, question, choices, correctAnswer, totalQuestions)

    const toggleAnswer = e => {
        if (!disabled) {
            if (selected.current) {
                selected.current.classList.remove('answer')
            }
            e.target.classList.add('answer')
            selected.current = e.target
            setAnswer(selected.current.textContent)
        }
    }

    return (
        <div className={`col-span-2 relative border-${isCorrect === true ? 'green' : isCorrect === false ? 'red' : 'purple'}-600 ${isCorrect !== undefined ? (isCorrect === false ? 'in' : '') + 'correct-answer' : ''} text-secondary-200 bg-gray-50 border rounded-md pt-8 px-8 pb-6 font-body`} style={{ width: "50.5rem" }}>
            <div className="flex justify-between">
                <div className="flex w-full h-full">
                    <div className="rounded-full bg-quaternary w-12 h-12 font-header font-medium items-center flex justify-center text-gray-50 mr-5">
                        <span>Q</span>
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
                            <div key={index}
                                className={`h-11 transform col-span-1 inline-flex text-center hover:border-purple-500 bg-gray-100 border-gray-300  border rounded-md`}
                                onClick={toggleAnswer}>

                                <span className="px-4 my-auto  w-full pointer-events-none" >
                                    {choice}
                                </span>
                            </div>
                        )
                    })
                }

            </div>

            <div className='text-right'>
                <button onClick={handleNext} disabled={!answer} className={`${answer ? '' : 'invisible'} border border-primary hover:bg-green-600 hover:text-gray-50 hover:border-green-500 text-secondary-200 py-1 pl-2 transition-all duration-150 ease-linear rounded-lg `}>
                    <span>Next</span>
                    <MdNavigateNext className="inline-flex text-2xl self-start items-start" />
                </button>
            </div>
        </div>
    )
}

export default TakeQuizQuestion
