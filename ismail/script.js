import * as Move from './moves.js'

// variables used so i can avoid using api data when i rly dont want to and to tell me how mant pokemon are chosen
let slot1Num = 0
let slot2Num = 0
let slot3Num = 0
let slot4Num = 0
let slot5Num = 0
let slot6Num = 0
let slot1Filled = false
let slot2Filled = false
let slot3Filled = false
let slot4Filled = false
let slot5Filled = false
let slot6Filled = false
let ChosenPokemon1 = 0
let ChosenPokemon2 = 0
let ChosenPokemon3 = 0
let ChosenPokemon4 = 0
let ChosenPokemon5 = 0
let ChosenPokemon6 = 0
//LINK  -added type
let ChosenType1 = 0
let ChosenType2 = 0
let ChosenType3 = 0
let ChosenType4 = 0
let ChosenType5 = 0
let ChosenType6 = 0
const allTypes = ['fire', 'water', 'grass',
    'electric', 'rock', 'ground',
    'ghost', 'bug', 'fighting',
    'psychic', 'flying', 'normal',
    'dark', 'steel', 'dragon',
    'ice', 'fairy', 'poison'
];
// all the query selectors so i dont have them scattered around my code
let nameSlot1 = document.querySelector("#nameSlot1")
let imgSlot1 = document.querySelector("#imgSlot1")
let nameSlot2 = document.querySelector("#nameSlot2")
let imgSlot2 = document.querySelector("#imgSlot2")
let nameSlot3 = document.querySelector("#nameSlot3")
let imgSlot3 = document.querySelector("#imgSlot3")
let nameSlot4 = document.querySelector("#nameSlot4")
let imgSlot4 = document.querySelector("#imgSlot4")
let nameSlot5 = document.querySelector("#nameSlot5")
let imgSlot5 = document.querySelector("#imgSlot5")
let nameSlot6 = document.querySelector("#nameSlot6")
let imgSlot6 = document.querySelector("#imgSlot6")
let input = document.querySelector("input")
let chosenName1 = document.querySelector("#chosenName1")
let chosenImg1 = document.querySelector("#chosenImg1")
let chosenName2 = document.querySelector("#chosenName2")
let chosenImg2 = document.querySelector("#chosenImg2")
let chosenName3 = document.querySelector("#chosenName3")
let chosenImg3 = document.querySelector("#chosenImg3")
let chosenName4 = document.querySelector("#chosenName4")
let chosenImg4 = document.querySelector("#chosenImg4")
let chosenName5 = document.querySelector("#chosenName5")
let chosenImg5 = document.querySelector("#chosenImg5")
let chosenName6 = document.querySelector("#chosenName6")
let chosenImg6 = document.querySelector("#chosenImg6")
let setter = document.querySelectorAll(".setter");
//LINK - added start
let wipe = document.querySelectorAll(".wipe")
let div1 = document.querySelector("#div1")
let div2 = document.querySelector("#div2")
let div3 = document.querySelector("#div3")
let div4 = document.querySelector("#div4")
let div5 = document.querySelector("#div5")
let div6 = document.querySelector("#div6")
//LINK - added end
document.getElementById('searchBar').addEventListener('keydown', () => searchbarBeSearched())

