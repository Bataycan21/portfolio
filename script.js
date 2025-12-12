// script.js
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleBtn.textContent = body.classList.contains("dark")
    ? "☀️ Switch to Light Theme"
    : "🌙 Switch to Dark Theme";
});
