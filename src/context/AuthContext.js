// @ts-nocheck
import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import auth from '../services/auth'
import { generateUserID } from '../utils/idGenerator';
import { setLocalStorage, getLocalStorage } from '../utils/localStorage'

const AuthContext = React.createContext(0);

export function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(() => getLocalStorage('currentUser', null))
    const [isAuthenticated, setIsAuthenticated] = useState(() => getLocalStorage('isAuthenticated', false))

    const history = useHistory()

    useEffect(() => setLocalStorage('currentUser', currentUser), [currentUser])
    useEffect(() => setLocalStorage('isAuthenticated', isAuthenticated), [isAuthenticated])

    const register = async (email, fullName, password) => {
        const id = generateUserID()
        const { status, message } = await auth.register(id, email, fullName, password)

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
                setCurrentUser,
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

