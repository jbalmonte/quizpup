import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import CardSkeleton from '../components/CardSkeleton'
import Categories from '../components/Categories'
import Quizzes from '../db/Quizzes'
import api from '../services/api'

function QuizByCategory() {
    // @ts-ignore
    const { category } = useParams()
    const [loading, setLoading] = useState(true)
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
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
                            .filter(quiz => new RegExp(searchText, "i").test(`${quiz.title} ${quiz.author.fullName}`))
                            .map(quiz => <Card quiz={quiz} key={quiz.id} />)
                }
            </div>
        </>
    )
}

export default QuizByCategory
