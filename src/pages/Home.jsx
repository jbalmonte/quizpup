import React from 'react'
import { Link } from 'react-router-dom'
import landing from '../images/bg_landing.svg'

const Home = () => {


    return (
        <main className="flex justify-around h-semiScreen items-center  px-14 font-body">
            <div className="max-w-xl">
                <h1 className="text-5xl font-semibold text-secondary-200  font-header mb-7">An Exciting Quiz Website created by Joshua Balmonte</h1>
                <h2 className="text-xl text-gray-500">Answer and create quizzes to earn points and challenge the other players around the world. The leaderboard awaits you!</h2>
                <Link to="/register">
                    <button className="button lowercase mt-7 font-bold font-header w-48 text-primary">
                        Get started
                    </button>
                </Link>
            </div>
            <img src={landing} alt="BG" className="bg-cover w-1/3 " />
        </main >

    )
}

export default Home
