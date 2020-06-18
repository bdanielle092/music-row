let jumpStopRecords = []

const createFunkArtist = (name, age, recordLabel) => {
    const newFunkArtist = {
        name: name,
        recordLabel: recordLabel
    }
    return newFunkArtist
}


const createRapArtist = (name, recordLabel) => {
    const newRapArtist = {
        name: name,
        recordLabel: recordLabel
    }
    return  newRapArtist
}



export {createFunkArtist, createRapArtist}