const bodyEl = document.body;
// console.log(bodyEl);
const titleEl = document.querySelector("#title");
// console.log(titleEl);
const classEl = document.querySelector(".list");
// console.log(classEl);
const dataEls = document.querySelectorAll("[data-topic]");
dataEls.forEach((element) => {
  //   console.log(element);
});
const firstEl = document.querySelector("[data-topic]");
// console.log(firstEl);
const lastEl = document.querySelectorAll("[data-topic]");
// console.log(lastEl[lastEl.length - 1]);
const fisrtSubling = document.querySelector("h1");
// console.log(fisrtSubling.nextElementSibling);
const headings = document.querySelectorAll("h3");
headings.forEach((element) => {
  //   console.log(element.textContent);
});
const changeColor = document.querySelectorAll("h3");
changeColor.forEach((element) => {
  element.classList.add("active");
  // element.style.color = "red";
});
const liEl = document.querySelector("li[data-topic=navigation]");
// console.log(liEl);

liEl.style.backgroundColor = "yellow";

liEl.lastElementChild.textContent = "Я змінив тут текст!";

const currentTopic = "manipulation";

const findElement = document.querySelector(`[data-topic = ${currentTopic}]`);

findElement.style.backgroundColor = "blue";

const title = document.querySelector(".completed");

title.parentNode.remove();

const parEL = document.createElement("p");

parEL.textContent = "Об'єктна модель документа (Document Object Model)";

titleEl.after(parEL);

const subtitleEl = document.createElement("h3");
subtitleEl.textContent = "Властивість innerHTML";

const pageEL = document.createElement("p");

pageEL.textContent =
  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

const listItemEl = document.createElement("li");

listItemEl.appendChild(subtitleEl);
listItemEl.appendChild(pageEL);

// classEl.append(listItemEl);

const markup = `<li>
      <h3>Властивість innerHTML</h3>
      <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
    </li>`;

classEl.insertAdjacentHTML("beforeend", markup);

classEl.innerHTML = "";
