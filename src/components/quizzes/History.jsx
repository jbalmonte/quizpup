import React from 'react'
import { useAuth } from '../../context/AuthContext'
import Quizzes from '../../db/Quizzes'

export default function History() {
    const { currentUser } = useAuth()
    console.log(currentUser.quizHistory)
    return (
        <div className="grid grid-cols-2 gap-4">
            {
                Quizzes.filter(q => (currentUser?.quizHistory || []).includes(q.id))
            }
        </div>
    )
}
