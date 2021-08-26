import React from "react"
import UserAvatar from "../components/UserAvatar"
import mountain from '../images/mountain.jpg'
import { BsPen } from 'react-icons/bs'

const Quiz = (id) => {
    return (
        <div className="grid grid-cols-3 px-14 py-4 gap-5 text-primary">

            <div className="shadow h-full col-span-2 rounded-md bg-gray-50 p-8 font-body">
                <img src={mountain} alt="Mountain" className="h-64 mb-4 rounded-md object-cover w-full" />

                <div className="flex justify-between items-center">

                    <h1 className="text-4xl font-semibold font-header ">Math in the Modern World</h1>
                    <div className="bg-yellow-500 rounded-full px-3 py-1 text-gray-50"><span>Easy</span></div>
                </div>
                <div className="flex items-end p-0 mt-4 mb-6">
                    <UserAvatar size={10} fSize="text-sm" />
                    <div>
                        <p className="ml-2 text-sm my-auto text-gray-600 pointer-events-none">Joshua Balmonte</p>
                        <p className="ml-2 text-sm my-auto text-gray-400 pointer-events-none">2 monts ago</p>
                    </div>
                </div>

                <p className="text-secondary-100">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, omnis officia provident molestiae voluptas impedit odit repellendus temporibus ducimus cupiditate nostrum dicta fugiat accusantium! Facere quidem nulla esse aperiam vero.</p>

                <div className="text-right">
                    <button className="border border-primary hover:bg-primary hover:text-gray-50 transition-colors duration-200 ease-linear rounded-lg p-1 px-2">
                        <BsPen className="inline-flex mr-1  text-lg" />
                        <span>
                            Take Quiz
                        </span>
                    </button>
                </div>

            </div>

            <div className="shadow h-full col-span-1 rounded-md bg-green-300 p-5">
                Ratings here
            </div>

        </div >
    )
}

export default Quiz
