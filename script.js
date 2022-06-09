"use strict";

// Pop Up Close

const closeBtn = document.querySelector("#close");

const popUp = document.querySelector(".popup");

closeBtn.addEventListener("click", closePopup);

function closePopup() {
  popUp.style.visibility = "hidden";
}

// Instruction Btn

const insBtn = document.querySelector(".ins-btn");

insBtn.addEventListener("click", ins);

function ins() {
  const vis = (popUp.style.visibility = "hidden");

  if (vis) {
    popUp.style.visibility = "visible";
  }
}
