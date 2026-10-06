
// This page covers Part C short answer and debugging of the midterm exam.



// Question 1: Why do we use Number(prompt()) instead of just prompt() when doing math or numeric comparisons?

// Because using Number before prompt forces the user to imput a number instead of letters when you need numbers.



// Question 2: Operators (10 pts): In one sentence each, explain the difference between: == vs === and > vs >=

// The difference between (== and ===) is that == alows some leway between values like a string and a integer 

// Where === has to be exact meaning if you enter a string when it's searching for an integer it will be wrong



// Fix this snippet so it correctly prints “A” for scores ≥ 90, “B” for ≥ 80, otherwise “Keep going,” using strict equality where relevant:

// Broken code — explain changes in comments, then rewrite correctly below
// let score = prompt("Score?");
// if (score >= "90") {
//   console.log("A");
// } else if (score == "80") {
//   console.log("B");
// } else {
//   console.log("Keep going")
// }

// Fixed code 
let score = Number(prompt("Score?")); // I made it so the user can only imput a number so it won't mess up the code
if (score >= "90") {
  console.log("A");
} else if (score >= "80") { // I changed the equal sign to a greater than so anything in the 80's range will be accepted 
  console.log("B");
} else {
  console.log("Keep going")
}