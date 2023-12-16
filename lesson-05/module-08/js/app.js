// Модуль 7. Заняття 13. Поширення подій.

//TODO:=========task-01=======Accordion==========
/**
 * Викоритовуй шаблон акордеон меню з файлу[accordion.html](./accordion.html) та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом.При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */
import { listEl } from "./refs.js";

listEl.addEventListener("click", handleClick);

function handleClick(event) {
  // console.log(event.currentTarget);

  if (event.target.nodeName !== "BUTTON") return;
  event.target.nextElementSibling.classList.toggle("active");
  // console.log(event.target.nodeName);
}

//TODO:=========task-02=======Pagination==========
/**
 * Викоритовуй шаблон пагінації з файлу[pagination.html](./pagination.html) для розробки функціоналу пагінатора.
 * Використовуй поширення подій.Додавай клас`active` на поточну сторінку. Створи допоміжну функцію`updateActivePage`, яка повинна обновляти активний клас.
 * Функція`handleClick`повинна викликатися коли відбувається клік на елементі`pagination`.
 */
import { listContainerEl } from "./refs.js";

listContainerEl.addEventListener("click", updateActivePage);

function updateActivePage(event) {
  if (event.target.nodeName !== "LI") return;
  let currentButton = event.target;
  let activeButton = listContainerEl.querySelector(".active");

  switch (event.target.dataset.type) {
    case "prev":
      const prevBthPage = +activeButton.dataset.page - 1;
      const prevBtn = listContainerEl.querySelector(
        `[data-page='${prevBthPage}']`
      );
      if (prevBtn) {
        prevBtn.classList.add("active");
        activeButton.classList.remove("active");
      }
      break;
    case "page":
      currentButton.classList.add("active");
      activeButton.classList.remove("active");
      break;
    case "next":
      const nextBthPage = +activeButton.dataset.page + 1;
      const nextBtn = listContainerEl.querySelector(
        `[data-page='${nextBthPage}']`
      );
      if (nextBtn) {
        nextBtn.classList.add("active");
        activeButton.classList.remove("active");
      }
      break;
  }
}
