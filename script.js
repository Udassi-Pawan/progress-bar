"use strict";

let current_round = 1;

document.querySelector(".next").addEventListener("click", function () {
  if (current_round < 4) {
    console.log(document.querySelector(".line-" + current_round));

    document.querySelector(".line-" + current_round).classList.add("active");
    document
      .querySelector(".round-" + (current_round + 1))
      .classList.add("active");
    current_round++;
  }
  if (current_round == 4) {
    document.querySelector(".prev").style.backgroundColor = "#39b5e0";
    document.querySelector(".next").style.backgroundColor = "rgb(187, 186, 186)";
  }
});

document.querySelector(".prev").addEventListener("click", function () {
  if (current_round > 1) {
    console.log(document.querySelector(".line-" + current_round));

    document
      .querySelector(".line-" + (current_round - 1))
      .classList.remove("active");
    document
      .querySelector(".round-" + current_round)
      .classList.remove("active");
    current_round--;
  }
  if (current_round == 1) {
    document.querySelector(".prev").style.backgroundColor = "rgb(187, 186, 186)";
    document.querySelector(".next").style.backgroundColor = "#39b5e0";
  }
});

document.querySelector(".prev").addEventListener("click", function () {
  console.log("prev");
});