// function deals with what happens when the searchbar has data entered, as indicative of its name
async function searchbarBeSearched() {
    // setting all the slots where search results appear to be empty
    nameSlot1.innerText = ""
    imgSlot1.src = ""
    nameSlot2.innerText = ""
    imgSlot2.src = ""
    nameSlot3.innerText = ""
    imgSlot3.src = ""
    nameSlot4.innerText = ""
    imgSlot4.src = ""
    nameSlot5.innerText = ""
    imgSlot5.src = ""
    nameSlot6.innerText = ""
    imgSlot6.src = ""
    let counter = 0
    // looping through the first 151 pokemon because we rly dont need em all
    for (let i = 1; i < 152; i++) {
        //fetching from api stuff
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${i}`
        )
        let data = await response.json()
        //sets the name and img variables to the values from the api
        let name = await data.name
        let img = await data.sprites.front_default
        // checks if the name of the pokemon includes the string searched by the user
        if (name.includes(input.value)) {
            // checks against a counter which dictates which slot the pokemon is displayed
            if (counter === 0) {
                slot1Num = i
                //sets the name
                nameSlot1.innerText = name
                //sets the img
                imgSlot1.src = img
                counter++
            }
            // checks against a counter which dictates which slot the pokemon is displayed
            else if (counter === 1) {
                slot2Num = i
                //sets the name
                nameSlot2.innerText = name
                //sets the img
                imgSlot2.src = img
                counter++
            }
            // checks against a counter which dictates which slot the pokemon is displayed
            else if (counter === 2) {
                slot3Num = i
                //sets the name
                nameSlot3.innerText = name
                //sets the img
                imgSlot3.src = img
                counter++
            }
            // checks against a counter which dictates which slot the pokemon is displayed
            else if (counter === 3) {
                slot4Num = i
                //sets the name
                nameSlot4.innerText = name
                //sets the img
                imgSlot4.src = img
                counter++
            }
            // checks against a counter which dictates which slot the pokemon is displayed
            else if (counter === 4) {
                slot5Num = i
                //sets the name
                nameSlot5.innerText = name
                //sets the img
                imgSlot5.src = img
                counter++
            }
            // checks against a counter which dictates which slot the pokemon is displayed
            else if (counter === 5) {
                slot6Num = i
                //sets the name
                nameSlot6.innerText = name
                //sets the img
                imgSlot6.src = img
                counter++
            }
        }
    }
}

// event listeners for choosing pokemon
setter.forEach(setter => {
    setter.addEventListener('click', async (event) => {
        let supertest = 0
        if ((event.target.id === "nameSlot1") || (event.target.id === "imgSlot1")) {
            console.log('SLOT 1');
            supertest = slot1Num
        }
        else if ((event.target.id === "nameSlot2") || (event.target.id === "imgSlot2")) {
            console.log('SLOT 2');
            supertest = slot2Num
        }
        else if ((event.target.id === "nameSlot3") || (event.target.id === "imgSlot3")) {
            console.log('SLOT 3');
            supertest = slot3Num
        }
        else if ((event.target.id === "nameSlot4") || (event.target.id === "imgSlot4")) {
            console.log('SLOT 4');
            supertest = slot4Num
        }
        else if ((event.target.id === "nameSlot5") || (event.target.id === "imgSlot5")) {
            console.log('SLOT 5');
            supertest = slot5Num
        }
        else if ((event.target.id === "nameSlot6") || (event.target.id === "imgSlot6")) {
            console.log('SLOT 6');
            supertest = slot6Num
        }
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${supertest}`
        )
        const data = await response.json()

        if (slot1Filled === false) {
            chosenName1.innerText = data.name
            chosenImg1.src = data.sprites.front_default
            ChosenPokemon1 = supertest
            //LINK added -start
            ChosenType1 = data['types'][0]["type"]["name"]
            div1.classList.add(ChosenType1);
            //LINK added -end
            slot1Filled = true
            //LINK self add
            populate(data, 1)
        }
        else if (slot2Filled === false) {
            chosenName2.innerText = data.name
            chosenImg2.src = data.sprites.front_default
            ChosenPokemon2 = supertest
            ChosenType2 = data['types'][0]["type"]["name"]
            div2.classList.add(ChosenType2);
            slot2Filled = true
            populate(data, 2)
        }
        else if (slot3Filled === false) {
            chosenName3.innerText = data.name
            chosenImg3.src = data.sprites.front_default
            ChosenPokemon3 = supertest
            ChosenType3 = data['types'][0]["type"]["name"]
            div3.classList.add(ChosenType3);
            slot3Filled = true
            populate(data, 3)
        }
        else if (slot4Filled === false) {
            chosenName4.innerText = data.name
            chosenImg4.src = data.sprites.front_default
            ChosenPokemon4 = supertest
            ChosenType4 = data['types'][0]["type"]["name"]
            div4.classList.add(ChosenType4);
            slot4Filled = true
            populate(data, 4)
        }
        else if (slot5Filled === false) {
            chosenName5.innerText = data.name
            chosenImg5.src = data.sprites.front_default
            ChosenPokemon5 = supertest
            ChosenType5 = data['types'][0]["type"]["name"]
            div5.classList.add(ChosenType5);
            slot5Filled = true
            populate(data, 5)
        }
        else if (slot6Filled === false) {
            chosenName6.innerText = data.name
            chosenImg6.src = data.sprites.front_default
            ChosenPokemon6 = supertest
            ChosenType6 = data['types'][0]["type"]["name"]
            div6.classList.add(ChosenType6);
            slot6Filled = true
            populate(data, 6)
        }
    });
});
// event listener for the reset button being pressed
document.querySelector("button").addEventListener("click", () => {
    slot1Filled = false
    slot2Filled = false
    slot3Filled = false
    slot4Filled = false
    slot5Filled = false
    slot6Filled = false
    chosenName1.innerText = ""
    chosenImg1.src = ""
    chosenName2.innerText = ""
    chosenImg2.src = ""
    chosenName2.innerText = ""
    chosenImg2.src = ""
    chosenName3.innerText = ""
    chosenImg3.src = ""
    chosenName4.innerText = ""
    chosenImg4.src = ""
    chosenName5.innerText = ""
    chosenImg5.src = ""
    chosenName6.innerText = ""
    chosenImg6.src = ""
})

