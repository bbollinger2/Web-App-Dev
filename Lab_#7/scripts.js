

// This assignment is for Lab #7, which is about using loops in JavaScript.



// The following code is about using a for loop to print numbers 1-10 witin the console. 

// The for loop starts at the continues until it reaches 10, incrementing by 1 each time.

for (let x = 1; x <= 10; x++) {
    console.log(x);
}



// The following code askes for user input a number then it counts from 1 until that number within the console.

// The for loop starts at 1 and continues until it reaches the user input number, incrementing by 1 each time.

let userInput = parseInt(prompt("Enter a number:"));

for (let x = 1; x <= userInput; x++) {
    console.log(x);
}



// The following code uses another for loop to print a triangle on the right side of the console

// It does this by adding spaces before the hashes and remoiving them as the hashes increase.

let hashes = "";

for (let x = 1; x <= 25; x++) {
    hashes += "#";
    console.log(" ".repeat(25 - x) + hashes);
}