import React from 'react'
import { Link } from 'react-router-dom'

const MenuDrawer = React.forwardRef((props, ref) => {
    return (
        <div className="w-32 py-1 z-20 rounded rounded-tr-none shadow-md text-center hidden absolute right-28 top-8 bg-gray-100 font-body text-secondary-100" ref={ref}>
            <ul >
                <li className="py-1 hover:bg-gray-400 hover:text-gray-50">
                    <Link to="/account">Account</Link>
                </li>
                <li className="py-1 hover:bg-gray-400 hover:text-gray-50 border-b border-gray-300">
                    <Link to="/settings">Settings</Link>
                </li>
                <li className="py-1 my-1 hover:bg-gray-400 hover:text-gray-50 ">
                    <Link to="/logout">Log out</Link>
                </li>
            </ul>
        </div >
    )
})

export default MenuDrawer
