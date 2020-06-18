import {createBluegrassArtist, createCountryArtist} from "./Chatten.js"
import {createFunkArtist, createRapArtist} from  "./jumpStop.js"
import createPopArtist from "./Polar.js"


const bart =createBluegrassArtist("Bartholomew Danielson", 23, "Chatten Records")
console.log(bart)


const bruce = createCountryArtist("Bruce Atikins", 23, "Chatten Records")
console.log(bruce)

const avilee = createCountryArtist("Avilee Dallas", 19, "Chatten Records")
console.log(avilee)


const dre = createFunkArtist("Dre Funkz", 25, "JumpStop")
console.log(dre)

const dusta = createRapArtist("Dusta Grimes", 25, "JumpStop")
console.log(dusta)

const loyonce = createRapArtist("Loyonce Branis", 27, "JumpStop")
console.log(loyonce)


const jensen = createPopArtist("Jensen Brown", 20, "Polar Records")
console.log(jensen)

const austin = createPopArtist("Austin Kinkaid", 22, "Polar Records")
console.log(austin)