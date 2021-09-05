import React from 'react'
import Quizzes from '../../db/Quizzes'
import Card from '../Card'
import { useAuth } from '../../context/AuthContext'

export default function MyWorks() {
    const { currentUser } = useAuth()

    return (
        <div className="grid grid-cols-2 gap-4">
            {
                Quizzes
                    .filter(q => q.author.id === currentUser.id)
                    .sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime())
                    .map(q => <Card quiz={q} key={q.id} />)
            }
        </div>
    )
}
