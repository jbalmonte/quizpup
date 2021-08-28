import React from 'react'
import { useUserContext } from '../context/UserContext'

// @ts-ignore
const UserAvatar = ({ onClick = undefined, size = 12, fSize = "", className = "" }) => {
    const user = useUserContext().currentUser

    return (
        <div className={`h-${size} w-${size} bg-tertiary rounded-full text-center cursor-pointer text-gray-50 font-header flex items-center justify-center ${className}`} onClick={onClick}>
            {user.src ? <img src={user.src} alt={user.name} /> : <p className={fSize ?? ""}>{user.name?.slice(0, 2) ?? "Qu"}</p>}
        </div>
    )
}

export default UserAvatar
