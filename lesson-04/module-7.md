# Модуль 7. DOM i events

## 1. Базові операції з DOM

1. отримай body елемент і виведи його в консоль;
2. отримай елемент id="title" і виведи його в консоль;
3. отримай елемент class="list" і виведи його в консоль;
4. отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
5. отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
6. отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
7. який елемент є сусідом для h1? Знайти і виведи його в консоль;
8. по тегу h3 знайти всі заголовки та виведи їх у консоль;
9. для кожного елмента h3 додай class="active", який змінить колів заголовка на червоний колір
10. знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
11. додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
12. у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
13. створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
14. додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
15. знайти в документі заголовок, який має class="completed" і виведи його в консоль;
16. видали елемент li в якому знаходиться заголовок, який має class="completed"
17. після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
18. додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
19. зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
20. очисти список

```html
<body>
  <h1 id="title">Базові операції з DOM</h1>
  <ul class="list">
    <li data-topic="navigation">
      <h3>Навігація по DOM</h3>
      <p>
        Доступ до DOM починається з об'єкта document, з нього можна дістатися до
        будь-яких елементів.
      </p>
    </li>
    <li data-topic="search">
      <h3>Пошук елементів</h3>
      <p>
        Група методів elem.querySelector* - це сучасний стандарт для пошуку
        елементів.
      </p>
    </li>
    <li data-topic="props">
      <h3 class="completed">Властивості та атрибути</h3>
      <p>
        elem.textContent, elem.classList, elem.style, elem.hasAttribute(name),
        elem.getAttribute(name), elem.setAttribute(name, value),
        elem.removeAttribute(name)
      </p>
    </li>
    <li data-topic="manipulation">
      <h3>Створення та видалення елементів</h3>
      <p>
        DOM API дозволяє не тільки вибирати або змінювати вже існуючі, але й
        видаляти, а також створювати нові елементи, після чого додавати їх в
        документ.
      </p>
    </li>
  </ul>
</body>
```

## 2. Вставте даний текст в html документ, а потім виділіть усі слова, які мають більше 8 символів у тексті абзацу (наприклад, жовтим фоном).

```js
const text = `Об'єктна модель документа (Document Object Model) - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;
```

## 3. Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

```css
.number-сontainer {
  display: flex;
  flex-wrap: wrap;
}

.number {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin: 5px;
}

.even {
  background-color: #8bc34a;
}

.odd {
  background-color: #ffeb3b;
}
```

```js
const randomNumber = Math.floor(Math.random() * 100) + 1;
```

## 4. Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію `createMarkup()`, яка буде повертати розмітку. Додай розмітку на сторінку задопомогою `insertAdjacentHTML()` і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). Для цього використовуй масив унікальних id фільмів, знайди на сторінці елементи у яких id дорівнює тому id фільма, який користувач вже перелянув аби саме їх зробити напівпрозорими.

```js
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

// Приклад елементу списку
// <li id="${id}">
//      <img src="${imgUrl}" alt="${title}" />
//      <p>${title}</p>
// </li>

const watchedFilms = ["film_2", "film_4", "film_5"];

function createMarkup() {}
```

# Модуль 7. Form Events, Input, Focus, Blur and Submit.

## 5.

1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати клас `success`. Якщо ж символів менше аніж 6, то клас `error`

2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

3 - При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

4 - При події `submit`. Відміни поведінку браузера по змовчуванню. Дістань данні з інпуту і чек боксу, зроби перевірку, що інпут не порожній, також, що нажатий чек бокс у положення true, якщо користувач все виконав вірно, збери данні (userName) у обьект і виведи у консоль. У разі, якщо користувач не виконав одну із умов, виведи повідомлення. Також реалізуй додавання ім`я користувача у span, замість слова "Anonymous". Якщо користувач ввів ім`я, а потім видали, зроби так, щоб на місце повернулось дефолтне знаяення "Anonymous". При відправці форми, очисти інпут, верни чек бокс у положення false, верни дефолтне значення "Anonymous" у span.

```html
<form class="contact-form js-contact-form">
  <input
    name="userName"
    type="text"
    class="contact-form-input js-username-input"
    data-length="8"
    required
    placeholder="Your name"
  />
  <label class="js-policy-label">
    <input
      type="checkbox"
      name="accept"
      class="contact-form-checkbox js-policy-checkbox"
    />
    Я <span class="js-username-output">Anonymous</span> погоджуюсь із політикою
    конфіденційності
  </label>
  <button type="submit" class="contact-form-btn js-contact-form-submit">
    Відправити
  </button>
</form>
```

```css
.contact-form {
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
.contact-form-input {
  height: 40px;
  border: 1px solid #cccccc;
  padding-left: 20px;
  margin-bottom: 20px;
}

.contact-form-btn {
  margin-top: 20px;
}

.success {
  outline: 3px solid greenyellow;
}

.error {
  outline: 3px solid red;
}

span {
  text-decoration: underline;
}
```

## 6. Написати функцію, яка буде створювати список подій клавіатури event.key та event.code. Додати класи на список eventList, на елементи eventCode та eventKey

```html
<div class="event-thumb"></div>
```

```js
`<ul class="eventList">
  <li class="event-key">
    <b>Key</b>: ${key}
  </li>
  <li class="event-code">
    <b>Code</b>: ${code}
  </li>
</ul>`;
```

```css
.event-key {
  color: turquoise;
}

.event-code {
  color: tomato;
}
```

## 7. Кнопка "Зменшити" робить квадрат меншим на 20 пікселів, кнопка "Збільшити" - робить більшим на 10 пікселів.

```html
<div>
  <div class="box"></div>
  <button class="js-decrease" id="decrease">Зменьшити</button>
  <button class="js-increase" id="increase">Збільшити</button>
</div>
```

```css
button {
  align-self: center;
  padding: 10px 26px;
  cursor: pointer;

  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}

.box {
  width: 50px;
  height: 50px;
  border: 2px dashed red;
  margin: 10px;
}
```
