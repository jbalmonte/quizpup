import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AllQuizzes, BestQuizzes, HotQuizzes, NewQuizzes, } from '../categories'
import { FaHistory } from 'react-icons/fa'
import { IoSettingsSharp, IoInformationCircleSharp, IoMailSharp, IoTrashBinSharp, IoDocumentSharp, IoDocumentTextSharp } from 'react-icons/io5'
import Categories from '../components/Categories'
import UserAvatar from '../components/UserAvatar'

const Quizzes = () => {
    return (
        <div className="bg-green-100 font-body text-center grid grid-cols-5 pt-3">

            {/* <div className="col-span-2 ml-3">
                <div className="left-3 rounded-lg h-full bg-green-300 fixed" style={{ width: "16.5rem" }}>

                </div>
            </div> */}

            <div className="col-span-1" >
                <div className="fixed left-3" style={{ width: "16.5rem" }}>
                    <div className="bg-green-300 rounded-lg h-14 flex items-center justify-evenly px-3 shadow ">
                        <UserAvatar size={10} fSize="text-sm" />
                        <input type="text" className="input w-8/12 border h-8 bg-gray-100" disabled
                            placeholder="Create a quiz..." />
                    </div>


                    <div className=" py-5 text-base">
                        <ul className="text-center">
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
                        <div className="mt-44 text-center text-gray-400 text-xs">
                            <span>
                                Copyright © 2021-2022
                            </span>

                        </div>
                    </div >
                </div >



            </div >

            <div className=" col-span-4 mx-10">
                <Router>
                    <Categories />
                    <Switch>
                        <Route path="/quizzes" exact component={AllQuizzes} />
                        <Route path="/quizzes/hot" exact component={HotQuizzes} />
                        <Route path="/quizzes/new" exact component={NewQuizzes} />
                        <Route path="/quizzes/best" exact component={BestQuizzes} />
                    </Switch>
                </Router>
            </div>


        </div >
    )
}

export default Quizzes
