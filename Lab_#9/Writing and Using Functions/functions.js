
// This is an externaly linked file that contains several functions that use user input to display results within the console



// These are the functions that will use user input to do different tasks when called upon

function greetUser(name) {
    console.log("Hello, " + name + "!");
}

function addNumbers(num1, num2) {
    return num1 + num2;
}

function calculateArea (length, width) {
    return length * width;
}



// These are the prompts that get the needed data from the user for the functions

let name = prompt("What is your name?");

let num1 = Number(prompt("What is the first number?"));

let num2 = Number(prompt("What is the second number?"));

let length = Number(prompt("What is the lenght?"));

let width = Number(prompt("What is the width?"));



// Here is where the data gathered in the propmts is used in the called functions and displays the result in the console

greetUser(name);

let sum = addNumbers(num1, num2);
console.log("The sum of " + num1 + " and " + num2 + " is " + sum);

let area = calculateArea(length, width);
console.log("The area of " + length + " and " + width + " is " + area);