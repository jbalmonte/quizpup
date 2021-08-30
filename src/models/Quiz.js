class Quiz {
    constructor({ id, title, image, description, difficulty, questions, creator, dateCreated, estimatedTime, overallRating = null, reviews = null }) {
        Object.assign(this, { id, title, image, description, difficulty, questions, creator, dateCreated, estimatedTime, overallRating, reviews })
    }
}

export default Quiz