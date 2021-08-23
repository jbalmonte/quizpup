import React from 'react'
import { useUserContext } from '../context/UserContext'

// @ts-ignore
const UserAvatar = ({ onClick = undefined }) => {
    const user = useUserContext().currentUser

    return (
        <div className="h-12 w-12 bg-yellow-500 rounded-full text-center cursor-pointer text-gray-50 font-header" onClick={onClick}>
            {user.src ? <img src={user.src} alt={user.name} /> : <p className="pt-3">{user.name?.slice(0, 2) ?? "Qu"}</p>}
        </div>
    )
}

export default UserAvatar
