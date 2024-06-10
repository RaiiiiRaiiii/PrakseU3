
let savedCards = localStorage.getItem("cards") || ""

function insertCard(text){
    let cards = document.getElementById("cards")

    let card = document.createElement("div")
    card.className = "card"
    cards.appendChild(card)

    let paragraph = document.createElement("p")
    paragraph.innerHTML = text
    card.appendChild(paragraph)

    let button = document.createElement("button")
    button.innerHTML = "Noņemt"
    button.className = "remove"
    button.onclick = function(){
        cards.removeChild(card)
        savedCards = savedCards.replace(text + "|||", "")
        localStorage.setItem("cards", savedCards)
    }
    card.appendChild(button)
}

document.addEventListener("DOMContentLoaded", function(){
    savedCards.split("|||").forEach(function(card){
        if(card.length > 0)
            insertCard(card)
    })
})

function addText(){
    let text = document.getElementById("txt").value
    insertCard(text)

    savedCards += text + "|||"
    localStorage.setItem("cards", savedCards)
}