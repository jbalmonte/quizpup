
import React, { useState } from 'react'
import { FcCalculator, FcClock, FcDocument, FcIdea, FcInfo } from 'react-icons/fc'
import { AiOutlineNumber } from 'react-icons/ai'
import { FaFistRaised } from 'react-icons/fa'
import TakeQuizQuestion from '../components/TakeQuizQuestion'
import QuizResult from '../components/QuizResult'
import Questions from '../db/Questions'
import api from '../services/api'
import Quizzes from '../db/Quizzes'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'


const TakeQuiz = () => {
    // @ts-ignore
    const { id } = useParams()
    const quiz = api(Quizzes).fetchById(+id)
    const questions = api(Questions).fetchById(+id).questions

    const difficultyPoints = {
        'Easy': 1,
        'Medium': 3,
        'Hard': 5
    }

    const [state, setState] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(questions[state])
    const [totalPoints, setTotalPoints] = useState(0)

    const next = (answer) => {
        if (answer === currentQuestion.correctAnswer) setTotalPoints(prev => +prev + +(difficultyPoints[quiz.difficulty]))
        setState(prev => prev + 1)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setCurrentQuestion(questions[state]), [state])


    return (
        <div className="grid grid-cols-3 px-14 py-4 gap-5 text-primary w-full place-content-center my-auto h-semiScreen">

            {
                currentQuestion ?
                    <TakeQuizQuestion
                        question={
                            {
                                item: state < questions.length - 1 ? state + 1 : state,
                                ...currentQuestion,
                                totalQuestions: questions.length
                            }}
                        next={next} /> :

                    <QuizResult
                        totalItems={questions.length}
                        totalPoints={totalPoints}
                        correctAnswers={totalPoints / difficultyPoints[quiz.difficulty]}
                    />
            }

            {
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
                                <td className="py-1">
                                    <div className=" flex items-center ">
                                        <FcDocument className="mr-1" />
                                        <span >  Title: </span>
                                    </div>
                                </td>

                                <td className="py-1 pl-2 text-gray-500">{quiz.title}</td>
                            </tr>

                            <tr>
                                <td className="py-1">
                                    <div className=" flex items-center ">
                                        <FcIdea className="mr-1" />
                                        <span>  Created by: </span></div>
                                </td>
                                <td className="py-1 pl-2 text-gray-500">  {quiz.creator.fullName}</td>
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
                </div>
            }
        </div >
    )
}

export default TakeQuiz
