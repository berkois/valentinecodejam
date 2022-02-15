const welcomeWindow = document.querySelector(".welcome");
const welcomeMessage = welcomeWindow.querySelector(".welcome__message");
const welcomeForm = welcomeWindow.querySelector(".welcome__form_type_welcome");
const passwordForm = welcomeWindow.querySelector(".welcome__form_type_password");
const formVisibilityClass = "welcome__form_visible";
// const phoneInput = welcomeForm.querySelector(".welcome__input");
// const passwordInput = passwordForm.querySelector(".welcome__input");
// const welcomeGoButton = welcomeWindow.querySelector(".welcome__go-button");
// const correctPassword = "9194";

const datesList = document.querySelector(".dates__list");
// let randomNum;
const spinnerButton = document.querySelector(".spinner__button");
spinnerButton.addEventListener("click", handleButtonRandom);

function generateDate(randomNum) {
  const dateSquare = new Date({ text: dates[randomNum].name, image: dates[randomNum].imgUrl }, "#date-template");
  const dateElement = dateSquare.generatedate();

  datesList.append(dateElement);
}

function handleButtonRandom() {
  const randomNum = Math.floor(Math.random() * 49);
  datesList.firstChild.remove();
  generateDate(randomNum);
}
