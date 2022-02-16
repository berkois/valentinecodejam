export default class RandomDates {
  constructor(dates, config, wordboxEl) {
    this._wordList = new Array();
    dates.map((date) => {
      this._wordList.push(date.name);
    });
    this._wordbox = document.querySelector(wordboxEl);
    this._timer1 = "";
    this._button = document.querySelector(".spinner__button");
  }

  _buildContents() {
    const items = this._wordList.map(this._buildItem);
    items.forEach((item) => {
      this._wordbox.append(item);
    });
  }

  initItems() {
    this._setEventListeners();
    this._buildContents();
    this._timer1 = setInterval(this._animate(), 2000);
  }

  _animate() {
    const wordIndex = this._randomIndex(this._wordList.length);
    this._rotateContents(wordIndex);
  }

  _buildItem(text) {
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    listItem.classList.add("dates__item");
    span.innerText = text;
    span.classList.add("dates__item-text");
    listItem.append(span);
    return listItem;
  }

  _setEventListeners() {
    this._button = document.querySelector(".spinner__button");
    this._button.addEventListener("click", () => {
      if (!this._button.classList.contains("button__start")) {
        this._startNewInterval();
        this._button.textContent = "Stop";
      } else {
        this._stopInterval();
        this._button.textContent = "Try Another Date";
      }
      this._button.classList.toggle("button__start");
    });
  }

  _rotateContents(n) {
    setTimeout(function () {
      const container = document.querySelector(".dates__items-container");
      const children = container.querySelectorAll(".dates__item");
      const childrenArr = Array.from(children);
      const newArr = childrenArr.slice(0, n);
      container.append(...newArr);
      if (n === childrenArr.length) {
        this._popPushNItems(1);
      }
      container.style.top = 0;
    }, 300);
  }

  _randomIndex(max) {
    const randIndex = (Math.random() * max) | 0;
    return randIndex > 10 ? randIndex : this._randomIndex(max);
  }

  _stopInterval() {
    this._div.classList.remove("rotate");
    clearInterval(this._timer1);
  }

  _startNewInterval() {
    this._div = document.querySelector(".dates__items-container"); // Get element from DOM
    this._div.classList.add("rotate");
    this._timer1 = setInterval(this._animate(), 2000);
  }
}
