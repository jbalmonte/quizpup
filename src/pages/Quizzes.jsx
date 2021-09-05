import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { FaHistory } from 'react-icons/fa'
import { IoSettingsSharp, IoInformationCircleSharp, IoMailSharp, IoTrashBinSharp, IoDocumentSharp, IoDocumentTextSharp, IoHome, IoAddCircleSharp } from 'react-icons/io5'
import UserAvatar from '../components/UserAvatar'
import QuizByCategory from '../components/quizzes/QuizByCategory'
import { useAuth } from '../context/AuthContext'
import MyWorks from '../components/quizzes/MyWorks'
import Drafts from '../components/quizzes/Drafts'
import History from '../components/quizzes/History'
import Trash from '../components/quizzes/Trash'

function Quizzes({ history }) {
    // @ts-ignore
    const { currentUser } = useAuth()

    return (
        <div className="font-body text-center grid grid-cols-6 pt-3">

            <div className="col-span-1" >

                <div className="fixed left-3" style={{ width: "14.5rem" }}>

                    <button onClick={() => history.push("/createQuiz")} className="bg-green-300 hover:bg-secondary-200 hover:shadow-md rounded-lg h-14 flex items-center justify-evenly px-1 shadow transition-colors duration-500 ease-linear">
                        <UserAvatar size={8} fSize="text-xs" user={currentUser} />
                        <input type="text" className="input w-8/12 border h-8 bg-gray-100" disabled
                            placeholder="Create a quiz..." />
                        <IoAddCircleSharp className="text-2xl text-green-500" />
                    </button>

                    <div className=" py-5 text-base">
                        <ul className="text-center">
                            <NavLink to="/quizzes" exact activeClassName="active-side-nav" className="cursor-pointer flex items-center py-2 hover:bg-green-300 px-2  ">
                                <IoHome className="text-secondary-100" />
                                <span className="ml-3">
                                    Home Feed
                                </span>
                            </NavLink>
                            <NavLink to="/quizzes/myWorks" activeClassName="active-side-nav" className="cursor-pointer flex items-center py-2 hover:bg-green-300 px-2  ">
                                <IoDocumentTextSharp className="text-secondary-100" />
                                <span className="ml-3">
                                    My Works
                                </span>
                            </NavLink>

                            <NavLink to="/quizzes/drafts" activeClassName="active-side-nav" className="cursor-pointer flex items-center py-2 hover:bg-green-300 px-2   ">
                                <IoDocumentSharp className="text-secondary-100" />
                                <span className="ml-3">
                                    Drafts
                                </span>
                            </NavLink>

                            <NavLink to="/quizzes/history" activeClassName="active-side-nav" className="cursor-pointer flex items-center py-2 hover:bg-green-300 px-2  ">
                                <FaHistory className="text-secondary-100" />
                                <span className="ml-3">
                                    History
                                </span>
                            </NavLink>

                            <NavLink to="/quizzes/trash" activeClassName="active-side-nav" className="cursor-pointer flex items-center py-2 hover:bg-green-300 px-2">
                                <IoTrashBinSharp className="text-secondary-100" />
                                <span className="ml-3">
                                    Trash
                                </span>
                            </NavLink>
                            <hr className="z-30 bg-gray-400 w-11/12" style={{ height: "1.5px" }} />
                            <NavLink to="/settings" className="cursor-pointer flex items-center py-2 hover:bg-green-300 px-2  mt-3">
                                <IoSettingsSharp className="text-secondary-100" />
                                <span className="ml-3">
                                    Settings
                                </span>
                            </NavLink>
                            <NavLink to="/about" className="cursor-pointer flex items-center py-2 hover:bg-green-300 px-2 ">
                                <IoInformationCircleSharp className="text-secondary-100" />
                                <span className="ml-3">
                                    About
                                </span>
                            </NavLink>
                            <NavLink to="/contact" className="cursor-pointer flex items-center py-2 hover:bg-green-300 px-2 ">
                                <IoMailSharp className="text-secondary-100" />
                                <span className="ml-3">
                                    Contact
                                </span>
                            </NavLink>

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

                <Switch>
                    <Route exact path="/quizzes/myWorks" component={MyWorks} />
                    <Route exact path="/quizzes/drafts" component={Drafts} />
                    <Route exact path="/quizzes/history" component={History} />
                    <Route exact path="/quizzes/trash" component={Trash} />
                    <Route
                        exact
                        path={["/quizzes", "/quizzes/:category"]}
                        component={props => <QuizByCategory {...props} />} />
                </Switch>

            </div>


        </div >
    )
}

export default Quizzes
