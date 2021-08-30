class Quiz {
    constructor({ id, title, image, description, difficulty, questions, creator, dateCreated, overallRating = null, reviews = null }) {
        Object.assign(this, { id, title, image, description, difficulty, questions, creator, dateCreated, overallRating, reviews })
    }
}

export default Quiz