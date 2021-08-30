// @ts-nocheck
import React from "react"
import UserAvatar from './UserAvatar'
import Users from '../db/Users'
import Mountain from '../images/mountain.jpg'
import { FaStar } from "react-icons/fa"
import { useHistory } from "react-router-dom"

const Card = ({ quiz: { id, title, description, image, difficulty, creator, overallRating, dateCreated } }) => {

    const history = useHistory()

    const user = Users.find(user => user.id === creator)
    const badge = {
        Easy: 'bg-yellow-500',
        Medium: 'bg-blue-600',
        Hard: 'bg-red-700'
    }
    return (
        <div onClick={() => history.push(`/quizzes/${id}`)} className="relative overflow-hidden h-48 bg-gray-50 shadow-sm hover:shadow-md text-secondary-200 flex font-body rounded-lg text-left col-span-1 w-full">

            {/* hard coded for now */}
            <img src={Mountain} alt="Mountain" className="bg-cover w-1/3 overflow-hidden z-0" />

            <div className="h-full ml-5 flex flex-col justify-evenly w-2/3">
                <h1 className="text-xl pt-2 pb-1 font-medium pointer-events-none">{title}</h1>
                <p className="text-xs text-gray-500 pb-1 pointer-events-none pr-3">
                    {description}
                </p>

                <div className=" flex justify-between items-end py-1">
                    <div className="flex items-end p-0">
                        <UserAvatar size={8} fSize="text-xs" user={user} />
                        <div>
                            <p className="ml-2 my-auto text-xs text-gray-600 pointer-events-none">{user.fullName}</p>
                            <p className="ml-2 my-auto text-xs text-gray-400 pointer-events-none">
                                {/* hard coded for now */}
                                2 minutes ago
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
                <div className={`pointer-events-none h-5 w-14 shadow-lg absolute left-0 z-10 top-0 flex items-center justify-center text-xs text-gray-50 ${difficulty !== 'Medium' && 'tracking-wider'} ${badge[difficulty]}`}>
                    <span className="">
                        {difficulty}
                    </span>
                </div>
            </div>




        </div>
    )
}

export default Card
