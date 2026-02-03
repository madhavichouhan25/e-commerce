// Step 1: Get form and message element
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

// Step 2: Listen for form submit
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Step 3: Get form values
  const fullName = document.getElementById("full-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const number = document.getElementById("number").value.trim();
  const location = document.getElementById("location").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  // Step 4: Validation
  if (!fullName || !email || !number || !location || !password || !confirm) {
    message.style.color = "red";
    message.textContent = "Please fill all fields!";
    return;
  }

  if (password !== confirm) {
    message.style.color = "red";
    message.textContent = "Passwords do not match!";
    return;
  }

  // Step 5: Save user to localStorage (mock database)
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Check if email already exists
  if (users.find(u => u.email === email)) {
    message.style.color = "red";
    message.textContent = "Email already registered!";
    return;
  }

  users.push({ fullName, email, number, location, password, role: "Buyer" }); // default role Buyer
  localStorage.setItem("users", JSON.stringify(users));

  message.style.color = "green";
  message.textContent = "Registration successful! Redirecting to login...";

  // Redirect after 2 seconds
  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});
