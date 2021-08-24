import React from "react"
import UserAvatar from './UserAvatar'
import mountain from '../images/mountain.jpg'
import { FaStar } from "react-icons/fa"
import { BsArrowRightShort } from 'react-icons/bs'
const Card = ({ difficulty }) => {
    const badge = {
        Easy: 'bg-yellow-500',
        Medium: 'bg-blue-600',
        Hard: 'bg-red-700'
    }
    return (
        <div className="relative overflow-hidden h-48 bg-gray-50 shadow-sm hover:shadow-md text-secondary-200 flex font-body rounded-lg text-left col-span-1 w-full">

            <img src={mountain} alt="Mountain" className="bg-cover w-1/3 overflow-hidden z-0" />

            <div className="h-full ml-5 flex flex-col justify-evenly w-2/3">
                <h1 className="text-xl pt-2 pb-1 font-medium">Math in the Modern World

                </h1>
                <p className="text-xs text-gray-500 pb-1">Lorem ipsum dolor sit amet consectetur adipisicingadipisicing adipisicing adipisicing elit. Molestiae recusandae ex ea impedi</p>

                <div className=" flex justify-between items-end py-1">
                    <div className="flex items-end p-0">
                        <UserAvatar size={8} fSize="text-xs" />
                        <div>
                            <p className="ml-2 my-auto text-xs text-gray-600">Joshua Balmonte</p>
                            <p className="ml-2 my-auto text-xs text-gray-400">2 monts ago</p>
                        </div>
                    </div>
                    <div className="mr-5">
                        <p className="text-sm flex items-center text-secondary-100">
                            <FaStar className={`mr-1 mb-1 text-yellow-400`} />4.5
                        </p>

                    </div>

                </div>
                <div className={`h-5 w-14 shadow-lg absolute left-0 z-10 top-0 flex items-center justify-center text-xs text-gray-50 ${difficulty !== 'Medium' && 'tracking-wider'} ${badge[difficulty]}`}>
                    <span className="">
                        {difficulty}
                    </span>
                </div>
            </div>




        </div>
    )
}

export default Card
