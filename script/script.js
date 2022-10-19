document.addEventListener("DOMContentLoaded", ()=>{

// crônometro
    let seconds = 0;

    setInterval(() => {
        seconds++;
        document.getElementById('time').innerHTML = seconds;
      }, 1000);


    const grid = document.querySelector(".grid");
    const cards = [{
        name: "1",
        img: "../img/bobrossparrot.gif"
    },
    {
        name: "2",
        img: "../img/explodyparrot.gif"
    },
    {
        name: "3",
        img: "../img/fiestaparrot.gif"
    },
    {
        name: "4",
        img: "../img/metalparrot.gif"
    },
    {
        name: "5",
        img: "../img/revertitparrot.gif"
    },
    {
        name: "6",
        img: "../img/tripletsparrot.gif"
    },
    {
        name: "7",
        img: "../img/unicornparrot.gif"
    },
    {
        name: "8",
        img: "../img/bobrossparrot.gif"
    },
    {
        name: "9",
        img: "../img/explodyparrot.gif"
    },
    {
        name: "10",
        img: "../img/fiestaparrot.gif"
    },
    {
        name: "11",
        img: "../img/metalparrot.gif"
    },
    {
        name: "12",
        img: "../img/revertitparrot.gif"
    },
    {
        name: "13",
        img: "../img/tripletsparrot.gif"
    },
    {
        name: "14",
        img: "../img/unicornparrot.gif"
    },
]

//aleatoriedade das cartas
cards.sort(() => 0.5 - Math.random())

let cardChosen = [];
let cardChosenId = [];

    function createTable(){
        for(let i = 0; i < 14; i++){
            let frame = document.createElement("div")
            frame.className = "frame"
            let card = document.createElement("img")
            card.setAttribute("src", "../img/front.png")
            card.setAttribute("data-id", i)
            card.addEventListener("click", flip)
            frame.appendChild(card)
            grid.appendChild(frame)
        }

    }

    function flip(){
        let cardId = this.getAttribute("data-id")
        cardChosen.push(cards[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute("src", cards[cardId].img)
    }

    createTable()
}
)




