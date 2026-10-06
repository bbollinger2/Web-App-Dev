
// This file covers the Part B JavaScript portion of the midterm exam.



// This is a grade calculator that will calculate what number grade I will receive based on my score and the total points possible.

let score = Number(prompt("Enter the score I'll get:"));

let total_points = Number(prompt("Enter the total points possible:"));

let grade = (score / total_points) * 100;



// This ckecks the grade and outputs a letter grade based on the number grade I received and if it's an f it will start a loop that will ask me if I want to check my grade again until it's no longer an f.

while (grade < 60) {
    let check_again = prompt("Are you sure? Enter my grade again:");

    grade = (check_again / total_points) * 100;
}

if (grade >= 90) {
    console.log("I received an A! My grade is: " + grade + "%");
    if (grade >= 100) 
          
        {console.log("I got a perfect A+!");}

    else {console.log("I still got an A!");}
}

else if (grade >= 80) {
    console.log("I received a B! My grade is: " + grade + "%");}

else if (grade >= 70) {
    console.log("I received a C! My grade is: " + grade + "%");}

else if (grade >= 60) {
    console.log("I received a D! My grade is: " + grade + "%");}



// This is the second required if statement that prints out a message to the console based on the grade I received.

if (grade >= 90) {
    console.log("Yay, I got an A!");}

else if (grade >= 80) { 
    console.log("That's not bad.");}

else if (grade >= 70) {
    console.log("I can do better.");}

else if (grade >= 60) {
    console.log("It's better than nothing I guess.");}

else {
    console.log("That's not good.");}

    