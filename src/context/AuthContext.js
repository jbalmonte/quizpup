// @ts-nocheck
import React, { useContext, useState, useEffect } from 'react'
import auth from '../auth'

const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()


    const register = async (email, fullName, password) => {
        const { status, message } = await auth.register(email, fullName, password)
    }

    const login = async (username, password) => {

    }

    const logout = () => {

    }
    const value = {
        currentUser,
        register,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}

