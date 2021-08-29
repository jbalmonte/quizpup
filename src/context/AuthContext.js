// @ts-nocheck

import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import auth from '../auth'
import { setLocalStorage, getLocalStorage } from '../localStorage/index'

const AuthContext = React.createContext(0);

export function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(() => getLocalStorage('currentUser', null))
    const [isAuthenticated, setIsAuthenticated] = useState(() => getLocalStorage('isAuthenticated', false))

    const history = useHistory()

    useEffect(() => setLocalStorage('currentUser', currentUser), [currentUser])
    useEffect(() => setLocalStorage('isAuthenticated', isAuthenticated), [isAuthenticated])

    const register = async (email, fullName, password) => {
        const { status, message } = await auth.register(email, fullName, password)

        if (status === 200) history.push({ pathname: '/login', state: { message: 'Account created. Please login' } })
        else throw new Error(message)

    }

    const login = async (username, password) => {

        const { user, message } = await auth.login(username, password)

        if (user) {
            setCurrentUser(user)
            setIsAuthenticated(true)
            history.push('/quizzes')
        }
        else throw new Error(message)

    }

    const logout = () => {
        setCurrentUser(null)
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                register,
                login,
                logout,
                isAuthenticated
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}

