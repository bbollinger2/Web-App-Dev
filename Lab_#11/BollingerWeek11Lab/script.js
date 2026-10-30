
// Example 1: Click event

const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", () => {
alert("You clicked it once");
});



// Example 2: Double-click event

const dblBtn = document.getElementById("dblBtn");
dblBtn.addEventListener("dblclick", () => {
dblBtn.textContent = "You Clicked it TWICE!!! Congratulations!";
});



// Example 3: Hover in / out

const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", () => {
hoverText.style.color = "pink";
});

hoverText.addEventListener("mouseout", () => {
hoverText.style.color = "black";
});



// Example 4: Key press

document.addEventListener("keyup", (event) => {
document.getElementById("output").textContent = "You pressed: " + event.key;
});



// Example 5: Input typing

const textInput = document.getElementById("textInput");
textInput.addEventListener("input", () => {
console.log("User typed:", textInput.value);
});
