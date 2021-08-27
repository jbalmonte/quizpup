
import React, { useEffect, useRef } from 'react'
import result from '../images/result.svg'
import CountUp from 'react-countup'
import Confetti from 'react-confetti'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useHistory } from 'react-router-dom'

const QuizResult = () => {
    const pointRef = useRef()
    const scoreRef = useRef()
    const history = useHistory()
    useEffect(() => {
        // @ts-ignore
        scoreRef?.current.classList.remove('hidden')
        setTimeout(() => {
            if (pointRef.current && scoreRef.current) {
                // @ts-ignore
                pointRef.current.classList.remove('hidden')
            }
        }, 3000);

    }, [])

    return (
        <div className="col-span-3 flex text-secondary-200 bg-gray-50 rounded-lg font-body overflow-hidden">
            <div className=" bg-gradient-to-l from-purple-600 to-quaternary pb-2">
                <img src={result} alt="Result" className="object-cover w-50 h-96 mt-10 " />
            </div>


            <div className="pt-8 px-8 pb-6 text-purple-700 w-9/12 relative">
                <h1 className="font-header text-5xl mb-10">
                    Result:
                </h1>
                <div className="flex items-center justify-around">

                    <div className=" py-5 overflow-hidden  justify-between my-auto text-secondary-200 border-8 rounded-full border-yellow-500 h-56 w-56 ">
                        <div className="hidden items-center flex flex-col" ref={scoreRef}>
                            <p className="text-7xl">
                                {
                                    // <span className="hidden" >
                                    <CountUp start={0} end={15} delay={0.5} duration={2.5} />
                                    //</span>
                                }

                            </p>
                            <div className="w-full h-2 bg-yellow-500" >
                            </div>
                            <p className="text-7xl">15</p>
                        </div>
                    </div>
                    <h2 className=" self-center text-secondary-100 hidden" ref={pointRef}>
                        <span className=" text-5xl">+<CountUp start={0} end={15} delay={3.5} duration={3} /></span>
                        <span className="ml-3 text-3xl my-auto">QPoints</span>
                    </h2>
                </div>

                <div className="text-right mt-5">
                    <button onClick={() => history.push("/quizzes")} className=" border  text-green-600 border-green-600 p-2 rounded-lg hover:bg-green-500 hover:text-white">
                        Back to Home
                    </button>
                </div>

                <Confetti width={700} height={700} numberOfPieces={50} />
            </div>
        </div>
    )
}

export default QuizResult
