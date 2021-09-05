import { generateQuizID } from '../utils/idGenerator'

export default function api(Collections, Users) {
    return {
        create: (obj) => {
            const item = { id: generateQuizID(), ...obj }
            Collections.push(item)
            return item
        },
        fetchById: id => {
            return Collections.find(item => item.id === id)
        },

        fetchAll: () => {
            return Collections
        },

        update: (id, fields) => {
            const index = Collections.findIndex(item => item.id === id)
            Collections[index] = { ...Collections[index], ...fields }
            return Collections[index]
        },
        destroy: id => {
            let index = Collections.findIndex(item => item.id === id)
            Collections.splice(index, 1)
            console.log(Collections[index], index)
        },
        sortBy: type => {
            switch (type) {
                case 'hot': return Collections.sort((a, b) => b.overallRating.count - a.overallRating.count).slice(0, 25)
                case 'new': return Collections.sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()).slice(0, 25)
                case 'best': return Collections.sort((a, b) => b.overallRating.average - a.overallRating.average).slice(0, 25)
                default: return Collections;
            }
        },
    }
}

