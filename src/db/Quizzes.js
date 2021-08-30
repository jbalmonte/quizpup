// @ts-nocheck
import Quiz from "../models/Quiz"
import Question from "../models/Question"
import { generateQuizID } from "../services/idGenerator"

const Quizzes = [
    new Quiz({
        id: generateQuizID(),
        title: 'Math in the Modern World',
        image: '../images/mountain.jpg',
        description: 'A short quiz that will test your knowledge in the modern mathematics',
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
        dateCreated: new Date().toLocaleTimeString(),
        overallRating: { average: 4.9, count: 125 },
        estimatedTime: Math.round((this?.questions.length * 10) / 60),
    }
    ),
    new Quiz({
        id: generateQuizID(),
        title: 'Math in the Modern World',
        image: '../images/mountain.jpg',
        description: 'A short quiz that will test your knowledge in the modern mathematics',
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
        dateCreated: new Date().toLocaleTimeString(),
        overallRating: { average: 4.9, count: 125 },
        estimatedTime: Math.round((this?.questions.length * 10) / 60),
    }
    ),
    new Quiz({
        id: generateQuizID(),
        title: 'Math in the Modern World',
        image: '../images/mountain.jpg',
        description: 'A short quiz that will test your knowledge in the modern mathematics',
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
        dateCreated: new Date().toLocaleTimeString(),
        overallRating: { average: 4.9, count: 125 },
        estimatedTime: Math.round((this?.questions.length * 10) / 60),
    }
    ),
    new Quiz({
        id: generateQuizID(),
        title: 'Math in the Modern World',
        image: '../images/mountain.jpg',
        description: 'A short quiz that will test your knowledge in the modern mathematics',
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
        dateCreated: new Date().toLocaleTimeString(),
        overallRating: { average: 4.9, count: 125 },
        estimatedTime: Math.round((this?.questions.length * 10) / 60),
    }
    ),
    new Quiz({
        id: generateQuizID(),
        title: 'Math in the Modern World',
        image: '../images/mountain.jpg',
        description: 'A short quiz that will test your knowledge in the modern mathematics',
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
        dateCreated: new Date().toLocaleTimeString(),
        overallRating: { average: 4.9, count: 125 },
        estimatedTime: Math.round((this?.questions.length * 10) / 60),
    }
    ),
    new Quiz({
        id: generateQuizID(),
        title: 'Math in the Modern World',
        image: '../images/mountain.jpg',
        description: 'A short quiz that will test your knowledge in the modern mathematics',
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
        dateCreated: new Date().toLocaleTimeString(),
        overallRating: { average: 4.9, count: 125 },
        estimatedTime: Math.round((this?.questions.length * 10) / 60),
    }
    ),
]

export default Quizzes