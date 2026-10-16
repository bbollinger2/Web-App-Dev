
// This is a lab that uses a mix of user inputs, loops, and functions to create a multiplication table based on the users number



// These are the functions that the program uses

// This asks for the users input then uses another funciton to display the square of their number and a multiplication table for that number
function calc() {
    let num = Number(prompt("What is your number?"));

    let result = calculateSquare(num);

    console.log("The square of " + num + " is " + result);

    displayTable(num);
}



// This calculates the square of the users number
function calculateSquare(num) {
    return num * num
}



// This creates a multiplication table for the number that the user inputed for the main function to display
function displayTable(num) {
    console.log("This is the Multiplication table for " + num);

    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}



// This runs the main program that contains the other functions
calc();
