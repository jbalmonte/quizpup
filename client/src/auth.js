import axios from 'axios'
import users from './db/users.json'
class Auth {
  constructor() {
    this.authenticated = false;
  }

  async login(username, password) {
    try {
      //const users = await axios.get('C:\\Users\\jbalm\\Desktop\\2nd year\\Summer\\OJT2\\quizpup\\src\\db\\users.json')

      const user = users.find(v => v.username === username && v.password === password)
      if (user) this.authenticated = true;
      return user
    } catch (err) {
      console.log(err);
    }
  }

  logout() {
    this.authenticated = false;
  }

  isAuthenticated() {
    return this.authenticated;
  }
}


export default new Auth()