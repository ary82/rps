const pqmark = document.querySelector(".player h3");
const cqmark = document.querySelector(".computer h3");
const rockbutton = document.querySelector("#rock");
const paperbutton = document.querySelector("#paper");
const scissorbutton = document.querySelector("#scissors");
const playerimg = document.getElementById("playerimg");
const compimg = document.getElementById("compimg");
const footer = document.querySelector("footer");
const pscore = document.querySelector(".player h2");
const cscore = document.querySelector(".computer h2");
let playerselection = 0;
let compselection = 0;
let playerscore = 0;
let compscore = 0;

function getcompselection() {
  const ssarray = ["Rock", "Paper", "Scissors"];
  compselection = ssarray[Math.floor(Math.random() * 3)];
}

function Gameover(playerscore, compscore) {
  if (playerscore > compscore) {
  } else {
  }
}

function decide(playerselection, compselection) {
  if (playerselection == "Rock" && compselection == "Scissors") {
    footer.textContent = "Rock beats Scissors";
    pscore.textContent = `You : ${++playerscore}`;
    footer.removeAttribute("id");
    footer.setAttribute("id", "win");
  } else if (playerselection == "Paper" && compselection == "Rock") {
    footer.textContent = "Paper beats Rock";
    pscore.textContent = `You : ${++playerscore}`;
    footer.removeAttribute("id");
    footer.setAttribute("id", "win");
  } else if (playerselection == "Scissors" && compselection == "Paper") {
    footer.textContent = "Scissors beats Paper";
    pscore.textContent = `You : ${++playerscore}`;
    footer.removeAttribute("id");
    footer.setAttribute("id", "win");
  } else if (playerselection == compselection) {
    footer.textContent = "Draw";
    footer.removeAttribute("id");
    footer.setAttribute("id", "draw");
  } else {
    footer.textContent = `${compselection} beats ${playerselection}`;
    cscore.textContent = `Computer : ${++compscore}`;
    footer.removeAttribute("id");
    footer.setAttribute("id", "loss");
  }
  if ((playerscore >= 5) || (compscore >= 5)) {
    console.log("Game over");
    console.log(playerscore);
    console.log(compscore);
    Gameover(playerscore, compscore);
  }
}

rockbutton.addEventListener("click", function (e) {
  playerselection = e.target.alt;
  getcompselection();
  pqmark.remove();
  cqmark.remove();
  playerimg.style = "default";
  playerimg.src = "assets/sgvs/Rock.svg";
  compimg.style = "default";
  compimg.src = `assets/sgvs/${compselection}.svg`;
  decide(playerselection, compselection);
});
paperbutton.addEventListener("click", function (e) {
  playerselection = e.target.alt;
  getcompselection();
  pqmark.remove();
  cqmark.remove();
  playerimg.style = "default";
  playerimg.src = "assets/sgvs/Paper.svg";
  compimg.style = "default";
  compimg.src = `assets/sgvs/${compselection}.svg`;
  decide(playerselection, compselection);
});
scissorbutton.addEventListener("click", function (e) {
  playerselection = e.target.alt;
  getcompselection();
  pqmark.remove();
  cqmark.remove();
  playerimg.style = "default";
  playerimg.src = "assets/sgvs/Scissors.svg";
  compimg.style = "default";
  compimg.src = `assets/sgvs/${compselection}.svg`;
  decide(playerselection, compselection);
});
