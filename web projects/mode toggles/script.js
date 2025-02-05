const toggleBtn = document.getElementById("toggle-btn");
const body = document.body;

// Check for saved theme preference
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.innerText = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.innerText = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.innerText = "🌙 Dark Mode";
    }
});
