
// This is where the answers to the equations are calculated

// let answer_1 = 2 + 3;

// let answer_2 = 5 * 10;

// let answer_3 = answer_1 + answer_2;



//This is a true or false statement that will be displayed in the console

// let homework_complete = true;



// These are the equations for the homework assignment

// let equation_1 = "Problem 1: 2 + 3";

// let equation_2 = "Problem 2: 5 * 10";

// let equation_3 = "Problem 3: " + answer_1 + " + " + answer_2;



// This is where the equations and answers are displayed in the console

// console.log(equation_1 + " = " + answer_1);

// console.log(equation_2 + " = " + answer_2);

// console.log(equation_3 + " = " + answer_3);

// console.log("Homework Complete: " + homework_complete);



// This is where the equations and answers are displayed in the HTML document

//document.body.innerHTML += "<p>Result: " + answer_3 + "</p>";



// The following code is for Lab #6 which is adding more external JavaScript files to the project.



// This is a grade calculator that will calculate what number grade a student will receive based on their score and the total points possible.

let score = Number(prompt("Enter your score:"));

let total_points = Number(prompt("Enter the total points possible:"));

let grade = (score / total_points) * 100;

if (grade >= 90) {
    console.log("You received an A! Your grade is: " + grade + "%");}

else if (grade >= 80) {
    console.log("You received a B! Your grade is: " + grade + "%");}

else if (grade >= 70) {
    console.log("You received a C! Your grade is: " + grade + "%");}

else {
    console.log("You received an F! Your grade is: " + grade + "%");}



// This will ask the user for their age and determine if they are an adult or a minor.

let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    console.log("Adult");
}

else {
    console.log("Minor");
}



// This is a simple weather response program that will ask the user for the current weather and respond with a message based on their input.

let weather = prompt("What is the current weather? (sunny, rainy, snowy, cloudy)");

if (weather === "sunny") {
    console.log("Time to go outside and enjoy the sun.");
}

else if (weather === "rainy") {
    console.log("Rain is great for the plants not so much for you.");
}

else if (weather === "snowy") {
    console.log("The snow is perfect for skiing.");
}

else if (weather === "cloudy") {
    console.log("The clouds are blocking the sun.");
}

else {
    console.log("No it's not.");
}
