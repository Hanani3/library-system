
const users = [
  { username: "admin1", password: "1234", role: "admin" },
  { username: "admin2", password: "5678", role: "admin" },
  { username: "admin3", password: "8765", role: "admin" },
  { username: "admin4", password: "4321", role: "admin" }
];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    if (user.role === "admin") {
      window.location.href = "dashboard.html";
    } else {
      window.location.href = "books.html";
    }
  } else {
    error.classList.remove("d-none");
  }
}


function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
