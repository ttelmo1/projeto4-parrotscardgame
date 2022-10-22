document.addEventListener("DOMContentLoaded", ()=>{
  let cardsNumber = 0, seconds = 0, rolls = 0, cardFind = 0;
  let cardChosen = [], cardChosenId = [];
  const grid = document.querySelector(".grid");
  let cards = [{
      name: "1",
      img: "../img/bobrossparrot.gif"
  },
  {
      name: "2",
      img: "../img/explodyparrot.gif"
  }
]

  function open(){
      cardsNumber = prompt("Com quantas cartas você deseja jogar?")
      if( cardsNumber < 4 || cardsNumber > 14 || cardsNumber % 2 !== 0 ) {
          open()
      }
  } 

  open()

// crônometro
  function timer(){
      setInterval(() => {
      seconds++;
      document.getElementById('time').innerHTML = seconds;
    }, 1000);
  }

  let timerStop = timer();

function addCards(count) {
  switch(count) {
    case 4:
      cards = cards.flatMap(i => [i, i])
      break
    case 6:
      cards.push({name: "3", img: "../img/fiestaparrot.gif"})
      cards = cards.flatMap(i => [i, i])
      break
    case 8:
      cards.push(
          {
              name: "3",
              img: "../img/fiestaparrot.gif"},
              {
              name: "4",
              img: "../img/metalparrot.gif"
              })
      cards = cards.flatMap(i => [i, i])
      break
    case 10:
      cards.push(
          {
              name: "3",
              img: "../img/fiestaparrot.gif"},
          {
              name: "4",
              img: "../img/metalparrot.gif"
              },
          {
              name: "5",
              img: "../img/revertitparrot.gif"
    })
      cards = cards.flatMap(i => [i, i])
      break
    case 12:
      cards.push(
          {
              name: "3",
              img: "../img/fiestaparrot.gif"},
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
    })
      cards = cards.flatMap(i => [i, i])
      break
    case 14:
      cards.push(
          {
              name: "3",
              img: "../img/fiestaparrot.gif"},
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
    })
      cards = cards.flatMap(i => [i, i])
      break
  }
}

addCards(Number(cardsNumber))

//aleatoriedade das cartas
  cards.sort(() => 0.5 - Math.random())

  function createTable(){
      for(let i = 0; i < Number(cardsNumber); i++){
          let frame = document.createElement("div")
          frame.className = "frame"
          frame.setAttribute("style", "background-image: url("+cardFront+")")
          frame.setAttribute("data-id", i)
          frame.addEventListener("click", flip)
          frame.addEventListener("click", checkClick)
          grid.appendChild(frame)
          
      }

  }

  let cardFront = "../img/front.png"

  let cardsClicked = 0;
  function checkClick() {
    cardsClicked++
  }

  function check(){
      let cardSelect = document.querySelectorAll(".frame")
      let optionOne = cardChosenId[0]
      let optionTwo = cardChosenId[1]

      if(cardChosen[0] == cardChosen[1]){
          cardFind += 2
          rolls++
      }
      else{
          cardSelect[optionOne].classList.toggle("cardBack")
          cardSelect[optionOne].setAttribute("style", "background-image: url("+cardFront+")")
          cardSelect[optionTwo].classList.toggle("cardBack")
          cardSelect[optionTwo].setAttribute("style", "background-image: url("+cardFront+")")
          rolls++
      }
      if(cardFind == cardsNumber){
          alert(`Você ganhou em ${rolls} jogadas e ${seconds} segundos!`)
          clearInterval(timerStop)
          restart()
      }

      cardChosen = []
      cardChosenId = []
      cardsClicked = 0

  }

  function restart(){
      let question = prompt("Gostaria de jogar novamente?")
      if(question == "sim"){
          clearGame()
          open()
          addCards(Number(cardsNumber))
          cards.sort(() => 0.5 - Math.random())
          createTable()
          setInterval(() => {
              document.getElementById('time').innerHTML = seconds;
            }, 1000);
      }
      else if(question == "não"){
          alert("Obrigado por jogar!")
      }   
      else{
          restart()
      }
  }

  function clearGame() {
      cards = [{
          name: "1",
          img: "../img/bobrossparrot.gif"
      },
      {
          name: "2",
          img: "../img/explodyparrot.gif"
      }
    ]
      cardsNumber = 0, seconds = 0, rolls = 0, cardFind = 0, seconds = 0;
      cardChosen = [], cardChosenId = [];            
      grid.innerHTML = ""
  }

  function flip(){
    if(cardsClicked > 1) return 
    let cardId = this.getAttribute("data-id")
    cardChosen.push(cards[cardId].name)
    cardChosenId.push(cardId)
    this.classList.toggle("cardBack")
    this.setAttribute("style", "background-image: url("+cards[cardId].img+")")
    if(cardChosen.length == 2){
        setTimeout(check , 500)
    }
  }
  createTable()
}
)