export default function api(Collections) {
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
        }
    }
}
