export default class RandomDates {
  constructor(dates, config, wordboxEl) {
    this._wordlist = new Array();
    dates.map((date) => {
      this._wordlist.push(date.name);
    });
    this._wordbox = wordboxEl;
    this._timer1 = "";
    this.button= document.querySelector(".spinner__button")
  }

  _buildContents() {
    const items = this._wordlist.map(this._buildItem);
    const containerEl = this._wordbox;
    items.forEach((item) => {
      containerEl.append(item);
    });
  }

  initItems() {
    this._setEventListeners();
    this._buildContents();
    this._timer1 = setInterval(this._animate(), 2000);
  }

  _animate() {
    const wordIndex = this._randomIndex(this._wordlist.length);
    this._rotateContents(wordIndex);
  }

  _buildItem(text) {
    const listItem = document.createElement("li");
    const img = document.createElement("span");
    listItem.classList.add("dates__item");
    //new_row.textContent = text;
    img.textContent = text;
    listItem.append(img);
    return listItem;
  }

  _setEventListeners() {
    // document.querySelector(".button__stop").addEventListener("click", () => {
    //   this._stopInterval();
    // });
    this.button.addEventListener("click", () => {
      this._startNewInterval();
    });
    
  }

  _rotateContents(n) {
    setTimeout(function () {
      const continer = document.querySelector(".dates__items-container");
      const children = document.querySelector(".dates__items-container").querySelectorAll(".dates__item");
      const childrenArr = Array.from(children);
      const newArr = childrenArr.slice(0, n);
      continer.append(...newArr);
      if (n === childrenArr.length) {
        this._popPushNItems(1);
      }
      continer.style.top = 0;
    }, 300);
  }

  _randomIndex(max) {
    const randIndex = (Math.random() * max) | 0;
    return randIndex > 10 ? randIndex : this._randomIndex(max);
  }

  _stopInterval() {
    const div = document.querySelector(".dates__items-container"); // Get element from DOM
    div.classList.remove("rotate");
    clearInterval(this._timer1);
  }

  _startNewInterval() {
    const div = document.querySelector(".dates__items-container"); // Get element from DOM
    div.classList.add("rotate");
    this._timer1 = setInterval(this._animate(), 2000);
  }
  
}

