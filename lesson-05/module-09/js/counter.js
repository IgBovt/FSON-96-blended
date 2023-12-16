import {displayEl, controlsBtnEl, saveBtn} from "./refs.js";

controlsBtnEl.addEventListener("click", onControlsBtnClick);
saveBtn.addEventListener("click", onSaveBtnClick);
document.addEventListener("DOMContentLoaded", renderPage);

const COUNTER_KEY = "localCounter";
let currentCounter = Number(displayEl.textContent);

function onControlsBtnClick(event) {
  if (event.target.nodeName !== "BUTTON") return;
  const clickBtn = event.target.dataset.action;
//  console.log(clickBtn);

if (clickBtn === "decrease") {
  currentCounter -= 1;
}

if (clickBtn === "increase") {
  currentCounter += 1;
}

if (clickBtn === "reset") {
  currentCounter = 0;
}

displayEl.textContent = currentCounter;
}

function onSaveBtnClick(event) {
  if (event.target.nodeName !== "BUTTON") return;
  const clickBtn = event.target.dataset.action;

  if (clickBtn === "save") { 
    return localStorage.setItem(COUNTER_KEY, currentCounter);
   } 

  localStorage.removeItem(COUNTER_KEY);
}

function renderPage() {
  const lsData = localStorage.getItem(COUNTER_KEY);
  if (lsData) {
    currentCounter = Number(lsData);
    displayEl.textContent = currentCounter;
  }
}

