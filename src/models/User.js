class User {
    constructor({ id, email, fullName, password, image = "", QPoints = 0, quizzes = null }) {
        Object.assign(this, { id, email, fullName, password, image, QPoints, quizzes })
    }
}

export default User