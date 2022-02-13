import Date from "../scripts/date.js";
import dates from "../scripts/data.js";

const datesList = document.querySelector(".dates__list");

dates.forEach((date) => {
    const dateSquare = new Date(
      { text: date.name, image: date.imgUrl },
      "#date-template"
    );
    const dateElement = dateSquare.generatedate();
    datesList.append(dateElement);
  });