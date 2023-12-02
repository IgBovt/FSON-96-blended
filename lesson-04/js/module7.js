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

const films = [
  {
    title: "Tetris",
    imgUrl: "https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg",
    id: "film_1",
  },
  {
    title: "Avatar: The Way of Water",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg",
    id: "film_2",
  },
  {
    title: "Operation Fortune: Ruse de guerre",
    imgUrl: "https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg",
    id: "film_3",
  },
  {
    title: "Babylon",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg",
    id: "film_4",
  },
  {
    title: "The Whale",
    imgUrl: "https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg",
    id: "film_5",
  },
];

function createMarkup(array) {
  return array
    .map(
      (element) => `
    <li id="${element.id}">
     <img src="${element.imgUrl}" alt="${element.title}" />    
    <p>${element.title}</p>
    </li>`
    )
    .join("");
}
classEl.innerHTML = createMarkup(films);

const formEl = document.querySelector(".contact-form");

formEl.addEventListener("input", (event) => {
  if (event.target.value.length > 6) {
    event.target.classList.add("success");
    event.target.classList.remove("error");
  } else {
    event.target.classList.add("error");
    event.target.classList.remove("success");
  }
});
