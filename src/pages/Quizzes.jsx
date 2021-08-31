import React from 'react'
import { Route } from 'react-router-dom'
import { FaHistory } from 'react-icons/fa'
import { IoSettingsSharp, IoInformationCircleSharp, IoMailSharp, IoTrashBinSharp, IoDocumentSharp, IoDocumentTextSharp, IoHome, IoAddCircleSharp } from 'react-icons/io5'
import UserAvatar from '../components/UserAvatar'
import QuizByCategory from './QuizByCategory'
import Categories from '../components/Categories'
import { useAuth } from '../context/AuthContext'

const Quizzes = ({ match: { params }, history }) => {
    // @ts-ignore
    const { currentUser } = useAuth()

    return (
        <div className="font-body text-center grid grid-cols-6 pt-3">

            <div className="col-span-1" >

                <div className="fixed left-3" style={{ width: "14.5rem" }}>

                    <button onClick={() => history.push("/createQuiz")} className="bg-green-300 hover:bg-secondary-200 hover:shadow-md rounded-lg h-14 flex items-center justify-evenly px-1 shadow transition-colors duration-500 ease-linear">
                        <UserAvatar size={10} fSize="text-sm" user={currentUser} />
                        <input type="text" className="input w-8/12 border h-8 bg-gray-100" disabled
                            placeholder="Create a quiz..." />
                        <IoAddCircleSharp className="text-2xl text-green-600" />
                    </button>

                    <div className=" py-5 text-base">
                        <ul className="text-center">
                            <li className="cursor-pointer flex items-center py-2 hover:bg-green-300 px-2  border-r-4 border-green-500">
                                <IoHome className="text-secondary-100" />
                                <span className="ml-3">
                                    Home Feed
                                </span>
                            </li>
                            <li className="cursor-pointer flex items-center py-2 hover:bg-green-300 px-2  ">
                                <IoDocumentTextSharp className="text-secondary-100" />
                                <span className="ml-3">
                                    My Works
                                </span>
                            </li>

                            <li className="cursor-pointer flex items-center py-2 hover:bg-green-300 px-2   ">
                                <IoDocumentSharp className="text-secondary-100" />
                                <span className="ml-3">
                                    Drafts
                                </span>
                            </li>

                            <li className="cursor-pointer flex items-center py-2 hover:bg-green-300 px-2  ">
                                <FaHistory className="text-secondary-100" />
                                <span className="ml-3">
                                    History
                                </span>
                            </li>

                            <li className="cursor-pointer flex items-center py-2 hover:bg-green-300 px-2  border-b border-gray-300">
                                <IoTrashBinSharp className="text-secondary-100" />
                                <span className="ml-3">
                                    Trash
                                </span>
                            </li>
                            <li className="cursor-pointer flex items-center py-2 hover:bg-green-300 px-2  mt-3">
                                <IoSettingsSharp className="text-secondary-100" />
                                <span className="ml-3">
                                    Settings
                                </span>
                            </li>
                            <li className="cursor-pointer flex items-center py-2 hover:bg-green-300 px-2 ">
                                <IoInformationCircleSharp className="text-secondary-100" />
                                <span className="ml-3">
                                    About
                                </span>
                            </li>
                            <li className="cursor-pointer flex items-center py-2 hover:bg-green-300 px-2 ">
                                <IoMailSharp className="text-secondary-100" />
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

            <div className="col-span-5 mx-10 mb-5">
                <Categories history={history} />

                <Route exact path="/quizzes" component={QuizByCategory} />
                <Route exact path="/quizzes/:category" component={QuizByCategory} />


            </div>


        </div >
    )
}

export default Quizzes
