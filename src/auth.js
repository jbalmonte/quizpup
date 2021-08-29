import axios from 'axios'

class Auth {
  constructor() {
    this.authenticated = false;
  }

  async register(email, fullName, password) {
    const user = await axios.post('/users/register', {
      email,
      fullName,
      password
    })

    console.log(user)

  }

  async login(email, password) {

  }

  logout() {
    this.authenticated = false;
  }

  isAuthenticated() {
    return this.authenticated;
  }
}


export default new Auth()