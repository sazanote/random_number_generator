const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const dice = document.getElementById("jsDiceSet");
const rollBtn = document.getElementById("jsRoll");
const copyBtn = document.getElementById("jsCopy");
const saveBtn = document.getElementById("jsSave");

const DICE_SET = dice.value; //defualt = 100

const DEFAULT_COLOR = "#2c2c2c";
const CANVAS_SIZE = 300;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

// fill white default background
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.textBaseling = "middle";
ctx.textAlign = "center";

//---------------------------

function handleCM(event) {
  event.preventDefault(); //우클릭방지
}

function handleRollClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const diceValue = Math.floor(Math.random() * 100)+1;
  ctx.fillStyle = "black";
  ctx.font = "28px san-serif";
  ctx.fillText("RESULT", 150, 120);
  ctx.font = "bold 86px cursive";
  ctx.fillText(diceValue, 150, 205);
}

function handleCopyClick() {
}

function handleSaveClick() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "Dice";
  link.click();
}

//-----------------------------

if (canvas) {
  canvas.addEventListener("contextmenu", handleCM);
}

if (rollBtn) {
  rollBtn.addEventListener("click", handleRollClick);
}

if (copyBtn) {
  copyBtn.addEventListener("click", handleCopyClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}