//LINK -NEW start
//planned but unfinished
wipe.forEach(wipe => {
    wipe.addEventListener('click', async (event) => {
        if ((event.target.id === "chosenName1") || (event.target.id === "chosenImg1")) {
            chosenImg1.src = ""
            chosenName1.innerText = ""
            div1.classList.remove(ChosenType1)
            slot1Filled = false
        }
        else if ((event.target.id === "chosenName2") || (event.target.id === "chosenImg2")) {
            chosenImg2.src = ""
            chosenName2.innerText = ""
            div2.classList.remove(ChosenType2)
            slot2Filled = false
        }
        else if ((event.target.id === "chosenName3") || (event.target.id === "chosenImg3")) {
            chosenImg3.src = ""
            chosenName3.innerText = ""
            div1.classList.remove(ChosenType3)
            slot3Filled = false
        }
        else if ((event.target.id === "chosenName4") || (event.target.id === "chosenImg4")) {
            chosenImg4.src = ""
            chosenName4.innerText = ""
            div1.classList.remove(ChosenType4)
            slot4Filled = false
        }
        else if ((event.target.id === "chosenName5") || (event.target.id === "chosenImg5")) {
            chosenImg5.src = ""
            chosenName5.innerText = ""
            div1.classList.remove(ChosenType5)
            slot5Filled = false
        }
        else if ((event.target.id === "chosenName6") || (event.target.id === "chosenImg6")) {
            chosenImg6.src = ""
            chosenName6.innerText = ""
            div1.classList.remove(ChosenType6)
            slot6Filled = false
        }
    })
})
//LINK -NEW end

//LINK SELF ADD


