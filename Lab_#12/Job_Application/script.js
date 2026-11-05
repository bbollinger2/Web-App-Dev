
// Select the form and the result section
const form = document.getElementById("user_info");
const result = document.getElementById("result");

// Listen for the form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Get the input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const description = document.getElementById("description").value;
    const position = document.getElementById("position").value;
    const experience = document.getElementById("experience").value;

    // Display the result
    result.innerHTML = `
        <h3>User Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Experience:</strong> ${experience}</p>
    `;
});