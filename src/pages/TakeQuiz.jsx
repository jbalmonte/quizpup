// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { FcCalculator, FcClock, FcDocument, FcIdea, FcInfo } from 'react-icons/fc'
import { AiOutlineNumber } from 'react-icons/ai'
import { FaFistRaised } from 'react-icons/fa'
import TakeQuizQuestion from '../components/TakeQuizQuestion'
import QuizResult from '../components/QuizResult'
import api from '../services/api'
import { useParams } from 'react-router-dom'
import fetchQuestions from '../services/fetchQuestions'
import ReactLoading from 'react-loading'
import { useAuth } from '../context/AuthContext'


function TakeQuiz() {

    const { Quizzes, Questions } = useAuth()

    const { id } = useParams()
    const quiz = api(Quizzes).fetchById(+id)

    const [loading, setLoading] = useState(false)
    const [state, setState] = useState(0)
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState()
    const [totalPoints, setTotalPoints] = useState(0)

    console.log('ID', id, 'QUIZZES', quiz)

    useEffect(() => {
        setLoading(true)
        async function getQuestions() {
            setQuestions(id > 1 && id <= 100 ? await fetchQuestions(quiz.title, quiz.difficulty) : api(Questions).fetchById(+id).questions)
            setLoading(false)
        }
        getQuestions()
        return () => setLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const difficultyPoints = {
        'Easy': 1,
        'Medium': 3,
        'Hard': 5
    }


    const next = (answer) => {
        if (answer === currentQuestion.answer) setTotalPoints(prev => +prev + +(difficultyPoints[quiz.difficulty]))
        setState(prev => prev + 1)
    }

    useEffect(() => setCurrentQuestion(questions[state]), [state, questions])


    return (
        <div className="grid grid-cols-3 px-14 py-4 gap-5 text-primary w-full place-content-center my-auto h-semiScreen">
            {
                loading ?
                    <div className="col-span-2 flex items-center justify-center border-purple-600 bg-gray-50 rounded-md border" style={{ width: "50.5rem" }}>
                        <ReactLoading
                            type="spin"
                            height='5%'
                            width='5%'
                            color={"#334756"}
                        />
                    </div> :

                    currentQuestion ?
                        <TakeQuizQuestion
                            question={currentQuestion}
                            item={state < questions.length ? state + 1 : state}
                            totalQuestions={questions.length}
                            correctAnswer={currentQuestion.answer}
                            next={next}
                        /> :

                        <QuizResult
                            quiz={quiz}
                            totalItems={questions.length}
                            totalPoints={totalPoints}
                            correctAnswers={totalPoints / difficultyPoints[quiz.difficulty]}
                        />
            }


            {
                loading ?
                    <div className="shadow h-full col-span-1 rounded-md bg-gray-50 p-5">
                        <div className="h-96 w-full flex items-center justify-center p-0">
                            <ReactLoading
                                type="spin"
                                height='11%'
                                width='11%'
                                color={"#334756"}
                            />
                        </div>
                    </div> :

                    currentQuestion
                    &&
                    <div className="shadow h-full col-span-1 rounded-md bg-gray-50 p-5">
                        <div className="flex items-baseline mb-8 justify-between">
                            <h2 className="text-3xl  mr-2 font-semibold">Quiz Information</h2>
                            <FcInfo className="text-2xl" />
                        </div>

                        <table>
                            <tbody>
                                <tr>
                                    <td className="py-2">
                                        <div className=" flex items-center ">
                                            <FcDocument className="mr-1" />
                                            <span >  Title: </span>
                                        </div>
                                    </td>

                                    <td className="py-2 pl-2 text-gray-500">{quiz.title}</td>
                                </tr>

                                <tr>
                                    <td className="py-1">
                                        <div className=" flex items-center ">
                                            <FcIdea className="mr-1" />
                                            <span>  Created by: </span></div>
                                    </td>
                                    <td className="py-1 pl-2 text-gray-500">  {quiz.author.fullName}</td>
                                </tr>

                                <tr>
                                    <td className="py-1">
                                        <div className=" flex items-center ">
                                            <FaFistRaised className="mr-1 text-red-700" />
                                            <span> Difficulty: </span>
                                        </div>
                                    </td>
                                    <td className="py-1 pl-2 text-gray-500"> {quiz.difficulty} </td>
                                </tr>

                                <tr>
                                    <td className="py-1">
                                        <div className=" flex items-center ">
                                            <AiOutlineNumber className="mr-1 text-green-500" />
                                            <span>   of items: </span>
                                        </div>
                                    </td>
                                    <td className="py-1 pl-2 text-gray-500">  {questions.length} </td>
                                </tr>

                                <tr>
                                    <td className="py-1">
                                        <div className=" flex items-center ">
                                            <span className="mr-1 text-yellow-500 font-header text-base" >Q</span>
                                            <span> Points per item: </span> </div>
                                    </td>
                                    <td className="py-1 pl-2 text-gray-500">
                                        {difficultyPoints[quiz.difficulty]}
                                    </td>
                                </tr>

                                <tr>
                                    <td className="py-1">
                                        <div className=" flex items-center ">
                                            <FcClock className="mr-1 " />
                                            <span> Estimated Time: </span>
                                        </div>
                                    </td>
                                    <td className="py-1 pl-2 text-gray-500">
                                        {`${questions.length <= 2 ? 'less than a minute' : Math.ceil((questions.length * 30) / 60) + ' minutes'}`}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-1">
                                        <div className=" flex items-center ">
                                            <FcCalculator className="mr-1 " />
                                            <span> Total QPoints: </span>
                                        </div>
                                    </td>
                                    <td className="py-1 pl-2 text-gray-500">
                                        {questions.length * difficultyPoints[quiz.difficulty]}
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div >
            }

        </div >

    )
}
export default TakeQuiz
