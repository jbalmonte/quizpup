// @ts-nocheck
import React, { useRef, useState } from 'react'
import { FcCalculator, FcClock, FcDocument, FcIdea, FcInfo } from 'react-icons/fc'
import { AiOutlineNumber } from 'react-icons/ai'
import { FaFistRaised } from 'react-icons/fa'
import TakeQuizQuestion from '../components/TakeQuizQuestion'

const TakeQuiz = (id) => {

    const [state, setState] = useState(0)

    const questions = [
        { item: 1, question: "What is your name?", choices: ["Joshua", "Johnny", "Mark", "Allisa"] },
        { item: 2, question: "What is your age?", choices: [18, 19, 20, 29] },
        { item: 3, question: "Where do you live?", choices: ["Cainta", "Rizal", "Manila"] }
    ]

    const next = () => setState(prev => prev + 1)
    return (
        <div className="grid grid-cols-3 px-14 py-4 gap-5 text-primary w-full place-content-center">


            <TakeQuizQuestion question={questions[state]} next={next} />


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

                            <td className="py-1 pl-2 text-gray-500">Math in the Modern World </td>
                        </tr>

                        <tr>
                            <td className="py-1">
                                <div className=" flex items-center ">
                                    <FcIdea className="mr-1" />
                                    <span>  Created by: </span></div>
                            </td>
                            <td className="py-1 pl-2 text-gray-500">  Joshua C. Balmonte</td>
                        </tr>

                        <tr>
                            <td className="py-1">
                                <div className=" flex items-center ">
                                    <FaFistRaised className="mr-1 text-red-700" />
                                    <span> Difficulty: </span>
                                </div>
                            </td>
                            <td className="py-1 pl-2 text-gray-500"> Easy </td>
                        </tr>

                        <tr>
                            <td className="py-1">
                                <div className=" flex items-center ">
                                    <AiOutlineNumber className="mr-1 text-green-500" />
                                    <span>   of items: </span>
                                </div>
                            </td>
                            <td className="py-1 pl-2 text-gray-500">  10 </td>
                        </tr>

                        <tr>
                            <td className="py-1">
                                <div className=" flex items-center ">
                                    <span className="mr-1 text-yellow-500 font-header text-base" >Q</span>
                                    <span> Points per item: </span> </div>
                            </td>
                            <td className="py-1 pl-2 text-gray-500">3 </td>
                        </tr>

                        <tr>
                            <td className="py-1">
                                <div className=" flex items-center ">
                                    <FcClock className="mr-1 " />
                                    <span> Estimated Time: </span>
                                </div>
                            </td>
                            <td className="py-1 pl-2 text-gray-500">5 minutes</td>
                        </tr>
                        <tr>
                            <td className="py-1">
                                <div className=" flex items-center ">
                                    <FcCalculator className="mr-1 " />
                                    <span> Total QPoints: </span>
                                </div>
                            </td>
                            <td className="py-1 pl-2 text-gray-500">30</td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div >
    )
}

export default TakeQuiz
