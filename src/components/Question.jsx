import React, { useEffect, useRef, useState } from "react"
import { IoAdd } from "react-icons/io5"
import Choice from "./Choice"

function Question({ questionCount, questions }) {

    const choices = useRef([])

    const [choicesCount, setChoicesCount] = useState(2)

    const [question, setQuestion] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState("")

    useEffect(() => {
        questions.current[questionCount - 1] = ({ question, correctAnswer, choices: choices.current })
    }, [correctAnswer, questionCount, choices, question, questions])

    const handleAnswer = answer => {
        // if (e.target.type === "radio") 
        setCorrectAnswer(answer)
    }

    return (
        <div className="my-6 ">
            <fieldset className="h-full text-primary border bg-green-200 w-3/4 mx-auto rounded-lg p-4 ">
                <div className="text-center flex mt-3">
                    <label htmlFor={`question${questionCount}`} className="bg-green-500 text-gray-50 flex items-center leading-normal rounded-l-lg border border-r-0 border-green-500 px-3 whitespace-no-wrap ">Q{questionCount}</label>
                    <input required value={question} onChange={e => setQuestion(e.target.value)} type="text" placeholder="Enter your question here" name=" question1" id="question1" className="text-base px-4 py-2 border border-l-0 border-gray-400 rounded-r-lg focus:outline-none focus:border-green-400 w-11/12" />
                </div>
                <div className="text-right my-3 mr-2">
                    <button
                        type="button"
                        onClick={() => setChoicesCount(prev => prev + 1)}
                        className="text-right text-sm font-medium hover:text-primary rounded-md">
                        <IoAdd className="inline-flex text-lg mr-1" />
                        <span >Add Choice</span>
                    </button>
                </div>


                {
                    [...new Array(choicesCount)].map((_, i) =>
                        <Choice
                            key={i}
                            choices={choices}
                            questionCount={questionCount}
                            handleAnswer={handleAnswer}
                            choiceCount={i + 1}
                            correctAnswer={correctAnswer}
                        />)
                }

                <div className="text-left mt-3 pt-1 h-full">
                    <p className="text-secondary-200 mb-2">Correct Answer: </p>
                    <p
                        className={`bg-${correctAnswer ? "yellow-500" : "tertiary"} text-white p-2 rounded-md shadow text-center`}>
                        {correctAnswer || "Not Set"}
                    </p>
                </div>
            </fieldset>
        </div >
    )
}

export default Question
