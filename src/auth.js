import Users from './db/Users'
import User from './models/User'

class Auth {
  constructor() {
    this.authenticated = false;
  }

  register(email, fullName, password) {
    const result = { status: 200, message: null }

    // @ts-ignore
    if (Users.find(user => user.email === email)) {
      result.status = 400
      result.message = 'Email is already taken'
    }
    else Users.push(new User(email, fullName, password))

    return new Promise(resolve => setTimeout(() => resolve(result), 5000))
  }

  login(email, password) {
    let message = ""
    // @ts-ignore
    const user = Users.find(user => user.email === email && user.password === password)
    if (user) {
      this.authenticated = true
    }
    else message = "Incorrect email or password"

    return new Promise(resolve => setTimeout(() => resolve({ user, message }), 5000))
  }

  logout() {
    this.authenticated = false;
  }

  isAuthenticated() {
    return this.authenticated;
  }
}


export default new Auth()