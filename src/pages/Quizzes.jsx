import React from 'react'
import { Route, Link, useHistory } from 'react-router-dom'
import { FaHistory } from 'react-icons/fa'
import { IoSettingsSharp, IoInformationCircleSharp, IoMailSharp, IoTrashBinSharp, IoDocumentSharp, IoDocumentTextSharp, IoHome, IoAddCircleSharp } from 'react-icons/io5'
import UserAvatar from '../components/UserAvatar'
import QuizByCategory from './QuizByCategory'
import Categories from '../components/Categories'

const Quizzes = () => {
    const history = useHistory()

    return (
        <div className="bg-green-100 font-body text-center grid grid-cols-5 pt-3">

            <div className="col-span-1" >

                <div className="fixed left-3" style={{ width: "16.5rem" }}>

                    <Link to="/createQuiz">
                        <div className="bg-green-300 hover:bg-secondary-200 hover:shadow-md rounded-lg h-14 flex items-center justify-evenly px-1 shadow transition-colors duration-500 ease-linear">
                            <UserAvatar size={10} fSize="text-sm" />
                            <input type="text" className="input w-8/12 border h-8 bg-gray-100" disabled
                                placeholder="Create a quiz..." />
                            <IoAddCircleSharp className="text-2xl text-green-600" />
                        </div>
                    </Link>


                    <div className=" py-5 text-base">
                        <ul className="text-center">
                            <li className="flex items-center py-2 hover:bg-green-300 px-2  border-r-4 border-green-500">
                                <IoHome />
                                <span className="ml-3">
                                    Home Feed
                                </span>
                            </li>
                            <li className="flex items-center py-2 hover:bg-green-300 px-2  ">
                                <IoDocumentTextSharp />
                                <span className="ml-3">
                                    My Works
                                </span>
                            </li>

                            <li className="flex items-center py-2 hover:bg-green-300 px-2   ">
                                <IoDocumentSharp />
                                <span className="ml-3">
                                    Drafts
                                </span>
                            </li>

                            <li className="flex items-center py-2 hover:bg-green-300 px-2  ">
                                <FaHistory />
                                <span className="ml-3">
                                    History
                                </span>
                            </li>

                            <li className="flex items-center py-2 hover:bg-green-300 px-2  border-b border-gray-300">
                                <IoTrashBinSharp />
                                <span className="ml-3">
                                    Trash
                                </span>
                            </li>
                            <li className="flex items-center py-2 hover:bg-green-300 px-2  mt-3">
                                <IoSettingsSharp />
                                <span className="ml-3">
                                    Settings
                                </span>
                            </li>
                            <li className="flex items-center py-2 hover:bg-green-300 px-2 ">
                                <IoInformationCircleSharp />
                                <span className="ml-3">
                                    About
                                </span>
                            </li>
                            <li className="flex items-center py-2 hover:bg-green-300 px-2 ">
                                <IoMailSharp />
                                <span className="ml-3">
                                    Contact
                                </span>
                            </li>

                        </ul >
                        <div className="mt-36 text-center text-gray-500 text-xs">
                            <span>
                                Copyright © 2021-2022
                            </span>

                        </div>
                    </div >
                </div >



            </div >

            <div className="col-span-4 mx-10">
                <Categories history={history} />


                <Route exact path="/quizzes" component={QuizByCategory} />
                <Route exact path="/quizzes/:category" component={QuizByCategory} />


            </div>


        </div >
    )
}

export default Quizzes
