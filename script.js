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
// all the query selectors so i dont have them scattered around my code
nameSlot1 = document.querySelector("#nameSlot1")
imgSlot1 = document.querySelector("#imgSlot1")
nameSlot2 = document.querySelector("#nameSlot2")
imgSlot2 = document.querySelector("#imgSlot2")
nameSlot3 = document.querySelector("#nameSlot3")
imgSlot3 = document.querySelector("#imgSlot3")
nameSlot4 = document.querySelector("#nameSlot4")
imgSlot4 = document.querySelector("#imgSlot4")
nameSlot5 = document.querySelector("#nameSlot5")
imgSlot5 = document.querySelector("#imgSlot5")
nameSlot6 = document.querySelector("#nameSlot6")
imgSlot6 = document.querySelector("#imgSlot6")
input = document.querySelector("input")
chosenName1 = document.querySelector("#chosenName1")
chosenImg1 = document.querySelector("#chosenImg1")
chosenName2 = document.querySelector("#chosenName2")
chosenImg2 = document.querySelector("#chosenImg2")
chosenName3 = document.querySelector("#chosenName3")
chosenImg3 = document.querySelector("#chosenImg3")
chosenName4 = document.querySelector("#chosenName4")
chosenImg4 = document.querySelector("#chosenImg4")
chosenName5 = document.querySelector("#chosenName5")
chosenImg5 = document.querySelector("#chosenImg5")
chosenName6 = document.querySelector("#chosenName6")
chosenImg6 = document.querySelector("#chosenImg6")

// function deals with what happens when the searchbar has data entered, as indicative of its name
async function searchbarBeSearched(){
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
    for (let i = 1;i<152;i++){
    //fetching from api stuff
const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${i}`
)
let data = await response.json()
//sets the name and img variables to the values from the api
let name = await data.name
let img = await data.sprites.front_default
// checks if the name of the pokemon includes the string searched by the user
if(name.includes(input.value)){
    // checks against a counter which dictates which slot the pokemon is displayed
    if (counter === 0){
        slot1Num = i
        //sets the name
        nameSlot1.innerText = name
        //sets the img
        imgSlot1.src = img
        counter++
    }
    // checks against a counter which dictates which slot the pokemon is displayed
    else if(counter ===1){
        slot2Num = i
        //sets the name
        nameSlot2.innerText = name
        //sets the img
         imgSlot2.src = img
         counter++
        }
        // checks against a counter which dictates which slot the pokemon is displayed
    else if(counter ===2){
        slot3Num = i
        //sets the name
        nameSlot3.innerText = name
        //sets the img
        imgSlot3.src = img
        counter++
        }
        // checks against a counter which dictates which slot the pokemon is displayed
    else if(counter ===3){
        slot4Num = i
        //sets the name
        nameSlot4.innerText = name
        //sets the img
        imgSlot4.src = img
        counter++
        }
        // checks against a counter which dictates which slot the pokemon is displayed
    else if(counter ===4){
        slot5Num = i
        //sets the name
        nameSlot5.innerText = name
        //sets the img
        imgSlot5.src = img
        counter++
        }
        // checks against a counter which dictates which slot the pokemon is displayed
    else if(counter ===5){
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

const setter = document.querySelectorAll('.setter');

setter.forEach(setter => {
  setter.addEventListener('click',async (event)=>{
    let supertest = ""
    if ((event.target.id === "nameSlot1")||(event.target.id === "imgSlot1")){
        supertest = slot1Num
    }
    else if ((event.target.id === "nameSlot2")||(event.target.id === "imgSlot2")){
        supertest = slot2Num
    }
    else if ((event.target.id === "nameSlot3")||(event.target.id === "imgSlot3")){
        supertest = slot3Num
    }
    else if ((event.target.id === "nameSlot4")||(event.target.id === "imgSlot4")){
        supertest = slot4Num
    }
    else if ((event.target.id === "nameSlot5")||(event.target.id === "imgSlot5")){
        supertest = slot5Num
    }
    else if ((event.target.id === "nameSlot6")||(event.target.id === "imgSlot6")){
        supertest = slot6Num
    }
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${supertest}`
    )
    const data = await response.json()

    if (slot1Filled === false){
        chosenName1.innerText = data.name
        chosenImg1.src = data.sprites.front_default
    slot1Filled = true
    }
    else if(slot2Filled === false){
        chosenName2.innerText = data.name
        chosenImg2.src = data.sprites.front_default
        slot2Filled = true
    }
    else if(slot3Filled === false){
        chosenName3.innerText = data.name
        chosenImg3.src = data.sprites.front_default
        slot3Filled = true
    }
    else if(slot4Filled === false){
        chosenName4.innerText = data.name
        chosenImg4.src = data.sprites.front_default
        slot4Filled = true
    }
    else if(slot5Filled === false){
        chosenName5.innerText = data.name
        chosenImg5.src = data.sprites.front_default
        slot5Filled = true
    }
    else if(slot6Filled === false){
        chosenName6.innerText = data.name
        chosenImg6.src = data.sprites.front_default
        slot6Filled = true
    }
  });
});
// event listener for the reset button being pressed
document.querySelector("button").addEventListener("click",()=>{
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









