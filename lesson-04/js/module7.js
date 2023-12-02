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
