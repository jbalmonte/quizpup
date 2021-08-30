import React from "react"
import UserAvatar from "../components/UserAvatar"
import { BsPen } from 'react-icons/bs'
import { FaStar } from "react-icons/fa"
import { HiPencil } from 'react-icons/hi'
import Review from "../components/Review"
import { useHistory } from "react-router-dom"
import apiFunc from "../services/api"
import Quizzes from "../db/Quizzes"
import Users from "../db/Users"
import { getDateDiff } from "../services/getDateDiff"

const Quiz = ({ match: { params } }) => {
    const id = params.id
    const history = useHistory()
    const quiz = apiFunc(Quizzes).fetchById(+id)
    const user = apiFunc(Users).fetchById(quiz.creator)

    const badge = {
        Easy: 'bg-yellow-500',
        Medium: 'bg-blue-600',
        Hard: 'bg-red-700'
    }

    return (
        <div className="grid grid-cols-3 px-14 py-4 gap-5 text-primary w-full">

            <div className="col-span-2 ">
                <div className="shadow bg-gray-50 rounded-md  pt-8 px-8 pb-6 font-body fixed top-20 " style={{ width: "50.5rem" }}>
                    <img src="/images/mountain.jpg" alt="Mountain" className="h-64 mb-4 rounded-md object-cover w-full" />

                    <div className="flex justify-between items-center">

                        <h1 className="text-4xl font-semibold font-header ">{quiz.title}</h1>
                        <div className={`${badge[quiz.difficulty]} rounded-full px-3 py-1 text-gray-50`}><span>{quiz.difficulty}</span></div>
                    </div>
                    <div className="flex items-end p-0 mt-4 mb-6">
                        <UserAvatar size={10} fSize="text-sm" user={user} />
                        <div>
                            <p className="ml-2 text-sm my-auto text-gray-600 pointer-events-none">{user.fullName}</p>
                            <p className="ml-2 text-sm my-auto text-gray-400 pointer-events-none">{getDateDiff(quiz.dateCreated)}</p>
                        </div>
                    </div>

                    <p className="text-secondary-100">{quiz.description}</p>

                    <div className="flex mt-2 justify-between items-center">

                        <div className="flex items-center">
                            <FaStar className={`mr-1 text-yellow-400 cursor-pointer`} />
                            <span className="mr-2">{quiz.overallRating.average}</span>
                            (
                            <span className="text-gray-500 ">{quiz.overallRating.count}</span>
                            )
                        </div>


                        <button onClick={() => history.push('/takeQuiz/1')} className="border border-primary hover:bg-primary hover:text-gray-50 transition-colors duration-200 ease-linear rounded-lg p-1 px-2">
                            <BsPen className="inline-flex mr-1  text-lg" />
                            <span>
                                Take Quiz
                            </span>
                        </button>

                    </div>

                </div>
            </div>

            <div className="shadow h-full col-span-1 rounded-md bg-gray-50 p-5">

                <div className="flex text-secondary-100 justify-between items-center mr-5">

                    <h2 className="text-3xl mb-1">Reviews</h2>

                    <button className="flex cursor-pointer hover:text-primary hover:underline">
                        <HiPencil />
                        <span className="text-sm ml-1">Add Review</span>
                    </button>
                </div>

                {
                    [...Array(20)].map((_, i) => <Review key={i + 1} />)
                }

            </div>
        </div >
    )
}

export default Quiz
