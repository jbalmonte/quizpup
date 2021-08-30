import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const MenuDrawer = React.forwardRef((props, ref) => {
    const history = useHistory()
    // @ts-ignore
    const { logout } = useAuth()
    const handleLogout = e => {
        //close MenuDrawer
        e.target.closest('div').classList.add('hidden')
        logout()
        history.push('/')
    }
    return (
        <div className="w-32 py-1 shadow-md z-50 text-center hidden fixed right-24 top-12 bg-gray-100 font-body text-secondary-100" ref={ref}>
            <ul >
                <li className="py-1 hover:bg-gray-400 hover:text-gray-50">
                    <Link to="/account">Account</Link>
                </li>
                <li className="py-1 hover:bg-gray-400 hover:text-gray-50 border-b border-gray-300">
                    <Link to="/settings">Settings</Link>
                </li>
                <li className="py-1 hover:bg-gray-400 hover:text-gray-50 cursor-pointer" onClick={handleLogout}>
                    Log out
                </li>
            </ul>
        </div >
    )
})

export default MenuDrawer
