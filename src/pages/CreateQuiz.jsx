// @ts-nocheck
import React, { useRef, useState } from 'react'
import { IoAdd, IoArrowBackOutline } from 'react-icons/io5'
import { useHistory } from 'react-router-dom'
import Question from '../components/Question'
import api from '../services/api'
import Quizzes from '../db/Quizzes'
import { useAuth } from '../context/AuthContext'
import Questions from '../db/Questions'
import Reviews from '../db/Reviews'



function CreateQuiz() {

    const { currentUser } = useAuth()
    const history = useHistory()

    const title = useRef()
    const description = useRef()

    const [questionElements, setQuestionElements] = useState(1)
    const questions = useRef([])
    const [difficulty, setDifficulty] = useState()

    const handleSubmit = e => {
        e.preventDefault()
        const quiz = api(Quizzes).create({
            title: title.current.value,
            image: "https://source.unsplash.com/random/" + ~~(Math.random() * 1000),
            description: description.current.value,
            difficulty,
            author: { id: currentUser.id, fullName: currentUser.fullName, image: currentUser.image },
            dateCreated: new Date(),
            overallRating: { average: 0, count: 0 }
        })
        const question = api(Questions).create({ id: quiz.id, questions: questions.current })

        const reviews = api(Reviews).create({ id: quiz.id, reviews: [] })
        console.log(quiz, question, reviews)

        history.push('/quizzes')
    }

    return (
        <div className="py-3 ">
            <div className="bg-gray-50 w-1/2 border rounded-2xl mx-auto mb-5 py-3 px-5 relative">
                <button onClick={() => history.push("/quizzes")} className="absolute text-4xl text-secondary-100 top-6 rounded-full border border-opacity-0 border-gray-300  hover:border-opacity-100 transform hover:scale-105 hover:text-primary h-12 w-12 hover:bg-gray-200">
                    <IoArrowBackOutline className="m-auto" />
                </button>

                <h1 className="text-4xl my-4 pb-2 font-semibold text-primary mx-auto text-center w-1/2">Create Quiz</h1>

                <div className="py-3 mx-auto">
                    <form className="text-center" onSubmit={handleSubmit}>
                        <div className="my-4">
                            <label htmlFor="title" className="font-medium text-secondary-200 tracking-wide uppercase mr-20">Title: </label>
                            <input required ref={title} type="text" name="title" id="title" placeholder="Quiz Title" className="text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400 w-6/12" />
                        </div>

                        <div className="my-4 ">
                            <label htmlFor="coverPhoto" className="font-medium text-secondary-200 tracking-wide uppercase mr-3">Cover Photo: </label>
                            <input required type="file" name="coverPhoto" id="coverPhoto" className="text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400 w-6/12" />
                        </div>

                        <div className="my-4 ">
                            <label htmlFor="description" className="font-medium text-secondary-200 tracking-wide uppercase mr-5">Description: </label>
                            <textarea ref={description} name="description" id="description" placeholder="Input the description here..." className="text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400 w-1/2 h-28" />
                        </div>

                        <fieldset className="flex pl-2 mx-20 m-auto border h-24 mb-6" onChange={e => setDifficulty(e.target.value)}>
                            <legend className="font-medium text-secondary-200 tracking-wide uppercase text-left">Difficulty: </legend>
                            <div className="flex ml-16 items-center justify-center">
                                <input required type="radio" name="difficulty" id="easy" value="Easy" className=" h-5 w-5 text-green-500 " />
                                <label htmlFor="easy" className="mr-16 ml-2">Easy</label>

                                <input required type="radio" name="difficulty" id="medium" value="Medium" className="h-5 w-5 text-green-500" />
                                <label htmlFor="easy" className="mr-16 ml-2">Medium</label>

                                <input required type="radio" name="difficulty" id="hard" value="Hard" className="h-5 w-5 text-green-500 " />
                                <label htmlFor="easy" className="mr-16 ml-2">Hard</label>
                            </div>
                        </fieldset>

                        <div className="my-2 pt-4 flex justify-around  border-t ">
                            <span className="font-medium text-secondary-200 tracking-wide uppercase mr-4">Questions: </span>
                            <button
                                type="button"
                                onClick={() => setQuestionElements(prev => prev + 1)}
                                className="ml-12 text-sm font-medium hover:text-green-600 hover:bg-gray-50 rounded-md transform hover:scale-105">
                                <IoAdd className="inline-flex text-lg mr-1" />
                                <span >
                                    Add Question
                                </span>
                            </button>
                        </div>
                        {
                            [...new Array(questionElements)].map((_, i) =>
                                <Question
                                    key={i}
                                    questionID={i + 1}
                                    questions={questions}
                                />
                            )
                        }

                        <button type="submit" className="button font-semibold text-primary my-4 shadow-sm">Publish</button>


                    </form>
                </div>
            </div>
        </div >
    )
}

export default CreateQuiz
