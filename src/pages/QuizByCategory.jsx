import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import Quizzes from '../db/Quizzes'
import api from '../services/api'

const QuizByCategory = ({ searchText }) => {
    // @ts-ignore
    const { category } = useParams()
    return (
        <div className="category-content">
            {
                api(Quizzes)
                    .sortBy(category)
                    .filter(quiz => new RegExp(searchText, "i").test(`${quiz.title} ${quiz.creator.fullName}`))
                    .map(quiz => <Card quiz={quiz} key={quiz.id} />)
            }
        </div>
    )
}

export default QuizByCategory