async function populate(params, id) {
    const chosenPlayer1 = document.getElementById('chosenPlayer1')
    const chosenPlayer2 = document.getElementById('chosenPlayer2')
    const chosenPlayer3 = document.getElementById('chosenPlayer3')
    const chosenPlayer4 = document.getElementById('chosenPlayer4')
    const chosenPlayer5 = document.getElementById('chosenPlayer5')
    const chosenPlayer6 = document.getElementById('chosenPlayer6')
    const playerImg1 = document.getElementById('playerImg1')
    const playerImg2 = document.getElementById('playerImg2')
    const playerImg3 = document.getElementById('playerImg3')
    const playerImg4 = document.getElementById('playerImg4')
    const playerImg5 = document.getElementById('playerImg5')
    const playerImg6 = document.getElementById('playerImg6')
    const hpPlayer1 = document.getElementById('hpPlayer1')
    const hpPlayer2 = document.getElementById('hpPlayer2')
    const hpPlayer3 = document.getElementById('hpPlayer3')
    const hpPlayer4 = document.getElementById('hpPlayer4')
    const hpPlayer5 = document.getElementById('hpPlayer5')
    const hpPlayer6 = document.getElementById('hpPlayer6')


    //LINK
    const hpComputer = document.getElementById('hpComputer')
    const computerPlayer = document.getElementById('computerPlayer')
    const computerImg1 = document.getElementById('computerImg1')

    const compBtnRefs = {
        computerMove0: document.getElementById('computerMove0'),
        computerMove1: document.getElementById('computerMove1'),
        computerMove2: document.getElementById('computerMove2'),
        computerMove3: document.getElementById('computerMove3'),
    }


    // COMPUTER MOVES



    // if (id === 6) {
    //     computerImg1.setAttribute('src', params.sprites.front_default)
    //     hpComputer.textContent = `1000`
    //     // const moves = Move.retrieveMovesOfSelectedPokemon(params, id)
    //     setTimeout(() => {
    //         computerPlayer.textContent = `${params.name} - ${types} type`
    //         // for (let i = 0; i < 4; i++) {
    //         //     pl6BtnRefs[`player6move${i}`].value = `${moves[`pokemon${id}Moves`][i].name}`
    //         // }
    //     }, 200)
    // }



    // let types = params.types[0].type.name

    // if (id === 1) {
    //     //first selection
    //     playerImg1.setAttribute('src', params.sprites.back_default)
    //     hpPlayer1.textContent = `200`
    //     // chosenPlayer1.textContent = `${params.name} - ${types} type`
    //     // const moves = Move.retrieveMovesOfSelectedPokemon(params, id)
    //     setTimeout(() => {
    //         console.log(moves);
    //         chosenPlayer1.textContent = `${params.name} - ${types} type`
    //         for (let i = 0; i < 4; i++) {
    //             pl1BtnRefs[`player1move${i}`].value = `${moves[`pokemon${id}Moves`][i].name}`
    //         }
    //     }, 200)

    //     // playerImg1.setAttribute('src', params.sprites.front_default)
    // }
    // // second selection
    // if (id === 2) {
    //     playerImg2.setAttribute('src', params.sprites.back_default)
    //     hpPlayer2.textContent = `200`
    //     // const moves = Move.retrieveMovesOfSelectedPokemon(params, id)
    //     setTimeout(() => {
    //         chosenPlayer2.textContent = `${params.name} - ${types} type`
    //         for (let i = 0; i < 4; i++) {
    //             pl2BtnRefs[`player2move${i}`].value = `${moves[`pokemon${id}Moves`][i].name}`
    //         }
    //     }, 1000)
    // }
    // // third selection
    // if (id === 3) {
    //     playerImg3.setAttribute('src', params.sprites.back_default)
    //     hpPlayer3.textContent = `200`
    //     // const moves = Move.retrieveMovesOfSelectedPokemon(params, id)
    //     setTimeout(() => {
    //         chosenPlayer3.textContent = `${params.name} - ${types} type`
    //         for (let i = 0; i < 4; i++) {
    //             pl3BtnRefs[`player3move${i}`].value = `${moves[`pokemon${id}Moves`][i].name}`
    //         }
    //     }, 200)
    // }
    // // fourth selection
    // if (id === 4) {
    //     playerImg4.setAttribute('src', params.sprites.back_default)
    //     hpPlayer4.textContent = `200`
    //     // const moves = Move.retrieveMovesOfSelectedPokemon(params, id)
    //     setTimeout(() => {
    //         chosenPlayer4.textContent = `${params.name} - ${types} type`
    //         for (let i = 0; i < 4; i++) {
    //             pl4BtnRefs[`player4move${i}`].value = `${moves[`pokemon${id}Moves`][i].name}`
    //         }
    //     }, 200)
    // }
    // // fifth selection
    // if (id === 5) {
    //     playerImg5.setAttribute('src', params.sprites.back_default)
    //     hpPlayer5.textContent = `200`
    //     // const moves = Move.retrieveMovesOfSelectedPokemon(params, id)
    //     setTimeout(() => {
    //         chosenPlayer5.textContent = `${params.name} - ${types} type`
    //         for (let i = 0; i < 4; i++) {
    //             pl5BtnRefs[`player5move${i}`].value = `${moves[`pokemon${id}Moves`][i].name}`
    //         }
    //     }, 200)
    // }

    // sixth selection  
    // if (id === 6) {
    //     playerImg6.setAttribute('src', params.sprites.back_default)
    // hpPlayer6.textContent = `200`

    // const moves = Move.retrieveMovesOfSelectedPokemon(params, id)
    //     setTimeout(() => {
    //         chosenPlayer6.textContent = `${params.name} - ${types} type`
    //         for (let i = 0; i < 4; i++) {
    //             pl6BtnRefs[`player6move${i}`].value = `${moves[`pokemon${id}Moves`][i].name}`
    //         }
    //     }, 200)
    // }

    // console.log(Move.retrieveMovesOfSelectedPokemon(params, id))

    // chosenPlayer2.textContent = params.name + ''
    // chosenPlayer3.textContent = params.name + ''
    // chosenPlayer4.textContent = params.name + ''
    // chosenPlayer5.textContent = params.name + 'fifth selection'
    // chosenPlayer6.textContent = params.name + 'n'
}

