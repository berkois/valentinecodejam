import dates from './data.js';
import RandomDates from "./RandomDates.js"

const config = "";
const newRandomDates = new RandomDates(dates, config,"#wordbox .dates__items-container");
newRandomDates.initItems();
/*
document.querySelector('.button__stop').addEventListener('click', stopInterval);
document.querySelector('.button__start').addEventListener('click', startNewInterval);
const wordlist = new Array();

dates.map(date => {
  wordlist.push(date.name);
})

function buildItem (text) {
  const new_row = document.createElement("div");
  new_row.classList.add("dates__item");
  new_row.textContent = text;
    return new_row;
}

function buildContents (container, wordlist) {
  const items = wordlist.map(buildItem);
  const containerEl = document.querySelector(container);
  items.forEach(item => {
      containerEl.append(item);
  });
}

function insertAfter(newNode, existingNode) {
  existingNode.children[0].append(...newNode);
}

function popPushNItems (container, n) {
    const children = container.querySelectorAll(".dates__item");
    const childrenArr = Array.from(children)
    const newArr = childrenArr.slice(0, n);
      insertAfter(newArr, container);
    if (n === children.length) {
      popPushNItems(container, 1);
    }
}


// After the slide animation is complete, we want to pop some items off
// the front of the container and push them onto the end. This is
// so the animation can slide upward infinitely without adding
// inifinte div elements inside the container.
function rotateContents(container, n) {
    setTimeout(function () {
      popPushNItems(container, n);
      container.style.top = 0;
    }, 300); 
}


function randomSlotttIndex(max) {
  const randIndex = (Math.random() * max | 0);
  return (randIndex > 10) ? randIndex : randomSlotttIndex(max);
}

  
  
function animate() {
  const wordIndex = randomSlotttIndex(wordlist.length);
  rotateContents(wordbox, wordIndex)
}

function initItems() {
  const wordbox = "#wordbox .dates__items-container";
  buildContents(wordbox, wordlist);  
};

initItems();

export let timer1 = setInterval(animate, 2000);

export function stopInterval() {
  const div =  document.querySelector(".dates__items-container") // Get element from DOM
  div.classList.remove('rotate') ;
  clearInterval(timer1);
}

export function startNewInterval() {
  const div =  document.querySelector(".dates__items-container") // Get element from DOM
  div.classList.add('rotate') ;
  timer1 = setInterval(animate, 2000);
}

document.querySelector(".button__stop").addEventListener('click',startNewInterval);
*/
