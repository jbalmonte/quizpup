// @ts-nocheck

import React, { useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import Confetti from 'react-confetti'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Users from '../db/Users'
import api from '../services/api'

function QuizResult({ totalItems, totalPoints, correctAnswers }) {
    const resultRef = useRef()
    const pointRef = useRef()
    const scoreRef = useRef()
    const history = useHistory()

    const { currentUser, setCurrentUser } = useAuth()

    const handleEnd = () => {
        //update both currentUser and in our db
        setCurrentUser({ ...currentUser, QPoints: currentUser.QPoints + totalPoints })
        api(Users).update(currentUser.id, { QPoints: currentUser.QPoints + totalPoints })
    }

    useEffect(() => {
        scoreRef?.current.classList.remove('hidden')
        setTimeout(() => {
            if (pointRef.current && scoreRef.current) {
                pointRef.current.classList.remove('hidden')
            }
        }, 3000);

    }, [])

    return (
        <div className="col-span-3 flex text-secondary-200 bg-gray-50 rounded-lg font-body overflow-hidden">
            <div className=" bg-gradient-to-l from-purple-600 to-quaternary pb-2">
                <img src="/images/result.svg" alt="Result" className="object-cover w-50 h-96 mt-10 " onLoad={() =>
                    // @ts-ignore 
                    //wait for the image to load before start the result text animation
                    resultRef.current.classList.remove('hidden')} />
            </div>


            <div className="pt-8 px-8 pb-6 text-purple-700 w-9/12 relative hidden" ref={resultRef}>
                <h1 className="font-header text-5xl mb-10">
                    Result:
                </h1>
                <div className="flex items-center justify-around">

                    <div className=" py-5 overflow-hidden  justify-between my-auto text-secondary-200 border-8 rounded-full border-yellow-500 h-56 w-56 ">
                        <div className="hidden" ref={scoreRef}>
                            <div className="items-center flex flex-col" >
                                <p className="text-7xl">
                                    {
                                        <CountUp
                                            start={0}
                                            end={correctAnswers}
                                            delay={0.5}
                                            duration={2.5} />
                                    }
                                </p>
                                <div className="w-full h-2 bg-yellow-500" >
                                </div>
                                <p className="text-7xl">{totalItems}</p>
                            </div>
                        </div>
                    </div>
                    <h2 className=" self-center text-secondary-100 hidden" ref={pointRef}>
                        <span className=" text-5xl">+
                            <CountUp
                                start={0}
                                end={totalPoints}
                                delay={3.5}
                                duration={3}
                                onEnd={handleEnd}
                            /></span>
                        <span className="ml-3 text-3xl my-auto">QPoints</span>
                    </h2>
                </div>

                <div className="text-right mt-5">
                    <button onClick={() => history.push("/quizzes")} className=" border  text-green-600 border-green-600 p-2 rounded-lg hover:bg-green-500 hover:text-white">
                        Back to Home
                    </button>
                </div>

                <Confetti
                    width={700}
                    height={700}
                    numberOfPieces={100}
                    colors={
                        totalPoints === 0 ?
                            ['red'] :
                            ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548']} />
            </div>
        </div>
    )
}

export default QuizResult