// Function to validate the contact form
function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting by default

  // Get form input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Check if any field is empty
  if (!name || !email || !subject || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // Check if email is in a valid format using regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // If all validations pass, submit the form
  document.getElementById("contactForm").submit();
}

// Attach the validateForm function to the form's submit event
document.getElementById("contactForm").addEventListener("submit", validateForm);
