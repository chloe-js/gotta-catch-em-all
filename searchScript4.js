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
//LINK   chosen pkmn
let ChosenPokemon1 = 0
let ChosenPokemon2 = 0
let ChosenPokemon3 = 0
let ChosenPokemon4 = 0
let ChosenPokemon5 = 0
let ChosenPokemon6 = 0
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
let setter = document.querySelectorAll('.setter');
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
            supertest = slot1Num

        }
        else if ((event.target.id === "nameSlot2") || (event.target.id === "imgSlot2")) {
            supertest = slot2Num
        }
        else if ((event.target.id === "nameSlot3") || (event.target.id === "imgSlot3")) {
            supertest = slot3Num
        }
        else if ((event.target.id === "nameSlot4") || (event.target.id === "imgSlot4")) {
            supertest = slot4Num
        }
        else if ((event.target.id === "nameSlot5") || (event.target.id === "imgSlot5")) {
            supertest = slot5Num
        }
        else if ((event.target.id === "nameSlot6") || (event.target.id === "imgSlot6")) {
            supertest = slot6Num
        }
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${supertest}`
        )
        const data = await response.json()

        if (slot1Filled === false) {
            // ref a function that populates your new field
            // populate()
            console.dir(event.target);
            chosenName1.innerText = data.name
            chosenImg1.src = data.sprites.front_default
            ChosenPokemon1 = supertest
            slot1Filled = true
            populate(data, 1)
        }
        else if (slot2Filled === false) {
            chosenName2.innerText = data.name
            chosenImg2.src = data.sprites.front_default
            ChosenPokemon2 = supertest
            slot2Filled = true
            populate(data, 2)
        }
        else if (slot3Filled === false) {
            chosenName3.innerText = data.name
            chosenImg3.src = data.sprites.front_default
            ChosenPokemon3 = supertest
            slot3Filled = true
            populate(data, 3)
        }
        else if (slot4Filled === false) {
            chosenName4.innerText = data.name
            chosenImg4.src = data.sprites.front_default
            ChosenPokemon4 = supertest
            slot4Filled = true
            populate(data, 4)
        }
        else if (slot5Filled === false) {
            chosenName5.innerText = data.name
            chosenImg5.src = data.sprites.front_default
            ChosenPokemon5 = supertest
            slot5Filled = true
            populate(data, 5)
        }
        else if (slot6Filled === false) {
            chosenName6.innerText = data.name
            chosenImg6.src = data.sprites.front_default
            ChosenPokemon6 = supertest
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

    // COMPUTER MOVES

    

    // if (id === 6) {
    //     computerImg1.setAttribute('src', params.sprites.front_default)
    //     hpComputer.textContent = `health: /1000`
    //     const moves = Move.retrieveMovesOfSelectedPokemon(params, id)
    //     setTimeout(() => {
    //         computerPlayer.textContent = `${params.name} - ${types} type`
    //         // for (let i = 0; i < 4; i++) {
    //         //     pl6BtnRefs[`player6move${i}`].value = `${moves[`pokemon${id}Moves`][i].name}`
    //         // }
    //     }, 200)
    // }

        // second selection
        if (id === 2) {
            computerImg1.setAttribute('src', params.sprites.front_default)
            hpComputer.textContent = `health: /1000`
            const moves = Move.retrieveMovesOfSelectedPokemon(params, id)
            setTimeout(() => {
                computerPlayer.textContent = `${params.name} - ${types} type`
                // for (let i = 0; i < 4; i++) {
                //     pl2BtnRefs[`player2move${i}`].value = `${moves[`pokemon${id}Moves`][i].name}`
                // }
            }, 200)
        }


    /////PLAYER MOVES

    let types = params.types[0].type.name

    if (id === 1) {
        //first selection
        playerImg1.setAttribute('src', params.sprites.back_default)
        hpPlayer1.textContent = `health: /200`
        // chosenPlayer1.textContent = `${params.name} - ${types} type`
        const moves = Move.retrieveMovesOfSelectedPokemon(params, id)
        setTimeout(() => {
            chosenPlayer1.textContent = `${params.name} - ${types} type`
            for (let i = 0; i < 4; i++) {
                pl1BtnRefs[`player1move${i}`].value = `${moves[`pokemon${id}Moves`][i].name}`
            }
        }, 200)

        // playerImg1.setAttribute('src', params.sprites.front_default)
    }
    // second selection
    // if (id === 2) {
    //     playerImg2.setAttribute('src', params.sprites.back_default)
    //     hpPlayer2.textContent = `health: /200`
    //     const moves = Move.retrieveMovesOfSelectedPokemon(params, id)
    //     setTimeout(() => {
    //         chosenPlayer2.textContent = `${params.name} - ${types} type`
    //         for (let i = 0; i < 4; i++) {
    //             pl2BtnRefs[`player2move${i}`].value = `${moves[`pokemon${id}Moves`][i].name}`
    //         }
    //     }, 200)
    // }
    // // third selection
    // if (id === 3) {
    //     playerImg3.setAttribute('src', params.sprites.back_default)
    //     hpPlayer3.textContent = `health: /200`
    //     const moves = Move.retrieveMovesOfSelectedPokemon(params, id)
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
    //     hpPlayer4.textContent = `health: /200`
    //     const moves = Move.retrieveMovesOfSelectedPokemon(params, id)
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
    //     hpPlayer5.textContent = `health: /200`
    //     const moves = Move.retrieveMovesOfSelectedPokemon(params, id)
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
    // hpPlayer6.textContent = `health: /200`

    //     const moves = Move.retrieveMovesOfSelectedPokemon(params, id)
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