import Users from './db/Users'
import User from './models/User'

class Auth {
  constructor() {
    this.authenticated = false;
  }

  register(email, fullName, password) {
    setTimeout(() => {
      if (Users.filter(user => user.email === email)) return { status: 400, message: 'Email is already taken' }

      Users.push(new User(email, fullName, password))
      return { status: 200 }
    }, 3000);
  }

  login(email, password) {
    this.authenticated = true
    return Users.find(user => user.email === email)
  }

  logout() {
    this.authenticated = false;
  }

  isAuthenticated() {
    return this.authenticated;
  }
}


export default new Auth()