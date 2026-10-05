

// This lab continues on from last one and goes more in depth with loops.



// The following code takes user input for 2 numbers then multiplies them together and prints "Fizz" for multiples of 3 and "Buzz" for multiples of 5. If the number is a multiple of both 3 and 5 it prints "FizzBuzz" then it adds up how many multiples of 3, 5, and both there are and prints them to the console.

// This part asks for the numbers that the user wants to multiply together then multiplies them.

let num1 = parseInt(prompt("Enter the first number:"));

let num2 = parseInt(prompt("Enter the second number:"));

let result = num1 * num2;



// This part uses a for loop to print the results and "Fizz", "Buzz", or "FizzBuzz" depending on the result.

// The for loop starts at 1 and continues until it reaches the result of the multiplication, incrementing by 1 each time. It checks if the current number is a multiple of 3, 5, or both and prints the appropriate message to the console.

for (let x = 1; x <= result; x++) {

    if (x % 3 === 0 && x % 5 === 0) 
        {console.log(x + " FizzBuzz");} 
    
    else if (x % 3 === 0) 
        {console.log(x + " Fizz");} 

    else if (x % 5 === 0) 
        {console.log(x + " Buzz");} 

    else 
        {console.log(x);}

}



// This part uses another for loop to count how many multiples of 3, 5, and both there are and prints them to the console.

// This is a loop that counts how many multiples of 3, 5, and both there are and prints them to the console. 

let count3 = 0;

let count5 = 0;

for (let x = 1; x <= result; x++) {

    if (x % 3 === 0 && x % 5 === 0) {
        count3++;
        count5++;
    } 
    
    else if (x % 3 === 0) 
        {count3++;} 
    
    else if (x % 5 === 0) 
        {count5++;}

    else if (x % 3 === 0 && x % 5 === 0)
        {count3++; count5++;}

}

console.log("Multiples of 3:", count3);

console.log("Multiples of 5:", count5);

console.log("Multiples of both 3 and 5:", count3 + count5);

