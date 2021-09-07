import React, { useEffect, useState } from "react"
import { IoAdd } from "react-icons/io5"
import { RiCloseFill } from "react-icons/ri"
import Choice from "./Choice"

function Question({ questionID, questionNumber, questionsCount, setQuizQuestions, handleDeleteQuestion }) {

    const [choices, setChoices] = useState({})

    const [choiceElements, setChoiceElements] = useState([{ id: 0 }, { id: 1 }])

    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")

    useEffect(() => {
        setQuizQuestions(prev => ({ ...prev, [questionID]: { question, answer, choices: Object.values(choices) } }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [question, answer, choices])


    const handleDeleteChoice = (id, choice) => {
        if (choice === answer) setAnswer("")
        setChoiceElements(choiceElements.filter(el => el.id !== id))
        setChoices(prev => {
            delete prev[id]
            return prev
        })
    }


    return (
        <div className="my-6">
            <fieldset className="h-full text-primary border w-3/4 bg-green-200 mx-auto rounded-lg p-4 ">
                <div className="text-center relative flex mt-3">
                    <label htmlFor={`question${questionNumber}`} className="bg-green-500 text-gray-50 flex items-center leading-normal rounded-l-lg border border-r-0 border-green-500 px-3 whitespace-no-wrap ">Q{questionNumber}</label>
                    <input
                        required
                        value={question}
                        onChange={e => setQuestion(e.target.value)}
                        type="text"
                        placeholder="Enter your question here"
                        className="text-base px-4 py-2 border border-l-0 border-gray-400 rounded-r-lg focus:outline-none focus:border-green-400 w-11/12"
                    />
                    {
                        questionsCount > 1 &&
                        <span
                            className="absolute block bg-white opacity-0 text-gray-600 hover:opacity-100 text-3xl top-2 right-2 z-20"
                            onClick={() => handleDeleteQuestion(questionID)}>
                            <RiCloseFill />
                        </span>
                    }
                </div>
                <div className="text-right my-3 mr-2">
                    <button
                        type="button"
                        onClick={() => setChoiceElements(prev => [...prev, { id: prev[prev.length - 1].id + 1 }])}
                        className="text-right text-sm font-medium hover:text-primary rounded-md">
                        <IoAdd className="inline-flex text-lg mr-1" />
                        <span >Add Choice</span>
                    </button>
                </div>

                {
                    choiceElements.map(({ id }) =>
                        <Choice
                            id={id}
                            key={id}
                            questionNumber={questionNumber}
                            choicesCount={choiceElements.length}
                            setChoices={setChoices}
                            setAnswer={setAnswer}
                            handleDeleteChoice={handleDeleteChoice}
                        />)
                }

                <div className="text-left mt-3 pt-1 h-full">
                    <p className="text-secondary-200 mb-2">Correct Answer: </p>
                    <p className={`bg-${answer ? "yellow-500" : "tertiary"} text-white p-2 rounded-md shadow text-center`}>
                        {answer || "Not Set"}
                    </p>
                </div>
            </fieldset>
        </div >
    )
}

export default Question
