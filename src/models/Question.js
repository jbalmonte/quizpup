class Question {
    constructor({ itemNumber, question, choices, correctAnswer }) {
        Object.assign(this, { itemNumber, question, choices, correctAnswer })
    }
}

export default Question