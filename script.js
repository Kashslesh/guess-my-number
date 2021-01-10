"use strict";
let randomNumber = Math.trunc(Math.random() * 100) + 1;
let scores = 10;
// console.log(randomNumber);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "Pas de numero";
  } else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "Vous gagnez!!";
    document.querySelector("body").style.backgroundColor = "#6cb636";
    document.querySelector(".messageBlock").textContent = randomNumber;
  } else if (guess < randomNumber) {
    if (scores > 1) {
      document.querySelector(".message").textContent = "Trop bas!!";
      scores--;
      document.querySelector(".scoreSpan").textContent = scores;
    } else {
      document.querySelector(".message").textContent =
        "Vous avez perdu le jeu!!";
      document.querySelector("body").style.backgroundColor = "#ff0000";
      document.querySelector(".scoreSpan").textContent = 0;
    }
  } else if (guess > randomNumber) {
    if (scores > 1) {
      document.querySelector(".message").textContent = "Trop haut!!";
      scores--;
      document.querySelector(".scoreSpan").textContent = scores;
    } else {
      document.querySelector(".message").textContent =
        "Vous avez perdu le jeu!!";
      document.querySelector("body").style.backgroundColor = "#ff0000";
      document.querySelector(".scoreSpan").textContent = 0;
    }
  }
});

document.querySelector('.btn-again').addEventListener('click', function(){
  randomNumber = Math.trunc(Math.random() * 100) + 1;
  scores = 10;
  document.querySelector("body").style.backgroundColor = "#acd3ad";
  document.querySelector(".message").textContent = "Commencez à deviner";
  document.querySelector(".messageBlock").textContent = '?';
  document.querySelector(".scoreSpan").textContent = scores;
  document.querySelector(".guess").value = '';

}) 
