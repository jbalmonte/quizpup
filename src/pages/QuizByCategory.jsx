import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import CardSkeleton from '../components/CardSkeleton'
import Quizzes from '../db/Quizzes'
import api from '../services/api'

function QuizByCategory({ searchText }) {
    // @ts-ignore
    const { category } = useParams()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000);
        return () => setLoading(false)
    }, [])


    return (
        <div className="category-content">
            {
                loading ?
                    [...Array((!category || category === "all" ? 50 : 25))].map((_, i) => <CardSkeleton key={i} />)
                    :
                    api(Quizzes)
                        .sortBy(category)
                        .filter(quiz => new RegExp(searchText, "i").test(`${quiz.title} ${quiz.creator.fullName}`))
                        .map(quiz => <Card quiz={quiz} key={quiz.id} />)
            }
        </div>
    )
}

export default QuizByCategory
