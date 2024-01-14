const getObjectKeysArray = (data: any): object => {
    for (var key in data) {
        if (data.hasOwnProperty(key) && data[key] === false || data.hasOwnProperty(key) && data[key] === undefined) {
            delete data[key];
        }
    }

    return { ...Object.keys(data) }
}

export default getObjectKeysArray