//LINK SELF ADD END
const pl1BtnRefs = {
    player1move0: document.getElementById('player1move0'),
    player1move1: document.getElementById('player1move1'),
    player1move2: document.getElementById('player1move2'),
    player1move3: document.getElementById('player1move3'),
}
const pl2BtnRefs = {
    player2move0: document.getElementById('player2move0'),
    player2move1: document.getElementById('player2move1'),
    player2move2: document.getElementById('player2move2'),
    player2move3: document.getElementById('player2move3'),
}
const pl3BtnRefs = {
    player3move0: document.getElementById('player3move0'),
    player3move1: document.getElementById('player3move1'),
    player3move2: document.getElementById('player3move2'),
    player3move3: document.getElementById('player3move3'),
}
const pl4BtnRefs = {
    player4move0: document.getElementById('player4move0'),
    player4move1: document.getElementById('player4move1'),
    player4move2: document.getElementById('player4move2'),
    player4move3: document.getElementById('player4move3'),
}
const pl5BtnRefs = {
    player5move0: document.getElementById('player5move0'),
    player5move1: document.getElementById('player5move1'),
    player5move2: document.getElementById('player5move2'),
    player5move3: document.getElementById('player5move3'),
}
const pl6BtnRefs = {
    player6move0: document.getElementById('player6move0'),
    player6move1: document.getElementById('player6move1'),
    player6move2: document.getElementById('player6move2'),
    player6move3: document.getElementById('player6move3'),
}


const playerButtonObject = {
    player0Ref: document.querySelector(`#playermove0`),
    player1Ref: document.querySelector(`#playermove1`),
    player2Ref: document.querySelector(`#playermove2`),
    player3Ref: document.querySelector(`#playermove3`),
    player4Ref: document.querySelector(`#playermove4`),
    player5Ref: document.querySelector(`#playermove5`),
    player6Ref: document.querySelector(`#playermove6`),
    player7Ref: document.querySelector(`#playermove7`),
    player8Ref: document.querySelector(`#playermove8`),
    player9Ref: document.querySelector(`#playermove9`),
    player10Ref: document.querySelector(`#playermove10`),
    player11Ref: document.querySelector(`#playermove11`),
    player12Ref: document.querySelector(`#playermove12`),
    player13Ref: document.querySelector(`#playermove13`),
    player14Ref: document.querySelector(`#playermove14`),
    player15Ref: document.querySelector(`#playermove15`),
    player16Ref: document.querySelector(`#playermove16`),
    player17Ref: document.querySelector(`#playermove17`),
    player18Ref: document.querySelector(`#playermove18`),
    player19Ref: document.querySelector(`#playermove19`),
    player20Ref: document.querySelector(`#playermove20`),
    player21Ref: document.querySelector(`#playermove21`),
    player22Ref: document.querySelector(`#playermove22`),
    player23Ref: document.querySelector(`#playermove23`),
}


document.getElementById('btn-show').addEventListener('click', () => getChosenCharacters())

const playersPokemon = {
    pk1hp: 200,
    pk2hp: 200,
    pk3hp: 200,
    pk4hp: 200,
    pk5hp: 200,
    pk6hp: 200,
}
const pcPokemon = {
    pk1hp: 200,
}

playerButtonObject['player0Ref'].addEventListener('click', () => battle())
playerButtonObject['player1Ref'].addEventListener('click', () => battle())
playerButtonObject['player2Ref'].addEventListener('click', () => battle())
playerButtonObject['player3Ref'].addEventListener('click', () => battle())

const getRdn = () => Math.floor(Math.random() * 20 + 1);

function battle() {
    if (Number(hpComputer.textContent) <= 0) {
        hpPlayer1.textContent = 'Winner'
        hpComputer.textContent = 'Fainted'
    } else if(Number(hpPlayer1.textContent) <= 0) {
        hpComputer.textContent = 'Winner'
        hpPlayer1.textContent = 'Fainted'
    } else {
        hpPlayer1.textContent = Number(hpPlayer1.textContent) - getRdn()
        hpComputer.textContent = Number(hpComputer.textContent) - getRdn()
    }
}

