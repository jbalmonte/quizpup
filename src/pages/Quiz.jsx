// @ts-nocheck
import React from "react"
import UserAvatar from "../components/UserAvatar"
import Review from "../components/Review"
import { useHistory, useParams } from "react-router-dom"
import api from "../services/api"
import Reviews from "../db/Reviews"
import { BsPen } from 'react-icons/bs'
import { FaStar } from "react-icons/fa"
import { getDateDiff } from "../utils/getDateDiff"
import { HiPencil } from 'react-icons/hi'
import { useAuth } from "../context/AuthContext"
import Page404 from './Page404'

function Quiz() {
    const { id } = useParams()
    const history = useHistory()
    const { currentUser, Quizzes, Users } = useAuth()

    const quiz = api(Quizzes).fetchById(+id)

    if (!quiz) return <Page404 />

    const user = api(Users).fetchById(quiz.author.id)
    const reviews = api(Reviews).fetchById(+id)?.reviews || []

    const badge = {
        Easy: 'bg-yellow-500',
        Medium: 'bg-blue-600',
        Hard: 'bg-red-700'
    }

    return (
        <div className="grid grid-cols-3 px-14 py-4 gap-5 text-primary w-full font-body">
            <div className="col-span-2">
                <div className="shadow bg-gray-50 rounded-md pt-6 px-6 pb-4 fixed top-20" style={{ width: "50.5rem", height: "83.5vh" }}>
                    <img src={quiz.image} alt={quiz.title} className="h-64 mb-4 rounded-md object-cover w-full" />

                    <div className="flex items-center justify-between mb-5">
                        <h1 className="text-4xl font-bold">{quiz.title.replace(/(^|\s|-)\w/g, m => m.toUpperCase())}</h1>
                        <div className={`${badge[quiz.difficulty]} text-right rounded-full px-3 py-1 text-gray-50`}>
                            <span>{quiz.difficulty}</span>
                        </div>
                    </div>
                    <div className="flex items-end p-0 mt-4 mb-6">
                        <UserAvatar size={10} fSize="text-sm" user={user} />
                        <div>
                            <p className="ml-2 text-sm my-auto text-gray-600 pointer-events-none">
                                {quiz.author.id === currentUser.id ? 'You' : quiz.author.fullName}
                            </p>
                            <p className="ml-2 text-sm my-auto text-gray-400 pointer-events-none">{getDateDiff(quiz.dateCreated)}</p>
                        </div>
                    </div>

                    <p className="text-secondary-100">{quiz.description.replace(/^./, m => m.toUpperCase())}</p>

                    <div className="flex mt-2 justify-between items-end">
                        <div className="flex items-center">
                            <FaStar className={`mr-1 text-yellow-400 cursor-pointer`} />
                            <span className="mr-2">{quiz.overallRating.average}</span>
                            (
                            <span className="text-gray-500 ">{quiz.overallRating.count}</span>
                            )
                        </div>

                        {
                            currentUser.id !== user.id &&
                            <button
                                onClick={() => history.push(`/takeQuiz/${id}`)}
                                className="border border-primary hover:bg-primary hover:text-gray-50 transition-colors duration-200 ease-linear rounded-lg py-1 px-2">
                                <BsPen className="inline-flex mr-1  text-lg" />
                                <span>
                                    Take Quiz
                                </span>
                            </button>
                        }

                    </div>

                </div>
            </div>

            <div className="shadow col-span-1 rounded-md bg-gray-50 p-5 h-full">
                <div className="flex text-secondary-100 justify-between items-center mr-5">
                    <h2 className="text-3xl mb-1">Reviews</h2>


                    <button className="flex cursor-pointer hover:text-primary hover:underline">
                        <HiPencil />
                        <span className="text-sm ml-1">Add Review</span>
                    </button>

                </div>

                {
                    reviews.length ?
                        reviews.map((review, i) =>
                            <Review
                                key={i + 1}
                                userReview={review}
                                quizDateCreated={quiz.dateCreated}
                                quizDateDiff={getDateDiff(quiz.dateCreated)} />)
                        :
                        <div className="my-10 items-center w-80 mx-auto" style={{ height: "59.5vh" }}>
                            <img src="/images/no_data.svg" alt="No Data" className="" />
                            <span className="flex justify-center mt-5">
                                No Reviews to Display
                            </span>
                        </div>

                }

            </div>
        </div >
    )
}

export default Quiz
