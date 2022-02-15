import dates from "./data.js"
import RandomDates from "./RandomDates.js"

const welcomeWindow = document.querySelector(".welcome");
const welcomeMessage = welcomeWindow.querySelector(".welcome__message");
const welcomeForm = welcomeWindow.querySelector(".welcome__form_type_welcome");
const passwordForm = welcomeWindow.querySelector(".welcome__form_type_password");
const formVisibilityClass = "welcome__form_visible";
// const phoneInput = welcomeForm.querySelector(".welcome__input");
// const passwordInput = passwordForm.querySelector(".welcome__input");
// const welcomeGoButton = welcomeWindow.querySelector(".welcome__go-button");
// const correctPassword = "9194";
const wordboxEl = document.querySelector("#wordbox");
const datesList = document.querySelector(".dates__list");
const spinnerButton = document.querySelector(".spinner__button");
//spinnerButton.addEventListener("click", handleButtonRandom);

function generateDate() {
const rd = new RandomDates(dates,"", wordboxEl);
  rd.initItems();
}

/*
function handleButtonRandom() {
  wordboxEl.firstChild ?  wordboxEl.firstChild.remove():null;
  generateDate();
}
*/



const config = "";
const newRandomDates = new RandomDates(dates, config,"#wordbox .dates__items-container");
newRandomDates.initItems();