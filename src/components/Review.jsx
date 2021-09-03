// @ts-nocheck
import React from "react"
import { BiDownvote, BiUpvote } from "react-icons/bi"
import { FaStar } from "react-icons/fa"
import Users from "../db/Users"
import UserAvatar from "./UserAvatar"
import api from '../services/api'
import { getDateDiff } from "../utils/getDateDiff"

function Review({ userReview, quizDateCreated, quizDateDiff }) {

    //randomizer
    const rand = n => ~~(Math.random() * n)
    const [max, duration] = quizDateDiff.split(' ')
    const d = new Date(quizDateCreated)
    const newDate = new Date()

    const dict = {
        'Just now': newDate,
        'day': d.setDate(d.getHours() + rand(24)),
        'days': d.setDate(d.getDay() + rand(max)),
        'month': d.setDate(d.getDay() + rand(30)),
        'months': d.setMonth(d.getMonth() + rand(max)),
        'year': d.setFullYear(d.getFullYear() + rand(max)),
        'years': d.setFullYear(d.getMonth() + rand(12))
    }

    const user = api(Users).fetchById(userReview.userId)
    return (
        <div className="px-5 py-1 ">

            <div className="flex justify-between items-end mb-2">
                <div className="flex items-end p-0">
                    <UserAvatar size={8} fSize="text-xs" user={user} />
                    <div>
                        <p className="ml-2 my-auto text-xs font-medium text-gray-600 pointer-events-none">{user.fullName}</p>
                        <p className="ml-2 my-auto text-xs text-gray-400 pointer-events-none">
                            {getDateDiff(new Date(dict[duration]))}</p>
                    </div>
                </div>
                <div className="rating flex my-3 ml-10 items-center">
                    {
                        [...Array(5)].map((_, i) =>
                            <FaStar key={i} className={`text-${userReview.rating >= (i + 1) ? 'yellow' : 'gray'}-400`} />)
                    }

                    <span className="ml-3">{userReview.rating}</span>
                </div>
            </div>
            <p className="text-xs ml-10 text-gray-500">{userReview.review.replace(/^./, m => m.toUpperCase())}</p>

            <div className="ml-10 mt-3 flex items-end">
                <BiUpvote className="mr-1 mb-1 text-green-400" />
                <span className="text-sm mr-3">{rand(999)}</span>
                <BiDownvote className="mr-1 mb-1 text-gray-400" />
                <span className="text-sm"></span>
            </div>
        </div>
    )
}

export default Review

