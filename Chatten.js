let chattenRecords = []
const createBluegrassArtist = (name, age, recordLabel) => {
    const newBluegrassArtist = {
        name: name,
        recordLabel: recordLabel,
        age: age

    }
    
    return newBluegrassArtist
}


const createCountryArtist = (name, age, recordLabel) => {
    const newCountryArtist = {
        name: name,
        recordLabel: recordLabel
    }
    return newCountryArtist
}

export {createBluegrassArtist, createCountryArtist}

