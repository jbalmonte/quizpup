import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import landing from '../images/bg_landing.svg'

const Home = () => {


    return (
        <main className="flex justify-around h-semiScreen items-center bg-green-100 px-14">
            <div className="max-w-xl">
                <h1 className="text-5xl font-semibold text-secondary-200  font-header mb-7">An Entertaining Quiz Website created by Joshua Balmonte</h1>
                <h2 className="text-2xl font-body font-md text-secondary-100">Answer and create quizzes to earn points and challenge the other players around the world. The leaderboard awaits you!</h2>
                <button className="button lowercase mt-7 font-bold font-header w-48 text-primary">Get started</button>
            </div>
            <img src={landing} alt="BG" className="bg-cover w-1/3 " />
        </main >

    )
}

export default Home
