const THEME_KEY = "preferredTheme";

/* Apply theme */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.textContent = theme === "light" ? "☀️" : "🌙";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem(THEME_KEY) || "dark";
  applyTheme(savedTheme);

  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme");

    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });
});
