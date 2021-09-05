import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { HiOutlineCollection, HiOutlineFire, HiOutlineSearch, HiOutlineStar, HiOutlineStatusOnline } from 'react-icons/hi'

function Categories({ searchText, setSearchText }) {

    const { pathname } = useLocation()

    return (
        <div className="bg-green-300 rounded-lg h-14 flex items-center justify-evenly py-1 px-1 text-lg shadow font-body text-primary font-medium">

            <NavLink to="/quizzes" exact isActive={() => ["/quizzes", "/quizzes/all"].includes(pathname)} activeClassName="active-category" className="category" >
                <HiOutlineCollection className="mr-1  text-2xl" />
                All
            </NavLink>

            <NavLink to="/quizzes/hot" exact activeClassName="active-category" className="category">
                <HiOutlineFire className="mr-1  text-2xl" />
                Hot
            </NavLink>
            <NavLink to="/quizzes/new" exact activeClassName="active-category" className="category" >
                <HiOutlineStatusOnline className="mr-1  text-2xl" />
                New
            </NavLink>
            <NavLink to="/quizzes/best" exact activeClassName="active-category" className="category" >
                <HiOutlineStar className="mr-1  text-2xl" />
                Best
            </NavLink>

            <div className="w-40 mx-3 relative font-primary ">

                <span className="absolute inset-y-0 left-0 flex items-center pl-2">

                    <button type="button">
                        <HiOutlineSearch />
                    </button>
                </span>

                <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} className="content-center text-sm pr-4 pl-10 py-2 rounded-lg focus:outline-none focus:border-green-400 w-44 bg-gray-100 focus:text-gray-600" placeholder="Search" />
            </div>
        </div>
    )
}

export default Categories
