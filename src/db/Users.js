import User from '../models/User'
import { generateUserID } from '../services/idGenerator'


const Users = [
    new User({ id: generateUserID(), email: "joshua@gmail.com", fullName: "Joshua Balmonte", password: "123456" }),
    new User({ id: generateUserID(), email: "mathew@gmail.com", fullName: "Mathew John", password: "352" }),
    new User({ id: generateUserID(), email: "jacob@gmail.com", fullName: "Jacob Smith", password: "password", QPoints: 5000 }),
]

export default Users