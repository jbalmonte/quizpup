import React from "react"
import UserAvatar from './UserAvatar'
import mountain from '../images/mountain.jpg'

const Card = ({ difficulty }) => {
    const badge = {
        Easy: 'bg-yellow-400',
        Medium: 'bg-blue-600',
        Hard: 'bg-red-700'
    }
    return (
        <div className=" overflow-hidden h-48 bg-gray-50 shadow-sm hover:shadow-md text-secondary-200 flex font-body rounded-lg text-left col-span-1 w-full">

            <img src={mountain} alt="Mountain" className="bg-cover w-1/3 overflow-hidden z-0" />

            <div className="relative h-full ml-5 flex flex-col justify-evenly w-2/3">
                <h1 className="text-xl pt-2 pb-1 font-medium">Math in the Modern World</h1>
                <p className="text-xs text-gray-500 pb-1">Lorem ipsum dolor sit amet consectetur adipisicingadipisicing adipisicing adipisicing elit. Molestiae recusandae ex ea impedi</p>

                <div className=" flex justify-between items-end py-1">
                    <div className="flex items-end p-0">
                        <UserAvatar size={8} fSize="text-xs" />
                        <div>
                            <p className="ml-2 my-auto text-xs text-gray-600">Joshua Balmonte</p>
                            <p className="ml-2 my-auto text-xs text-gray-400">2 monts ago</p>
                        </div>
                    </div>
                    <button className="rounded-lg h-6 hover:shadow px-1 mb-1 items-center text-base mr-3 text-primary border border-primary hover:bg-primary hover:text-gray-50 font-body flex transition ease-out duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-xs">
                            Take Quiz
                        </span>
                    </button>

                </div>
                <div className={`h-5 w-24 shadow-sm absolute -right-7 rounded-l z-10 top-3 transform rotate-45 flex items-center justify-center font-body text-xs ${difficulty !== 'Medium' && 'tracking-wider'} text-gray-50 ${badge[difficulty]}`}>
                    <span className="opacity-0 hover:opacity-100">
                        {difficulty}
                    </span>
                </div>
            </div>




        </div>
    )
}

export default Card
