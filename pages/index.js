import { dates, config } from "../utils/data.js";
import RandomDates from "../components/RandomDates.js";

const newRandomDates = new RandomDates(dates, config);
newRandomDates.initItems();
