import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <main className="flex justify-around h-semiScreen items-center  px-14 font-body">
            <div className="max-w-xl">
                <h1 className="text-5xl font-semibold text-secondary-200  font-header mb-7">An Exciting Quiz Website created by Joshua Balmonte</h1>
                <h2 className="text-xl text-gray-500">Answer and create quizzes to earn points and challenge other players around the world. The leaderboard awaits you!</h2>
                <Link to="/register">
                    <button
                        className="rounded-full py-2 px-3 font-header text-sm cursor-pointer uppercase tracking-wider bg-gradient-to-r hover:from-yellow-400 hover:via-red-500 hover:to-pink-500  bg-green-100  hover:text-gray-50 border-2 border-yellow-500 transition-colors ease-out duration-500 mt-7 font-bold w-48 text-primary">
                        Get started
                    </button>
                </Link>
            </div>
            <img src="/images/bg_landing.svg" alt="BG" className="bg-cover w-1/3 " />

        </main >

    )
}

export default Home
