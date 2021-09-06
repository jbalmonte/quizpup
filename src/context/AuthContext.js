/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import auth from '../services/auth'
import { generateUserID } from '../utils/idGenerator';
import { setLocalStorage, getLocalStorage } from '../utils/localStorage'

const AuthContext = React.createContext(0);

export function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(() => getLocalStorage('currentUser', null))
    const [Quizzes, setQuizzes] = useState(() => getLocalStorage('Quizzes', []))
    const [Users, setUsers] = useState(() => getLocalStorage('Users', []))
    const [Questions, setQuestions] = useState(() => getLocalStorage('Questions', []))
    const [Reviews, setReviews] = useState(() => getLocalStorage('Reviews', []))
    const [isAuthenticated, setIsAuthenticated] = useState(() => getLocalStorage('isAuthenticated', false))

    const history = useHistory()

    useEffect(() => {
        //update both currentUser and Users in our localStorage
        setLocalStorage('currentUser', currentUser)
        setUsers(prev => [...(prev || []).map(u => u.id === currentUser ? currentUser : u)])
    }, [currentUser])

    useEffect(() => setLocalStorage('isAuthenticated', isAuthenticated), [isAuthenticated])
    useEffect(() => setLocalStorage('Quizzes', Quizzes), [Quizzes])
    useEffect(() => setLocalStorage('Users', Users), [Users])
    useEffect(() => setLocalStorage('Questions', Questions), [Questions])
    useEffect(() => setLocalStorage('Reviews', Reviews), [Reviews])

    const register = async (email, fullName, password) => {
        const id = generateUserID()
        const { status, message } = await auth.register(id, email, fullName, password, setUsers)

        if (status === 200) history.push({ pathname: '/login', state: { message: 'Account created. Please login' } })
        else throw new Error(message)

    }

    const login = async (username, password) => {

        const { user, message } = await auth.login(username, password)

        if (user) {
            setCurrentUser(user)
            setIsAuthenticated(true)
            setQuizzes(await (await import('../db/Quizzes')).default)
            setUsers(await (await import('../db/Users')).default)
            setQuestions(await (await import('../db/Questions')).default)
            setReviews(await (await import('../db/Reviews')).default)
            history.push('/quizzes')
        }
        else throw new Error(message)

    }


    const logout = () => {
        setCurrentUser(null)
        setQuizzes(null)
        setUsers(null)
        setQuestions(null)
        setReviews(null)
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser, setCurrentUser,
                Quizzes, setQuizzes,
                Users, setUsers,
                Questions, setQuestions,
                Reviews, setReviews,
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

