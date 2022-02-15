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
    const containerEl = document.querySelector(this._wordbox);
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
    const span = document.createElement("span");
    listItem.classList.add("dates__item");
    span.innerText = text;
    span.classList.add("dates__item-text");
    // img.src = text;
    // img.loading = "lazy";
    listItem.append(span);
    return listItem;
  }

  _setEventListeners() {
    const btn = document.querySelector(".spinner__button");
    btn.addEventListener("click", () => {
      btn.classList.toggle("button__stop");
      if(btn.classList.contains("button__stop")){
        this._stopInterval();
        btn.textContent = "Try another one";
      }

      else{
        btn.textContent = "Raffle my Date Idea";
        this._startNewInterval();
      }

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