async function getChosenCharacters() {
    const characters = [
        chosenName1.textContent,
        chosenName2.textContent,
        chosenName3.textContent,
        chosenName4.textContent,
        chosenName5.textContent,
        chosenName6.textContent
    ]

    let moves;
    let inc = 0
    characters.forEach(async (v, characterIndex) => {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${v}`
        )
        const data = await response.json()
        // console.log(data);
        const playerImgRef = document.querySelector(`#playerImg${characterIndex}`)
        const playerHpRef = document.querySelector(`#hpPlayer${characterIndex}`)
        const playerNameRef = document.querySelector(`#chosenPlayer${characterIndex}`)
        playerImgRef.setAttribute('src', data.sprites.back_default)
        playerHpRef.textContent = `200`
        playerNameRef.textContent = `${data.name} - ${data.types[0].type.name} type`
        // console.log(playerImgRef);
        moves = Move.retrieveMovesOfSelectedPokemon(data, characterIndex)
        // console.log(moves);

        inc += 1
    })
    setTimeout(() => {

        playerButtonObject[`player${0}Ref`].value = `${moves[`pokemon${0}Moves`][0].name}`
        playerButtonObject[`player${1}Ref`].value = `${moves[`pokemon${0}Moves`][1].name}`
        playerButtonObject[`player${2}Ref`].value = `${moves[`pokemon${0}Moves`][2].name}`
        playerButtonObject[`player${3}Ref`].value = `${moves[`pokemon${0}Moves`][3].name}`

        playerButtonObject[`player${4}Ref`].value = `${moves[`pokemon${1}Moves`][0].name}`
        playerButtonObject[`player${5}Ref`].value = `${moves[`pokemon${1}Moves`][1].name}`
        playerButtonObject[`player${6}Ref`].value = `${moves[`pokemon${1}Moves`][2].name}`
        playerButtonObject[`player${7}Ref`].value = `${moves[`pokemon${1}Moves`][3].name}`

        playerButtonObject[`player${8}Ref`].value = `${moves[`pokemon${2}Moves`][0].name}`
        playerButtonObject[`player${9}Ref`].value = `${moves[`pokemon${2}Moves`][1].name}`
        playerButtonObject[`player${10}Ref`].value = `${moves[`pokemon${2}Moves`][2].name}`
        playerButtonObject[`player${11}Ref`].value = `${moves[`pokemon${2}Moves`][3].name}`

        playerButtonObject[`player${12}Ref`].value = `${moves[`pokemon${3}Moves`][0].name}`
        playerButtonObject[`player${13}Ref`].value = `${moves[`pokemon${3}Moves`][1].name}`
        playerButtonObject[`player${14}Ref`].value = `${moves[`pokemon${3}Moves`][2].name}`
        playerButtonObject[`player${15}Ref`].value = `${moves[`pokemon${3}Moves`][3].name}`

        playerButtonObject[`player${16}Ref`].value = `${moves[`pokemon${4}Moves`][0].name}`
        playerButtonObject[`player${17}Ref`].value = `${moves[`pokemon${4}Moves`][1].name}`
        playerButtonObject[`player${18}Ref`].value = `${moves[`pokemon${4}Moves`][2].name}`
        playerButtonObject[`player${19}Ref`].value = `${moves[`pokemon${4}Moves`][3].name}`

        playerButtonObject[`player${20}Ref`].value = `${moves[`pokemon${5}Moves`][0].name}`
        playerButtonObject[`player${21}Ref`].value = `${moves[`pokemon${5}Moves`][1].name}`
        playerButtonObject[`player${22}Ref`].value = `${moves[`pokemon${5}Moves`][2].name}`
        playerButtonObject[`player${23}Ref`].value = `${moves[`pokemon${5}Moves`][3].name}`
        genComputerPkmon()
    }, 2000)
}

const computerImg1 = document.getElementById('computerImg1')
const computerPlayer = document.getElementById('computerPlayer')
const hpComputer = document.getElementById('hpComputer')
const computerMove0 = document.getElementById('computerMove0')
const computerMove1 = document.getElementById('computerMove1')
const computerMove2 = document.getElementById('computerMove2')
const computerMove3 = document.getElementById('computerMove3')

async function genComputerPkmon() {
    const rdmNum = Math.floor(Math.random() * 150 + 1)
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${rdmNum}`
    )
    const data = await response.json()
    computerImg1.setAttribute('src', data.sprites.front_default)
    computerPlayer.textContent = `${data.name} - ${data.types[0].type.name} type`
    hpComputer.textContent = `200`

    const moves = Move.retrieveMovesOfPCPokemon(data, 0)
    setTimeout(async () => {
        const attack = await moves
        console.log(attack);
        computerMove0.value = attack[`pokemon${0}Moves`][0].name
        computerMove1.value = attack[`pokemon${0}Moves`][1].name
        computerMove2.value = attack[`pokemon${0}Moves`][2].name
        computerMove3.value = attack[`pokemon${0}Moves`][3].name
    }, 1000)

}

const addBtn = document.querySelector(".bttn2");
const footer = document.querySelector("footer");

function showFooter(show) {
    if (show) {
        footer.classList.remove("Battle-section")
    } else {
        footer.classList.add("Battle-section")
    }

}
addBtn.addEventListener("click", () => {
    showFooter(true)

})
