import Users from '../db/Users'

class Auth {
  constructor() {
    this.authenticated = false;
    this._BG_COLORS = [
      'bg-red-500',
      'bg-red-600',
      'bg-red-700',
      'bg-pink-500',
      'bg-pink-600',
      'bg-pink-700',
      'bg-purple-500',
      'bg-purple-600',
      'bg-purple-700'
    ]
  }

  register(id, email, fullName, password, setUsers) {
    const result = { status: 200, message: null }

    // @ts-ignore
    if (Users.find(user => user.email === email)) {
      result.status = 400
      result.message = 'Email is already taken'
    }

    else {
      const bgColor = this._BG_COLORS[~~(Math.random() * 14)]
      setUsers(prev => [...prev, {
        id,
        email,
        fullName,
        password,
        QPoints: 0,
        image: "",
        bgColor
      }])
    }

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