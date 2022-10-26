//yoinks the names from the api to be used in searching thingy
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
        //sets the name
        document.querySelector("#nameSlot1").innerText = name
        //sets the img
        document.querySelector("#imgSlot1").src = img
        counter++
    }
    else if(counter ===1){
        //sets the name
        document.querySelector("#nameSlot2").innerText = name
        //sets the img
         document.querySelector("#imgSlot2").src = img
         counter++
        }
    else if(counter ===2){
        //sets the name
        document.querySelector("#nameSlot3").innerText = name
        //sets the img
        document.querySelector("#imgSlot3").src = img
        counter++
        }
    else if(counter ===3){
        //sets the name
        document.querySelector("#nameSlot4").innerText = name
        //sets the img
        document.querySelector("#imgSlot4").src = img
        counter++
        }
    else if(counter ===4){
        //sets the name
        document.querySelector("#nameSlot5").innerText = name
        //sets the img
        document.querySelector("#imgSlot5").src = img
        counter++
        }
    else if(counter ===5){
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
        `https://pokeapi.co/api/v2/pokemon/${document.querySelector("#nameSlot1").innerText}`
    )
    let data = await response.json()
    //return just the name in the object
    // sets the name
    document.querySelector("chosenName1").innerText = data.name
    // sets the image
    document.querySelector("chosenImg1").src = data.sprites.front_default
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









