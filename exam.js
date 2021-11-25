// Q1. Explain what a callback function is and provide a simple example.
/*
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
Example 
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
*/


let stack = document.querySelector(".stack");

[...stack.children].reverse().forEach(i => stack.append(i));


stack.addEventListener("click", swap);

function swap(e) {
    let card = document.querySelector(".card:last-child");
    if (e.target !== card) return;
    card.style.animation = "swap 700ms forwards";

    setTimeout(() => {
        card.style.animation = "";
        stack.prepend(card);
    }, 700);
}