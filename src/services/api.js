import { generateQuizID } from '../utils/idGenerator'

export default function api(Collections) {
    return {
        create: (obj, setState) => {
            const item = { id: generateQuizID(), ...obj }
            setState(prev => [...prev, { ...item }])
            return item
        },
        fetchById: id => {
            return Collections.find(item => item.id === id)
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

