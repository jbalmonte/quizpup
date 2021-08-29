class User {
    constructor(email, fullName, password, image = "", QPoints = 0, quizzes = null) {
        Object.assign(this, { email, fullName, password, image, QPoints, quizzes })
    }
}

export default User