export default class Date {
  constructor(data, templateSelector) {
    this._text = data.text;
    this._image = data.image;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const datedate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".dates__date")
      .cloneNode(true);
    return datedate;
  }

  generatedate() {
    this._date = this._getTemplate();
    
    this._date.querySelector(".dates__image").src = this._image;
    this._date.querySelector(".dates__text").textContent = this._text;
    this._date.querySelector(".dates__image").alt = `${this._text}`;
    return this._date;
  }
}
