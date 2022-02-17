import { dates } from "../utils/data.js";
import RandomDates from "../components/RandomDates.js";

const newRandomDates = new RandomDates(dates, {
  spinnerButton: ".spinner__button",
  spinnerContainer: ".spinner__items-container",
});
newRandomDates.initItems();
