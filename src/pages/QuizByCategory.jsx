import React from 'react'
import Card from '../components/Card'

const QuizByCategory = ({ match: { params }, history }) => {

    return (
        <div className="category-content">
            <Card difficulty="Easy" />
            <Card difficulty="Medium" />
            <Card difficulty="Hard" />
            <Card difficulty="Hard" />
            <Card difficulty="Medium" />
            <Card difficulty="Easy" />
            <Card difficulty="Hard" />
            <Card difficulty="Hard" />
            <Card difficulty="Medium" />
            <Card difficulty="Easy" />
            <Card difficulty="Hard" />
            <Card difficulty="Hard" />
            <Card difficulty="Medium" />
            <Card difficulty="Easy" />
            <Card difficulty="Hard" />
            <Card difficulty="Hard" />
            <Card difficulty="Medium" />
            <Card difficulty="Easy" />
            <Card difficulty="Hard" />
        </div>
    )
}

export default QuizByCategory
