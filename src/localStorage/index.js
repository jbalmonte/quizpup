function setLocalStorage(key, value) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.log(e)
    }
}

function getLocalStorage(key, initialValue) {
    try {
        const value = window.localStorage.getItem(key);
        return value ? JSON.parse(value) : initialValue;
    } catch (e) {
        return initialValue;
    }
}

function removeLocalStorage(key) {
    window.localStorage.removeItem(key)
}

export { getLocalStorage, setLocalStorage, removeLocalStorage }