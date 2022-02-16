import dates from "./data.js";
import { closePopup, openPopup } from "./utils.js";
import RandomDates from "./RandomDates.js";

const welcomeWindow = document.querySelector(".welcome");
const welcomeMessage = welcomeWindow.querySelector(".welcome__message");
// const wordboxEl = document.querySelector("#wordbox");
const datesList = document.querySelector(".dates__list");
const spinnerButton = document.querySelector(".spinner__button");
const exitBtn = document.querySelector(".popup__exit-btn");
const popup = document.querySelector(".popup");
const popupImage = document.querySelector(".popup__imagePopUp");
const popupImageText = document.querySelector(".popup__imagePopUp-text");
const datesContainer = document.querySelector(".dates__items-container");

datesContainer.addEventListener("click", () => {
  if (!datesContainer.classList.contains("rotate")) {
    const ObjElement = dates.find((obj) => obj.name == datesContainer.firstElementChild.textContent);
    popupImage.src = ObjElement.imgUrl;
    popupImageText.textContent = ObjElement.moreInfo;
    openPopup(popup);
  } else {
    datesContainer.classList.remove("rotate");
    spinnerButton.textContent = "Try Another Date";
    spinnerButton.classList.toggle("button__start");
  }
});

exitBtn.addEventListener("click", () => {
  closePopup(popup);
});

popup.addEventListener("click", function (e) {
  if (e.target.classList.contains("popup_active") || e.target.classList.contains("popup__exit-icon")) {
    closePopup(popup);
  }
});

const config = "";
const newRandomDates = new RandomDates(dates, config, ".dates__items-container");
newRandomDates.initItems();
