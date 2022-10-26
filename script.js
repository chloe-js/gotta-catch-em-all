//yoinks the names from the api to be used in searching thingy

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

async function searchbarBeSearched(){
    document.querySelector("#nameSlot1").innerText = ""
    document.querySelector("#imgSlot1").src = ""
    document.querySelector("#nameSlot2").innerText = ""
    document.querySelector("#imgSlot2").src = ""
    document.querySelector("#nameSlot3").innerText = ""
    document.querySelector("#imgSlot3").src = ""
    document.querySelector("#nameSlot4").innerText = ""
    document.querySelector("#imgSlot4").src = ""
    document.querySelector("#nameSlot5").innerText = ""
    document.querySelector("#imgSlot5").src = ""
    document.querySelector("#nameSlot6").innerText = ""
    document.querySelector("#imgSlot6").src = ""
    let counter = 0
    for (let i = 1;i<152;i++){
    //fetching from api stuff
const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${i}`
)
let data = await response.json()
//return just the name in the object
let name = await data.name
let img = await data.sprites.front_default
if(name.includes(document.querySelector("input").value)){
    if (counter === 0){
        slot1Num = i
        //sets the name
        document.querySelector("#nameSlot1").innerText = name
        //sets the img
        document.querySelector("#imgSlot1").src = img
        counter++
    }
    else if(counter ===1){
        slot2Num = i
        //sets the name
        document.querySelector("#nameSlot2").innerText = name
        //sets the img
         document.querySelector("#imgSlot2").src = img
         counter++
        }
    else if(counter ===2){
        slot3Num = i
        //sets the name
        document.querySelector("#nameSlot3").innerText = name
        //sets the img
        document.querySelector("#imgSlot3").src = img
        counter++
        }
    else if(counter ===3){
        slot4Num = i
        //sets the name
        document.querySelector("#nameSlot4").innerText = name
        //sets the img
        document.querySelector("#imgSlot4").src = img
        counter++
        }
    else if(counter ===4){
        slot5Num = i
        //sets the name
        document.querySelector("#nameSlot5").innerText = name
        //sets the img
        document.querySelector("#imgSlot5").src = img
        counter++
        }
    else if(counter ===5){
        slot6Num = i
        //sets the name
        document.querySelector("#nameSlot6").innerText = name
        //sets the img
        document.querySelector("#imgSlot6").src = img
        counter++
        }
    }
    }
}

document.querySelector("#nameSlot1").addEventListener("click",async()=>{
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${slot1Num}`
    )
    const data = await response.json()

    if (slot1Filled === false){
        document.querySelector("#chosenName1").innerText = data.name
        document.querySelector("#chosenImg1").src = data.sprites.front_default
    slot1Filled = true
    }
    else if(slot2Filled === false){
        document.querySelector("#chosenName2").innerText = data.name
        document.querySelector("#chosenImg2").src = data.sprites.front_default
        slot2Filled = true
    }
    else if(slot3Filled === false){
        document.querySelector("#chosenName3").innerText = data.name
        document.querySelector("#chosenImg3").src = data.sprites.front_default
        slot3Filled = true
    }
    else if(slot4Filled === false){
        document.querySelector("#chosenName4").innerText = data.name
        document.querySelector("#chosenImg4").src = data.sprites.front_default
        slot4Filled = true
    }
    else if(slot5Filled === false){
        document.querySelector("#chosenName5").innerText = data.name
        document.querySelector("#chosenImg5").src = data.sprites.front_default
        slot5Filled = true
    }
    else if(slot6Filled === false){
        document.querySelector("#chosenName6").innerText = data.name
        document.querySelector("#chosenImg6").src = data.sprites.front_default
        slot6Filled = true
    }


})
document.querySelector("#imgSlot1").addEventListener("click",async()=>{
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${slot1Num}`
    )
    const data = await response.json()

    if (slot1Filled === false){
        document.querySelector("#chosenName1").innerText = data.name
        document.querySelector("#chosenImg1").src = data.sprites.front_default
    slot1Filled = true
    }
    else if(slot2Filled === false){
        document.querySelector("#chosenName2").innerText = data.name
        document.querySelector("#chosenImg2").src = data.sprites.front_default
        slot2Filled = true
    }
    else if(slot3Filled === false){
        document.querySelector("#chosenName3").innerText = data.name
        document.querySelector("#chosenImg3").src = data.sprites.front_default
        slot3Filled = true
    }
    else if(slot4Filled === false){
        document.querySelector("#chosenName4").innerText = data.name
        document.querySelector("#chosenImg4").src = data.sprites.front_default
        slot4Filled = true
    }
    else if(slot5Filled === false){
        document.querySelector("#chosenName5").innerText = data.name
        document.querySelector("#chosenImg5").src = data.sprites.front_default
        slot5Filled = true
    }
    else if(slot6Filled === false){
        document.querySelector("#chosenName6").innerText = data.name
        document.querySelector("#chosenImg6").src = data.sprites.front_default
        slot6Filled = true
    }


})


document.querySelector("#nameSlot2").addEventListener("click",async()=>{
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${slot2Num}`
    )
    const data = await response.json()

    if (slot1Filled === false){
        document.querySelector("#chosenName1").innerText = data.name
        document.querySelector("#chosenImg1").src = data.sprites.front_default
    slot1Filled = true
    }
    else if(slot2Filled === false){
        document.querySelector("#chosenName2").innerText = data.name
        document.querySelector("#chosenImg2").src = data.sprites.front_default
        slot2Filled = true
    }
    else if(slot3Filled === false){
        document.querySelector("#chosenName3").innerText = data.name
        document.querySelector("#chosenImg3").src = data.sprites.front_default
        slot3Filled = true
    }
    else if(slot4Filled === false){
        document.querySelector("#chosenName4").innerText = data.name
        document.querySelector("#chosenImg4").src = data.sprites.front_default
        slot4Filled = true
    }
    else if(slot5Filled === false){
        document.querySelector("#chosenName5").innerText = data.name
        document.querySelector("#chosenImg5").src = data.sprites.front_default
        slot5Filled = true
    }
    else if(slot6Filled === false){
        document.querySelector("#chosenName6").innerText = data.name
        document.querySelector("#chosenImg6").src = data.sprites.front_default
        slot6Filled = true
    }
})
document.querySelector("#imgSlot2").addEventListener("click",async()=>{
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${slot2Num}`
    )
    const data = await response.json()

    if (slot1Filled === false){
        document.querySelector("#chosenName1").innerText = data.name
        document.querySelector("#chosenImg1").src = data.sprites.front_default
    slot1Filled = true
    }
    else if(slot2Filled === false){
        document.querySelector("#chosenName2").innerText = data.name
        document.querySelector("#chosenImg2").src = data.sprites.front_default
        slot2Filled = true
    }
    else if(slot3Filled === false){
        document.querySelector("#chosenName3").innerText = data.name
        document.querySelector("#chosenImg3").src = data.sprites.front_default
        slot3Filled = true
    }
    else if(slot4Filled === false){
        document.querySelector("#chosenName4").innerText = data.name
        document.querySelector("#chosenImg4").src = data.sprites.front_default
        slot4Filled = true
    }
    else if(slot5Filled === false){
        document.querySelector("#chosenName5").innerText = data.name
        document.querySelector("#chosenImg5").src = data.sprites.front_default
        slot5Filled = true
    }
    else if(slot6Filled === false){
        document.querySelector("#chosenName6").innerText = data.name
        document.querySelector("#chosenImg6").src = data.sprites.front_default
        slot6Filled = true
    }
})


document.querySelector("#nameSlot3").addEventListener("click",async()=>{
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${slot3Num}`
    )
    const data = await response.json()

    if (slot1Filled === false){
        document.querySelector("#chosenName1").innerText = data.name
        document.querySelector("#chosenImg1").src = data.sprites.front_default
    slot1Filled = true
    }
    else if(slot2Filled === false){
        document.querySelector("#chosenName2").innerText = data.name
        document.querySelector("#chosenImg2").src = data.sprites.front_default
        slot2Filled = true
    }
    else if(slot3Filled === false){
        document.querySelector("#chosenName3").innerText = data.name
        document.querySelector("#chosenImg3").src = data.sprites.front_default
        slot3Filled = true
    }
    else if(slot4Filled === false){
        document.querySelector("#chosenName4").innerText = data.name
        document.querySelector("#chosenImg4").src = data.sprites.front_default
        slot4Filled = true
    }
    else if(slot5Filled === false){
        document.querySelector("#chosenName5").innerText = data.name
        document.querySelector("#chosenImg5").src = data.sprites.front_default
        slot5Filled = true
    }
    else if(slot6Filled === false){
        document.querySelector("#chosenName6").innerText = data.name
        document.querySelector("#chosenImg6").src = data.sprites.front_default
        slot6Filled = true
    }
})
document.querySelector("#imgSlot3").addEventListener("click",async()=>{
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${slot3Num}`
    )
    const data = await response.json()

    if (slot1Filled === false){
        document.querySelector("#chosenName1").innerText = data.name
        document.querySelector("#chosenImg1").src = data.sprites.front_default
    slot1Filled = true
    }
    else if(slot2Filled === false){
        document.querySelector("#chosenName2").innerText = data.name
        document.querySelector("#chosenImg2").src = data.sprites.front_default
        slot2Filled = true
    }
    else if(slot3Filled === false){
        document.querySelector("#chosenName3").innerText = data.name
        document.querySelector("#chosenImg3").src = data.sprites.front_default
        slot3Filled = true
    }
    else if(slot4Filled === false){
        document.querySelector("#chosenName4").innerText = data.name
        document.querySelector("#chosenImg4").src = data.sprites.front_default
        slot4Filled = true
    }
    else if(slot5Filled === false){
        document.querySelector("#chosenName5").innerText = data.name
        document.querySelector("#chosenImg5").src = data.sprites.front_default
        slot5Filled = true
    }
    else if(slot6Filled === false){
        document.querySelector("#chosenName6").innerText = data.name
        document.querySelector("#chosenImg6").src = data.sprites.front_default
        slot6Filled = true
    }
})


document.querySelector("#nameSlot4").addEventListener("click",async()=>{
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${slot4Num}`
    )
    const data = await response.json()

    if (slot1Filled === false){
        document.querySelector("#chosenName1").innerText = data.name
        document.querySelector("#chosenImg1").src = data.sprites.front_default
    slot1Filled = true
    }
    else if(slot2Filled === false){
        document.querySelector("#chosenName2").innerText = data.name
        document.querySelector("#chosenImg2").src = data.sprites.front_default
        slot2Filled = true
    }
    else if(slot3Filled === false){
        document.querySelector("#chosenName3").innerText = data.name
        document.querySelector("#chosenImg3").src = data.sprites.front_default
        slot3Filled = true
    }
    else if(slot4Filled === false){
        document.querySelector("#chosenName4").innerText = data.name
        document.querySelector("#chosenImg4").src = data.sprites.front_default
        slot4Filled = true
    }
    else if(slot5Filled === false){
        document.querySelector("#chosenName5").innerText = data.name
        document.querySelector("#chosenImg5").src = data.sprites.front_default
        slot5Filled = true
    }
    else if(slot6Filled === false){
        document.querySelector("#chosenName6").innerText = data.name
        document.querySelector("#chosenImg6").src = data.sprites.front_default
        slot6Filled = true
    }
})
document.querySelector("#imgSlot4").addEventListener("click",async()=>{
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${slot4Num}`
    )
    const data = await response.json()

    if (slot1Filled === false){
        document.querySelector("#chosenName1").innerText = data.name
        document.querySelector("#chosenImg1").src = data.sprites.front_default
    slot1Filled = true
    }
    else if(slot2Filled === false){
        document.querySelector("#chosenName2").innerText = data.name
        document.querySelector("#chosenImg2").src = data.sprites.front_default
        slot2Filled = true
    }
    else if(slot3Filled === false){
        document.querySelector("#chosenName3").innerText = data.name
        document.querySelector("#chosenImg3").src = data.sprites.front_default
        slot3Filled = true
    }
    else if(slot4Filled === false){
        document.querySelector("#chosenName4").innerText = data.name
        document.querySelector("#chosenImg4").src = data.sprites.front_default
        slot4Filled = true
    }
    else if(slot5Filled === false){
        document.querySelector("#chosenName5").innerText = data.name
        document.querySelector("#chosenImg5").src = data.sprites.front_default
        slot5Filled = true
    }
    else if(slot6Filled === false){
        document.querySelector("#chosenName6").innerText = data.name
        document.querySelector("#chosenImg6").src = data.sprites.front_default
        slot6Filled = true
    }
})


document.querySelector("#nameSlot5").addEventListener("click",async()=>{
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${slot5Num}`
    )
    const data = await response.json()

    if (slot1Filled === false){
        document.querySelector("#chosenName1").innerText = data.name
        document.querySelector("#chosenImg1").src = data.sprites.front_default
    slot1Filled = true
    }
    else if(slot2Filled === false){
        document.querySelector("#chosenName2").innerText = data.name
        document.querySelector("#chosenImg2").src = data.sprites.front_default
        slot2Filled = true
    }
    else if(slot3Filled === false){
        document.querySelector("#chosenName3").innerText = data.name
        document.querySelector("#chosenImg3").src = data.sprites.front_default
        slot3Filled = true
    }
    else if(slot4Filled === false){
        document.querySelector("#chosenName4").innerText = data.name
        document.querySelector("#chosenImg4").src = data.sprites.front_default
        slot4Filled = true
    }
    else if(slot5Filled === false){
        document.querySelector("#chosenName5").innerText = data.name
        document.querySelector("#chosenImg5").src = data.sprites.front_default
        slot5Filled = true
    }
    else if(slot6Filled === false){
        document.querySelector("#chosenName6").innerText = data.name
        document.querySelector("#chosenImg6").src = data.sprites.front_default
        slot6Filled = true
    }
})
document.querySelector("#imgSlot5").addEventListener("click",async()=>{
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${slot5Num}`
    )
    const data = await response.json()

    if (slot1Filled === false){
        document.querySelector("#chosenName1").innerText = data.name
        document.querySelector("#chosenImg1").src = data.sprites.front_default
    slot1Filled = true
    }
    else if(slot2Filled === false){
        document.querySelector("#chosenName2").innerText = data.name
        document.querySelector("#chosenImg2").src = data.sprites.front_default
        slot2Filled = true
    }
    else if(slot3Filled === false){
        document.querySelector("#chosenName3").innerText = data.name
        document.querySelector("#chosenImg3").src = data.sprites.front_default
        slot3Filled = true
    }
    else if(slot4Filled === false){
        document.querySelector("#chosenName4").innerText = data.name
        document.querySelector("#chosenImg4").src = data.sprites.front_default
        slot4Filled = true
    }
    else if(slot5Filled === false){
        document.querySelector("#chosenName5").innerText = data.name
        document.querySelector("#chosenImg5").src = data.sprites.front_default
        slot5Filled = true
    }
    else if(slot6Filled === false){
        document.querySelector("#chosenName6").innerText = data.name
        document.querySelector("#chosenImg6").src = data.sprites.front_default
        slot6Filled = true
    }
})


document.querySelector("#nameSlot6").addEventListener("click",async()=>{
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${slot6Num}`
    )
    const data = await response.json()

    if (slot1Filled === false){
        document.querySelector("#chosenName1").innerText = data.name
        document.querySelector("#chosenImg1").src = data.sprites.front_default
    slot1Filled = true
    }
    else if(slot2Filled === false){
        document.querySelector("#chosenName2").innerText = data.name
        document.querySelector("#chosenImg2").src = data.sprites.front_default
        slot2Filled = true
    }
    else if(slot3Filled === false){
        document.querySelector("#chosenName3").innerText = data.name
        document.querySelector("#chosenImg3").src = data.sprites.front_default
        slot3Filled = true
    }
    else if(slot4Filled === false){
        document.querySelector("#chosenName4").innerText = data.name
        document.querySelector("#chosenImg4").src = data.sprites.front_default
        slot4Filled = true
    }
    else if(slot5Filled === false){
        document.querySelector("#chosenName5").innerText = data.name
        document.querySelector("#chosenImg5").src = data.sprites.front_default
        slot5Filled = true
    }
    else if(slot6Filled === false){
        document.querySelector("#chosenName6").innerText = data.name
        document.querySelector("#chosenImg6").src = data.sprites.front_default
        slot6Filled = true
    }
})
document.querySelector("#imgSlot6").addEventListener("click",async()=>{
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${slot6Num}`
    )
    const data = await response.json()

    if (slot1Filled === false){
        document.querySelector("#chosenName1").innerText = data.name
        document.querySelector("#chosenImg1").src = data.sprites.front_default
    slot1Filled = true
    }
    else if(slot2Filled === false){
        document.querySelector("#chosenName2").innerText = data.name
        document.querySelector("#chosenImg2").src = data.sprites.front_default
        slot2Filled = true
    }
    else if(slot3Filled === false){
        document.querySelector("#chosenName3").innerText = data.name
        document.querySelector("#chosenImg3").src = data.sprites.front_default
        slot3Filled = true
    }
    else if(slot4Filled === false){
        document.querySelector("#chosenName4").innerText = data.name
        document.querySelector("#chosenImg4").src = data.sprites.front_default
        slot4Filled = true
    }
    else if(slot5Filled === false){
        document.querySelector("#chosenName5").innerText = data.name
        document.querySelector("#chosenImg5").src = data.sprites.front_default
        slot5Filled = true
    }
    else if(slot6Filled === false){
        document.querySelector("#chosenName6").innerText = data.name
        document.querySelector("#chosenImg6").src = data.sprites.front_default
        slot6Filled = true
    }
})

document.querySelector("button").addEventListener("click",()=>{
slot1Filled = false
slot2Filled = false
slot3Filled = false
slot4Filled = false
slot5Filled = false
slot6Filled = false
document.querySelector("#chosenName1").innerText = ""
document.querySelector("#chosenImg1").src = ""
document.querySelector("#chosenName2").innerText = ""
document.querySelector("#chosenImg2").src = ""
document.querySelector("#chosenName2").innerText = ""
document.querySelector("#chosenImg2").src = ""
document.querySelector("#chosenName3").innerText = ""
document.querySelector("#chosenImg3").src = ""
document.querySelector("#chosenName4").innerText = ""
document.querySelector("#chosenImg4").src = ""
document.querySelector("#chosenName5").innerText = ""
document.querySelector("#chosenImg5").src = ""
document.querySelector("#chosenName6").innerText = ""
document.querySelector("#chosenImg6").src = ""
})

// // grabs the button and opens a event listener for da clickety clack
// document.querySelector("button").addEventListener("click",async()=>{
//     // const response = await fetch(
//     //     `https://pokeapi.co/api/v2/pokemon/${document.querySelector("input").value}`
//     // )
//     // const data = await response.json()
//     // sets the name
//     document.querySelector("h2").innerText = data.name
//     // sets the image
//     document.querySelector("img").src = data.sprites.front_default
// })









