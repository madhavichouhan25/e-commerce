const loginForm = document.getElementById("loginForm");
const error = document.getElementById("error");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // page reload roko

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    u => u.fullName === username && u.password === password
  );

  if (user) {
    error.style.color = "green";
    error.textContent = "Login successful!";

    // ❌ redirect tabhi karo jab tum chaho
    // window.location.href = "index.html";

  } else {
    error.style.color = "red";
    error.textContent = "Invalid username or password!";
  }
});
