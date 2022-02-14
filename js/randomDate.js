// IFTTT Slottt Machine by Jen Hamon
// jen@ifttt.com
// github.com/jhamon
var wordlist = [
    'office',
    'official',
    'teamwork',
    'monitor',
    'schedule',
    'prepare',
    'track',
    'record',
    'remember',
    'make a note',
    'archive',
    'timeshift',
  ]
  
function buildSlotItem (text) {
  var new_row = document.createElement('div');
  new_row.classList.add('dates__item');
  new_row.textContent = text;
    return new_row;
}

function buildSlotContents (container, wordlist) {
  const items = wordlist.map(buildSlotItem);
  const containerEl = document.querySelector(container);
  items.forEach(item => {
      containerEl.append(item);
  });
}

function insertAfter(newNode, existingNode) {
  existingNode.children[0].append(...newNode);
}

function popPushNItems (container, n) {
    const children = container.querySelectorAll('.dates__item');
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
  var randIndex = (Math.random() * max | 0);
  return (randIndex > 10) ? randIndex : randomSlotttIndex(max);
}

  
  
function animate() {
  var wordIndex = randomSlotttIndex(wordlist.length);
  rotateContents(wordbox, wordIndex)
}

function initItems() {
  const wordbox = '#wordbox .dates__items-container';
  buildSlotContents(wordbox, wordlist);  
};
initItems();

let timer1 = setInterval(animate, 2000);

function stopInterval() {
  const div =  document.querySelector('.dates__items-container') // Get element from DOM
  div.classList.remove('rotate') ;
  clearInterval(timer1);
}

function startNewInterval() {
  const div =  document.querySelector('.dates__items-container') // Get element from DOM
  div.classList.add('rotate') ;
  timer1 = setInterval(animate, 2000);
}


