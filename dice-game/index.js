const container = document.querySelector(".dice-container");
const playBtn = document.getElementById("play");
const diceImg1 = document.getElementById("dice1");
const diceImg2 = document.getElementById("dice2");
const diceImg3 = document.getElementById("dice3");
const diceImg4 = document.getElementById("dice4");
const diceImg5 = document.getElementById("dice5");
const diceImg6 = document.getElementById("dice6");

let oldNumber = [2, 3];
let newNumber = [];
let diceImg = [diceImg1, diceImg2, diceImg3, diceImg4, diceImg5, diceImg6];

diceImg[oldNumber[0]].style.display = "block";
diceImg[oldNumber[1]].style.display = "block";

const displayNew = () => {
  // hide all the dices
  diceImg.forEach((dice) => (dice.style.display = "none"));

  //   Duplicate
  let duplicate = container.lastElementChild.classList.contains("duplicate");
  if (duplicate) {
    const lastChild = container.lastElementChild;
    container.removeChild(lastChild);
  }
  oldNumber = [...newNumber];

  if (oldNumber[0] >= 0 && oldNumber[1] >= 0 && oldNumber[0] === oldNumber[1]) {
    let clone = diceImg[oldNumber[0]].cloneNode(true);

    clone.style.display = "block";
    clone.classList.add("duplicate");

    container.appendChild(clone);
    diceImg[oldNumber[0]].style.display = "block";
  } else {
    if (oldNumber[0] != undefined) {
      diceImg[oldNumber[0]].style.display = "block";
    }
    if (oldNumber[1] != undefined) {
      diceImg[oldNumber[1]].style.display = "block";
    }
  }

  newNumber = [];
};

const play = () => {
  const randomnum1 = Math.floor(Math.random() * 6);
  const randomnum2 = Math.floor(Math.random() * 6);

  if (randomnum1 > randomnum2) {
    container.style.flexDirection = "row-reverse";
  } else {
    container.style.flexDirection = "row";
  }

  newNumber.push(randomnum1, randomnum2);

  displayNew();
  showResult(randomnum1, randomnum2);
};

const showResult = (randomnum1, randomnum2) => {
  let result = "DRAW!";

  if (randomnum1 > randomnum2) {
    result = "Player 1 Wins!";
  } else if (randomnum1 < randomnum2) {
    result = "Player 2 Wins!";
  }

  document.getElementById("result").innerHTML = result;
};

playBtn.addEventListener("click", play);
play();
