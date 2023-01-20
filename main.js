// DOM element selection

const formElm = document.querySelector("form");
const inputElm = document.querySelector("#luck-input");
const winnerElm = document.querySelector(".winner");
const winScoreElm = document.querySelector(".lucky-number span");
const p1ScoreElm = document.querySelector(".p1");
const p2ScoreElm = document.querySelector(".p2");
const p1BtnElm = document.querySelector(".p1Btn");
const p2BtnElm = document.querySelector(".p2Btn");
const resetBtnElm = document.querySelector("#resetBtn");

let p1Score = 0;
let p2Score = 0;

function validateInput(inputVal) {
  let isInvalid = false;
  // NaN !== NaN results true if input is not a real number
  if (inputElm.value === "" || inputVal !== inputVal) {
    alert("Pleale fill the blank input or provide a valid number");
    isInvalid = true;
  }
  return isInvalid;
}

function resetInput() {
  inputElm.value = "";
}

// handling submit part

formElm.addEventListener("submit", (e) => {
  //prevent browser reload
  e.preventDefault();

  //getting the input value
  const inputVal = Number(inputElm.value);

  // validation check
  const isInvalid = validateInput(inputVal);
  if (isInvalid) {
    return;
  }

  // setting winning score
  winScoreElm.textContent = inputVal;
  //reset the input
  resetInput();
  console.log(inputVal);
});

// handling players click

p1BtnElm.addEventListener("click", (e) => {
  p1Score++;

  // setting on p1 score
  p1ScoreElm.textContent = p1Score;
});
p2BtnElm.addEventListener("click", (e) => {
  // memory data update
  p2Score++;

  // DOM  update
  // setting on p2 score
  p2ScoreElm.textContent = p2Score;
});
