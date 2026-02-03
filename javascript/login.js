// Step 4a: Mock database of users
const users = [
  { username: "buyer1", password: "1234", role: "Buyer" },
  { username: "seller1", password: "1234", role: "Seller" },
  { username: "admin1", password: "1234", role: "Admin" },
];

// Step 4b: Login function
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  // Step 4c: Check user in mock database
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    error.textContent = "";

    // Step 4d: Role-based redirect
    if (user.role === "Buyer") {
      window.location.href = "buyer.html";
    } else if (user.role === "Seller") {
      window.location.href = "seller.html";
    } else if (user.role === "Admin") {
      window.location.href = "admin.html";
    }
  } else {
    error.textContent = "Invalid username or password!";
  }
}
const loginForm = document.getElementById("loginForm");
const error = document.getElementById("error");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // page refresh roko

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // get users from localStorage (registration se aaye honge)
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    u => u.fullName === username && u.password === password
  );

  if (user) {
    error.style.color = "green";
    error.textContent = "Login successful! Redirecting...";

    // 👉 LOGIN KE BAAD INDEX PAGE
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);

  } else {
    error.style.color = "red";
    error.textContent = "Invalid username or password!";
  }
});

