// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Card'
import CardSkeleton from '../CardSkeleton'
import Categories from '../Categories'
import api from '../../services/api'
import { useAuth } from '../../context/AuthContext'

function QuizByCategory() {
    const { category } = useParams()
    const { currentUser, Quizzes } = useAuth()
    const [loading, setLoading] = useState(true)
    const [searchText, setSearchText] = useState('')
    const quizHistoryIDs = (currentUser?.quizHistory || []).map(q => +q.id)


    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500);
        return () => setLoading(false)
    }, [])

    return (
        <>
            <Categories searchText={searchText} setSearchText={setSearchText} />
            <div className="category-content">
                {
                    loading ?
                        [...Array((!category || category === "all" ? 100 : 25))].map((_, i) => <CardSkeleton key={i} />)
                        :
                        api(Quizzes)
                            .sortBy(category)
                            .filter(quiz => !quizHistoryIDs.includes(+quiz.id) &&
                                new RegExp(searchText, "i").test(`${quiz.title} ${quiz.author.fullName} ${quiz.difficulty}`))
                            .map(quiz => <Card quiz={quiz} key={quiz.id} />)
                }
            </div>
        </>
    )
}

export default QuizByCategory
