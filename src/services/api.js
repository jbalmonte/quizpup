export default function api(Collections, Users) {
    return {
        create: (item) => {

            Collections.push(item)
        },
        fetchById: id => {
            return Collections.find(item => item.id === id)
        },

        fetchAll: () => {
            return Collections
        },

        update: (id, fields) => {
            let index = Collections.findIndex(item => item.id === id)
            Collections[index] = { ...Collections[index], ...fields }
        },
        destroy: id => {
            Collections.splice(Collections.findIndex(item => item.id === id), 1)
        },
        sortBy: type => {
            switch (type) {
                case 'all': return Collections
                case 'hot': return Collections.sort((a, b) => b.overallRating.count - a.overallRating.count).slice(0, 25)
                case 'new': return Collections.sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()).slice(0, 25)
                case 'best': return Collections.sort((a, b) => b.overallRating.average - a.overallRating.average).slice(0, 25)
                default: return Collections;
            }
        }
    }
}

