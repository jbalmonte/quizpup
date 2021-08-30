
import React from 'react'
import Card from '../components/Card'
import Quizzes from '../db/Quizzes'

const QuizByCategory = ({ match: { params }, history }) => {

    return (
        <div className="category-content">
            {Quizzes.map(quiz => <Card quiz={quiz} key={quiz.id} />)
            }
        </div>
    )
}

export default QuizByCategory
