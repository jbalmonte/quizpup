import React from 'react'
import { NavLink } from 'react-router-dom'

const Categories = () => {
    return (
        <div className="bg-green-300 rounded-lg h-14 flex items-center justify-around mt-3 py-1 px-8 text-lg font-semibold shadow font-header text-primary">

            <NavLink to="/quizzes/" exact activeClassName="active-category" className="category">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                All
            </NavLink>

            <NavLink to="/quizzes/hot" exact activeClassName="active-category" className="category">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
                Hot
            </NavLink>
            <NavLink to="/quizzes/new" exact activeClassName="active-category" className="category">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                New
            </NavLink>
            <NavLink to="/quizzes/best" exact activeClassName="active-category" className="category">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Best
            </NavLink>

            <div className="w-40 mx-3 relative font-primary ">

                <span className="absolute inset-y-0 left-0 flex items-center pl-2">

                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </span>

                <input type="text" className="content-center text-base pr-4 pl-10 py-2 rounded-lg focus:outline-none focus:border-green-400 w-40 bg-gray-100" placeholder="Search" />
            </div>
        </div>
    )
}

export default Categories
