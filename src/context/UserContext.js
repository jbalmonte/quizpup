import React, { useContext, useState } from 'react'
import auth from '../auth'

// @ts-ignore
const UserContext = React.createContext();

function UserContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState({})

    const login = async (username, password) => {
        const user = await auth.login(username, password)
        if (user) setCurrentUser(user)
        console.log("INSIDE CONTEXT", user);
    }

    const value = {
        currentUser,
        login
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext() {
    return useContext(UserContext)
}

export default UserContextProvider
