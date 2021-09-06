
export default function UserAvatar({ onClick = undefined, size = 12, fSize = "", className = "", user }) {

    return (
        <div className={`h-${size} w-${size} overflow-hidden ${user?.bgColor} rounded-full text-center cursor-pointer text-gray-50 font-header flex items-center justify-center ${className}`} onClick={onClick}>
            {user && user.image ? <img src={user.image} alt={user.fullName} /> : <p className={fSize ?? ""}>{user?.fullName?.slice(0, 2) ?? "Qu"}</p>}
        </div>
    )
}

