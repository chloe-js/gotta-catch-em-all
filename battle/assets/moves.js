const moveLibs = {
    pokemon1Moves: [],
    pokemon2Moves: [],
    pokemon3Moves: [],
    pokemon4Moves: [],
    pokemon5Moves: [],
    pokemon6Moves: [],
}


const randomNum = (amt) => Math.floor(Math.random() * amt)

function deliverRandomMove(amt) {
    const nums = []
    for (let i = 0; i < 4; i++) {
        let num = randomNum(amt)
        if (nums.includes(num) && nums.length !== 4) {
            i -= 1
            randomNum(amt)
        } else {
            nums.push(num)
        }
    }
    return nums
}


export function retrieveMovesOfSelectedPokemon(pokemon, id){
    const randomMovesArr = deliverRandomMove(pokemon.moves.length)
    randomMovesArr.forEach(async (v, i) => {
        const response = await fetch(
            pokemon.moves[v].move.url
        )
        const pkdata = await response.json()
        moveLibs[`pokemon${id}Moves`].push({name: pkdata.name, power: pkdata.power})
    })

    setTimeout(() => {
        localStorage.setItem('moves', JSON.stringify(moveLibs))
    }, 2000)
}


export function retrieveMoveDataAsObject(){
    const moves = JSON.parse(localStorage.getItem('moves'))
    return moves
}
