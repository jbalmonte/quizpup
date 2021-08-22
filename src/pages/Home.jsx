import React from 'react'
import landing from '../images/bg_landing.svg'

const Home = () => {
    return (
        <main className="flex justify-around h-semiScreen items-center bg-green-100 px-14">
            <div className=" max-w-2xl">
                <h1 className="text-5xl font-semibold text-secondary-200  font-header mb-7">Learn and Enjoy the Top Quizzes to Climd Up to the Leaderboard!</h1>
                <h2 className="text-2xl font-body font-md text-secondary-100">Answer the quizzes to earn points and create quizzes to challenge the other players.</h2>
                <button className="button lowercase mt-7 font-bold font-header w-48 text-primary">Get started</button>
            </div>
            <img src={landing} alt="BG" className="bg-cover w-1/3 " />

        </main >
    )
}

export default Home
