"use strict";

window.addEventListener("DOMContentLoaded", start);

let winner = "";
let userChoice = "";
let computerChoice = "";

function start() {
  console.log("start");

  getPlayerChoice();
}

function getPlayerChoice() {
  console.log("getPlayerChoice");

  document.querySelector(".rock").addEventListener("click", chooseRock);
  document.querySelector(".paper").addEventListener("click", choosePaper);
  document.querySelector(".scissors").addEventListener("click", chooseScissors);
}

function chooseRock() {
  console.log("chooseRock");

  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");

  userChoice = "rock";
  console.log("rock");

  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");

  document.querySelector("#player1").addEventListener("animationend", revealChoice);
  //document.querySelector("#player2").addEventListener("animationend", makeRandomComputerChoice);
}

function choosePaper() {
  console.log("choosePaper");

  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");

  userChoice = "paper";
  console.log("paper");

  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");

  document.querySelector("#player1").addEventListener("animationend", revealChoice);
  //document.querySelector("#player2").addEventListener("animationend", makeRandomComputerChoice);
}

function chooseScissors() {
  console.log("chooseScissors");

  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");

  userChoice = "scissors";
  console.log("scissors");

  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");

  document.querySelector("#player1").addEventListener("animationend", revealChoice);
  //document.querySelector("#player2").addEventListener("animationend", makeRandomComputerChoice);
}

function revealChoice() {
  console.log("revealChoice");

  document.querySelector("#player1").classList.value = "";
  document.querySelector("#player1").classList.add("player");
  //console.log("shake removed");

  if (userChoice === "rock") {
    document.querySelector("#player1").classList.add("rock");
  } else if (userChoice === "paper") {
    document.querySelector("#player1").classList.add("paper");
  } else if (userChoice === "scissors") {
    document.querySelector("#player1").classList.add("scissors");
  }
  makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
  console.log("makeRandomComputerChoice");
  document.querySelector("#player2").classList.value = "";
  document.querySelector("#player2").classList.add("player");
  //console.log("shake removed");

  if (userChoice === "rock") {
    computerChoice === "paper";
    document.querySelector("#player2").classList.add("paper");
  } else if (userChoice === "paper") {
    computerChoice === "rock";
    document.querySelector("#player2").classList.add("rock");
  } else if (userChoice === "scissors") {
    computerChoice === "scissors";
    document.querySelector("#player2").classList.add("scissors");
  }

  determineWinner();
}

function determineWinner() {
  console.log("determineWinner");

  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");

  if (userChoice == "paper" || computerChoice == "rock") {
    winner = "user";
    console.log("userWins");
  } else if (userChoice == "scissors" || computerChoice == "scissors") {
    winner = "";
  } else {
    winner = "computer";
  }

  /* if (userChoice == "rock" && computerChoice == "paper" || userChoice == "rock" && computerChoice == "scissors" || userChoice == "scissors" && computerChoice == "rock") {
    winner = "computer";
  } else if (userChoice == "rock" && computerChoice == "scissors" || userChoice == "paper" && computerChoice == "rock" || userChoice == "scissors" && computerChoice == "paper") {
    winner = "user";
  } else {
    winner = "";
  } */

  /* if (userChoice == "rock" || computerChoice == "paper" && userChoice == "rock" || computerChoice == "scissors" && userChoice == "scissors" || computerChoice == "rock") {
    winner = "computer";
  } else if (userChoice == "rock" || computerChoice == "scissors" && userChoice == "paper" || computerChoice == "rock" && userChoice == "scissors" || computerChoice == "paper") {
    winner = "user";
  } else {
    winner = "";
  } */

  /* if (userChoice == "rock" || computerChoice == "paper") {
    winner = "computer";
    console.log("computerWins");
  } else if (userChoice == "rock" || computerChoice == "rock") {
    winner = "";
  } else if (userChoice == "rock" || computerChoice == "scissors") {
    winner = "user";
    console.log("userWins");
  } else if (userChoice == "paper" || computerChoice == "scissors") {
    winner = "computer";
    console.log("computerWins");
  } else if (userChoice == "paper" || computerChoice == "paper") {
    winner = "";
  } else if (userChoice == "paper" || computerChoice == "rock") {
    winner = "user";
    console.log("userWins");
  } else if (userChoice == "scissors" || computerChoice == "rock") {
    winner = "computer";
    console.log("computerWins");
  } else if (userChoice == "scissors" || computerChoice == "scissors") {
    winner = "";
  } else if (userChoice == "scissors" || computerChoice == "paper") {
    winner = "user";
    console.log("userWins");
  } */

  showResult();
}

function showResult() {
  console.log("showResult");

  if (winner === "computer") {
    showLose();
  } else if (winner === "user") {
    showWin();
  } else {
    showDraw();
  }
}

function showWin() {
  console.log("showWin");

  document.querySelector("#win").classList.remove("hidden");
}

function showLose() {
  console.log("showLose");

  document.querySelector("#lose").classList.remove("hidden");
}

function showDraw() {
  console.log("showDraw");

  document.querySelector("#draw").classList.remove("hidden");
}
