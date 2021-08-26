import React from "react"
import { BiDownvote, BiUpvote } from "react-icons/bi"
import { FaStar } from "react-icons/fa"
import UserAvatar from "./UserAvatar"

const Review = () => {
    return (
        <div className="px-5 py-1 ">

            <div className="flex justify-between items-end mb-2">
                <div className="flex items-end p-0">
                    <UserAvatar size={8} fSize="text-xs" />
                    <div>
                        <p className="ml-2 my-auto text-xs text-gray-600 pointer-events-none">Joshua Balmonte</p>
                        <p className="ml-2 my-auto text-xs text-gray-400 pointer-events-none">2 monts ago</p>
                    </div>
                </div>
                <div className="rating flex my-3 ml-10 items-center">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-gray-400" />
                    <span className="ml-3">4</span>
                </div>
            </div>
            <p className="text-xs ml-10 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto temporibus accusantium natus fugiat asperiores amet eaque quisquam adipisci reprehenderit sunt.</p>

            <div className="ml-10 mt-3 flex items-end">
                <BiUpvote className="mr-1 mb-1 text-green-400" />
                <span className="text-sm mr-3">10</span>
                <BiDownvote className="mr-1 mb-1 text-gray-400" />
                <span className="text-sm"></span>

            </div>
        </div>
    )
}

export default Review
