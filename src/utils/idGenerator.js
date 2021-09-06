const TYPES = {
    'USER': 'User',
    'QUIZ': 'Quiz',
}

function* generateID(type) {
    switch (type) {
        case TYPES.USER: {
            let i = 50
            while (1) {
                yield i += 1
            }
        }
        case TYPES.QUIZ: {
            let i = 100
            while (1) {
                yield i += 1
            }
        }
        default: throw new Error('TYPE is incorrect')
    }
}

const user = generateID('User')
const generateUserID = () => user.next().value

const quiz = generateID('Quiz')
const generateQuizID = () => quiz.next().value

export { generateUserID, generateQuizID }