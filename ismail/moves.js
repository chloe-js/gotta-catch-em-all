

const randomNum = (amt) => Math.floor(Math.random() * amt)

function deliverRandomMove(amt) {
    const nums = []
    for (let i = 0; i < 4; i++) {
        let num = randomNum(amt)
        nums.push(num)
    }
    return nums
}
const moveLibs = {
    pokemon0Moves: [],
    pokemon1Moves: [],
    pokemon2Moves: [],
    pokemon3Moves: [],
    pokemon4Moves: [],
    pokemon5Moves: [],
}

export function retrieveMovesOfSelectedPokemon(pokemon, id) {
    console.log(pokemon, '-pk');
    console.log(id, '-id');
    const randomMovesArr = deliverRandomMove(pokemon.moves.length)
    console.log(randomMovesArr);
    randomMovesArr.forEach(async (v) => {
        const response = await fetch(
            pokemon.moves[v].move.url
        )
        const pkdata = await response.json()
        moveLibs[`pokemon${id}Moves`].push({ name: pkdata.name, power: pkdata.power })
    })
    return moveLibs
}





// let movesObject;

// function getValues(){
//     movesObject = retrieveMoveDataAsObject();

//     console.log(movesObject)
//     console.log(movesObject['pokemon1Moves'][0].name)
//     console.log(movesObject['pokemon1Moves'][0].power)
//     console.log(movesObject['pokemon1Moves'][1].name)
//     console.log(movesObject['pokemon1Moves'][1].power)    
//     console.log(movesObject['pokemon1Moves'][2].name)
//     console.log(movesObject['pokemon1Moves'][2].power)
//     console.log(movesObject['pokemon1Moves'][3].name)
//     console.log(movesObject['pokemon1Moves'][3].power)
// }