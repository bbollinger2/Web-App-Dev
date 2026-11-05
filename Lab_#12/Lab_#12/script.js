// Select the form and the result section
const form = document.getElementById("user_info");
const result = document.getElementById("result");

// Listen for the form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Get the input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const color = document.getElementById("color").value;

    // Display the result
    result.innerHTML = `
        <h3>User Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Favorite Color:</strong> ${color}</p>
    `;

    document.body.style.backgroundColor = color;
    
});

// Questions

// What does event.preventDefault() actually prevent?
// event.preventDefault() prevents the default action of the form submission stoping the page from refreshing.

// What does .value return?
// The .value property returns the current value of the input field.

// Why use template literals (`${}`) instead of string concatenation?
// They allow for easier and more readable strings.