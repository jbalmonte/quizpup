class User {
    constructor(email, fullName, password, QPoints = 0, quizzes = null) {
        Object.assign(this, { _email: email, _fullName: fullName, _password: password, _QPoints: QPoints, _quizzes: quizzes })
    }

    get email() {
        return this._email
    }
    set email(email) {
        this._email = email
    }

    get fullName() {
        return this._fullName
    }

    set fullName(fullName) {
        this._fullName = fullName
    }
    get password() {
        return this._password
    }
    set password(password) {
        this._password = password
    }
    get QPoints() {
        return this._QPoints
    }
    set QPoints(QPoints) {
        this._QPoints = QPoints
    }
    get quizzes() {
        return this._quizzes
    }
    set quizzes(quizzes) {
        this._quizzes = quizzes
    }
}

export default User