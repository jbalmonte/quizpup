// @ts-nocheck
import React from "react"
import UserAvatar from './UserAvatar'
import { FaStar } from "react-icons/fa"
import { IoTrashBinOutline } from "react-icons/io5"
import { useHistory } from "react-router-dom"
import { getDateDiff } from "../utils/getDateDiff"
import { useAuth } from '../context/AuthContext'
import api from '../services/api'


function Card({ quiz, hasDeleteComponent = false }) {
    const { id, title, description, image, author, overallRating, dateCreated } = quiz
    const history = useHistory()
    const { currentUser, setCurrentUser, setQuizzes, setQuestions, Users } = useAuth()

    const user = api(Users).fetchById(author.id)

    const handleDelete = e => {
        e.stopPropagation()
        setCurrentUser(prev => ({
            ...prev,
            quizzes: currentUser.quizzes.filter(q => q.id !== quiz.id),
            trash: [...(currentUser?.trash || []), { quiz, dateDeleted: new Date().toLocaleString() }]
        }))
        setQuizzes(prev => prev.filter(q => q.id !== quiz.id))
        setQuestions(prev => prev.filter(q => q.id !== quiz.id))
    }

    return (
        <div onClick={() => history.push(`/quizzes/${id}`)} className="relative overflow-hidden h-48 bg-gray-50 shadow-sm hover:shadow-md text-secondary-200 flex rounded-lg text-left col-span-1 w-full">
            <img src={`${image}`} alt={title} className="bg-cover w-1/3 overflow-hidden z-0" />

            {
                hasDeleteComponent &&
                <IoTrashBinOutline className="absolute top-5 right-5 text-2xl opacity-0 hover:opacity-100" onClick={handleDelete} />
            }

            <div className="h-full ml-5 flex flex-col justify-evenly w-2/3  pr-5">
                <h1 className="text-xl pt-2 font-bold pointer-events-none">
                    {title.replace(/(^|\s|-)\w/g, m => m.toUpperCase())}
                </h1>
                <p className="text-xs text-gray-500 pb-1 pointer-events-none">

                    {description.replace(/^(.{1,157})((\W\w.{1,})|$)/, (_, a, b) => `${a[0].toUpperCase() + a.slice(1)} ${b && '...'}`)}
                </p>

                <div className=" flex justify-between items-end py-1">
                    <div className="flex items-end p-0">
                        <UserAvatar size={8} fSize="text-xs" user={user} />
                        <div>
                            <p className="ml-2 my-auto text-xs text-gray-600 pointer-events-none">
                                {author.id === currentUser.id ? 'You' : author.fullName}</p>
                            <p className="ml-2 my-auto text-xs text-gray-400 pointer-events-none">
                                {getDateDiff(dateCreated)}
                            </p>
                        </div>
                    </div>
                    <div className="mr-5">
                        <p className="text-xs flex items-center text-secondary-100 pointer-events-none">
                            <FaStar className={`mr-1 mb-1 text-yellow-400 cursor-pointer`} />
                            {overallRating.average} (
                            <span className="text-gray-500">{overallRating.count}</span>
                            )
                        </p>

                    </div>

                </div>

            </div>
        </div>

    )
}

export default Card
