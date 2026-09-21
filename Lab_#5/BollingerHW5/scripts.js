
// This is where the answers to the equations are calculated

let answer_1 = 2 + 3;

let answer_2 = 5 * 10;

let answer_3 = answer_1 + answer_2;



//This is a true or false statement that will be displayed in the console

let homework_complete = true;



// These are the equations for the homework assignment

let equation_1 = "Problem 1: 2 + 3";

let equation_2 = "Problem 2: 5 * 10";

let equation_3 = "Problem 3: " + answer_1 + " + " + answer_2;



// This is where the equations and answers are displayed in the console

console.log(equation_1 + " = " + answer_1);

console.log(equation_2 + " = " + answer_2);

console.log(equation_3 + " = " + answer_3);

console.log("Homework Complete: " + homework_complete);



// This is where the equations and answers are displayed in the HTML document

document.body.innerHTML += "<p>Result: " + answer_3 + "</p>";
