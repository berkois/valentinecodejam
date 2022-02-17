import { closeModal, openModal } from "../utils/utils.js";
import { modal, modalCloseButton } from "../utils/data.js";

export default class RandomDates {
  constructor(dates, config) {
    this._dates = dates;
    this._config = config;
    this._wordbox = document.querySelector(config.spinnerContainer);
    this.modal = document.q;
  }

  initItems() {
    this._setEventListeners();
    this._buildContents();
  }

  _buildContents() {
    this._wordList = new Array();
    this._dates.map((date) => {
      this._wordList.push(date.name);
    });
    const items = this._wordList.map(this._buildItem);
    items.forEach((item) => {
      this._wordbox.append(item);
    });
  }

  _animate() {
    const wordIndex = this._randomIndex(this._wordList.length);
    this._rotateContents(wordIndex);
  }

  _buildItem(text) {
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    listItem.classList.add("spinner__item");
    span.innerText = text;
    span.classList.add("spinner__text");
    listItem.append(span);
    return listItem;
  }

  _setEventListeners() {
    this._button = document.querySelector(this._config.spinnerButton);

    this._button.addEventListener("click", () => {
      if (!this._button.classList.contains("button__start")) {
        this._button.disabled = true;
        this._startNewInterval();
      }
    });

    this._wordbox.addEventListener("click", () => {
      if (!this._wordbox.classList.contains("rotate")) {
        const selectedDate = this._dates.find((obj) => obj.name == this._wordbox.firstElementChild.textContent);
        openModal(selectedDate);
      }
    });

    modalCloseButton.addEventListener("click", () => {
      closeModal();
    });

    modal.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal_active") || e.target.classList.contains("modal__close-icon")) {
        closeModal();
      }
    });
  }

  _rotateContents(n) {
    setTimeout(function () {
      const container = document.querySelector(".spinner__items-container");
      const children = container.querySelectorAll(".spinner__item");
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

  _startNewInterval() {
    this._wordbox.classList.add("rotate");
    const spinnerButton = document.querySelector(".spinner__button");
    const timer1 = setInterval(() => {
      this._animate();
    }, 500);
    setTimeout(function () {
      clearInterval(timer1);
      document.querySelector(".spinner__items-container").classList.remove("rotate");
      spinnerButton.textContent = "Try Another Date";
      spinnerButton.disabled = false;
    }, this._randomIndex(5000));
  }
}
