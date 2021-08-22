import React from 'react'

// @ts-ignore
const UserAvatar = ({ name, src, onClick }) => {
    return (
        <div className="h-12 w-12 bg-yellow-500 rounded-full text-center hover:cursor-pointer" onClick={onClick}>
            {src ? <img src={src} alt={name} /> : <p className="mt-3">{name.slice(0, 2)}</p>}
        </div>
    )
}

export default UserAvatar
