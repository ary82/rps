const pcontainer = document.querySelector(".player");
const pqmark = document.querySelector(".player h3");
const ccontainer = document.querySelector(".computer");
const cqmark = document.querySelector(".computer h3");
const rockbutton = document.querySelector("#rock");
const paperbutton = document.querySelector("#paper");
const scissorbutton = document.querySelector("#scissors");
let playerselection = 0;
let compselection = 0;
// pcontainer.removeChild(pqmark);
// ccontainer.removeChild(cqmark);

function getplayerselection() {
}

function getcompselection() {
  const ssarray = ["Rock", "Paper", "Scissors"];
  compselection = ssarray[Math.floor(Math.random() * 3)];
  console.log(compselection);
}

rockbutton.addEventListener("click", function (e) {
  playerselection = e.target.alt;
  console.log(playerselection);
});
paperbutton.addEventListener("click", function (e) {
  playerselection = e.target.alt;
  console.log(playerselection);
});
scissorbutton.addEventListener("click", function (e) {
  playerselection = e.target.alt;
  console.log(playerselection);
});

