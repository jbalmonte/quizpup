//@ts-nocheck
import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import MenuDrawer from './MenuDrawer'
import UserAvatar from './UserAvatar'
import auth from '../auth'

function Nav() {

    const menuDrawerRef = useRef()

    return (
        <>

            <MenuDrawer ref={menuDrawerRef} />


            <nav className="flex justify-between h-16 bg-secondary-200 text-gray-100 items-center py-6 px-12 shadow-lg">
                <div className="flex text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  -mt-1 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    <h2 className="font-logo text-2xl">Quizpup</h2>
                </div>

                <ul className="flex font-body text-right justify-items-end">

                    <li>
                        <NavLink exact to="/" activeClassName="active-nav-link" className="nav-link">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/quizzes" activeClassName="active-nav-link" className="nav-link">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Quizzes</NavLink>
                    </li>
                    <li>

                        <NavLink to="/leaderboards" activeClassName="active-nav-link" className="nav-link">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            Leaderboards</NavLink>
                    </li>

                </ul>

                {
                    auth.isAuthenticated() ?

                        <UserAvatar onClick={e => menuDrawerRef.current.classList.toggle('hidden')} name="Joshua" src="" />
                        : (
                            <div>
                                <button type="button" className="button mr-2">Log in</button>
                                <button type="button" className="button bg-yellow-500 text-gray-50">Sign up</button>
                            </div>
                        )
                }


            </nav >

        </>

    )
}

export default Nav