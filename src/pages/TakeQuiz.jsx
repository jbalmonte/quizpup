import React from 'react'
import { FcCalculator, FcClock, FcDocument, FcIdea, FcInfo } from 'react-icons/fc'
import { AiOutlineNumber } from 'react-icons/ai'
import { FaFistRaised } from 'react-icons/fa'
import { MdNavigateNext } from 'react-icons/md'
const TakeQuiz = (id) => {


    return (
        <div className="grid grid-cols-3 px-14 py-4 gap-5 text-primary w-full">

            <div className="col-span-2 shadow bg-gray-50 rounded-md  pt-8 px-8 pb-6 font-body" style={{ width: "50.5rem" }}>

                <div className="flex items-center">
                    <div className="rounded-full bg-quaternary w-12 shadow h-10 font-header font-medium items-center flex justify-center text-gray-50 mr-5">
                        <span className="mr-1">Q</span>
                        <span>1</span>
                    </div>
                    <h1 className="text-3xl">What is your name? </h1>
                </div>

                <div className="grid grid-cols-1 m-10 gap-2 w-1/2 mx-auto">

                    <div className="text-center flex col-span-1">
                        <span className="flex items-center leading-normal rounded-l-md border border-r-0 border-gray-400 px-3 whitespace-no-wrap text-secondary-100 ">
                            <input type="radio" name="question1" id="question1A" className="w-4 h-4" />
                        </span>
                        <label htmlFor="question1A" className="text-base px-4 py-2 border border-gray-400 rounded-r-md focus:outline-none focus:border-green-400 w-11/12" >
                            Choice A
                        </label>
                    </div>


                    <div className="text-center flex col-span-1">
                        <span className="flex items-center leading-normal rounded-l-md border border-r-0 border-gray-400 px-3 whitespace-no-wrap text-secondary-100 ">
                            <input type="radio" name="question1" id="question1B" className="w-4 h-4" />
                        </span>
                        <label htmlFor="question1B" className="text-base px-4 py-2 border border-gray-400 rounded-r-md focus:outline-none focus:border-green-400 w-11/12" >
                            Choice B
                        </label>
                    </div>

                    <div className="text-center flex col-span-1">
                        <span className="flex items-center leading-normal rounded-l-md border border-r-0 border-gray-400 px-3 whitespace-no-wrap text-secondary-100 ">
                            <input type="radio" name="question1" id="question1C" className="w-4 h-4" />
                        </span>
                        <label htmlFor="question1C" className="text-base px-4 py-2 border border-gray-400 rounded-r-md focus:outline-none focus:border-green-400 w-11/12" >
                            Choice C
                        </label>
                    </div>

                    <div className="text-center flex col-span-1">
                        <span className="flex items-center leading-normal rounded-l-md border border-r-0 border-gray-400 px-3 whitespace-no-wrap text-secondary-100 ">
                            <input type="radio" name="question1" id="question1D" className="w-4 h-4" />
                        </span>
                        <label htmlFor="question1D" className="text-base px-4 py-2 border border-gray-400 rounded-r-md focus:outline-none focus:border-green-400 w-11/12" >
                            Choice D
                        </label>
                    </div>


                </div>
                <div className="text-right hover:text-green-500">
                    <button className="border border-green-500 text-green-500 py-1 pl-2 transition-colors duration-150 ease-linear rounded-lg hover:bg-green-500 hover:text-gray-50">
                        <span>Next</span>
                        <MdNavigateNext className="inline-flex text-2xl self-start items-start" />
                    </button>
                </div>
            </div>

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
