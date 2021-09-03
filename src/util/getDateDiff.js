
const dict = {
    year: 31536e6,
    month: 2628e6,
    day: 864e5,
    hour: 36e5,
    minute: 6e4
}


export function getDateDiff(dateCreated) {
    dateCreated = new Date(dateCreated).getTime()
    for (let key in dict) {
        let diff = Date.now() - dateCreated
        if (diff >= dict[key]) {
            let value = ~~(diff / dict[key])
            return `${value} ${key + (value === 1 ? '' : 's')} ago`
        }
    }

    return 'Just now'
}