export default function api(Collections) {
    return {
        create: (col) => {

            Collections.push(col)
        },
        fetchById: id => {
            return Collections.find(col => col.id === id)
        },

        fetchAll: () => {
            return Collections
        },

        update: (id, newFields) => {
            let collection = Collections.find(col => col.id === id)
            collection = { ...newFields }
            return collection
        },
        destroy: id => {
            Collections.splice(Collections.findIndex(col => col.id === id), 1)
        }
    }
}