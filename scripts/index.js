import Date from "../scripts/date.js";
import dates from "../scripts/data.js";

const datesList = document.querySelector(".dates__list");
let randomNum;
const spinnerButton = document.querySelector(".spinner__button");
spinnerButton.addEventListener("click", handleButtonRandom);


function generateDate(randomNum) {
  const dateSquare = new Date(
    { text: dates[randomNum].name, image: dates[randomNum].imgUrl },
    "#date-template"
  );
  const dateElement = dateSquare.generatedate();
  
  datesList.append(dateElement);
};

function handleButtonRandom(){
randomNum = Math.floor(Math.random() * 49);
datesList.firstChild.remove();
generateDate(randomNum);
}



