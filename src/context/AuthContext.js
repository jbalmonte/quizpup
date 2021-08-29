// @ts-nocheck
import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import auth from '../auth'

const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const history = useHistory()

    const register = async (email, fullName, password) => {
        const { status, message } = await auth.register(email, fullName, password)

        if (status === 200) history.push({ pathname: '/login', state: { message: 'Account created. Please login' } })
        else throw new Error(message)

    }

    const login = async (username, password) => {

        const { user, message } = await auth.login(username, password)
        console.log(message)
        if (user) {
            setCurrentUser(user)
            history.push('/quizzes')
        }
        else throw new Error(message)

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

