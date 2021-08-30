
import Quiz from "../models/Quiz"
import Question from "../models/Question"
import { generateQuizID } from "../services/idGenerator"

const Quizzes = [
    new Quiz({
        id: generateQuizID(),
        title: 'Math in the Modern World',
        image: '/mountain.jpg',
        description: `In a modern world, math such as applied mathematics is not only relevant, it's crucial. Applied mathematics is the branches of mathematics that are involved in the study of the physical, biological, or sociological world. The idea of applied math is to create a group of methods that solve problems. `,
        difficulty: 'Medium',
        creator: 1,
        questions: [
            new Question({
                itemNumber: 1,
                question: 'This sequence is formed by adding the the preceeding two numbers, starting with 0 and 1.',
                choices: ['Patterns', 'Fibonacci Sequence', 'Exponential Growth Model', 'Sequence'],
                correctAnswer: 'Fibonacci Sequence'
            }),
            new Question({
                itemNumber: 2,
                question: 'To be able to solve a problem, understanding what the problem asks for is very important.',
                choices: ['Carry out the plan', 'Devise a plan', 'Review the solution', 'Understand the problem'],
                correctAnswer: 'Understand the problem'
            }),
            new Question({
                itemNumber: 3,
                question: 'Once a plan has been devised it must be carried out.',
                choices: ['Carry out the plan', 'Devise a plan', 'Review the solution', 'Understand the problem'],
                correctAnswer: 'Carry out the plan'
            }),
        ],
        dateCreated: '1/1/2021',
        overallRating: { average: 4.9, count: 125 }
    }
    )
]

export default Quizzes