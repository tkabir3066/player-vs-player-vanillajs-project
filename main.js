// selection
const formElm = document.querySelector("form");
const inputElm = document.querySelector("#luck-input");
const winnerElm = document.querySelector(".winner");
const winningScoreElm = document.querySelector(".lucky-number span");
const p1ScoreElm = document.querySelector(".p1");
const p2ScoreElm = document.querySelector(".p2");
const p1ButtonElm = document.querySelector(".p1Btn");
const p2ButtonElm = document.querySelector(".p2Btn");
const resetBtnElm = document.querySelector("#resetBtn");
console.log(inputElm);

// validation function

function validateInput(inputVal) {
  // NaN !== Nan results true if the value is not real number
  if (!inputVal || inputVal !== inputVal) {
    alert("please fill the input or provide a valid number ");
    return;
  }
}

// handling submit part

formElm.addEventListener("submit", (e) => {
  // preventing browser reload
  e.preventDefault();

  //getting the input value
  const inputVal = Number(inputElm.value);

  // validation check
  validateInput(inputVal);

  // reset the input

  inputElm.value = "";
  console.log(inputVal);
});
