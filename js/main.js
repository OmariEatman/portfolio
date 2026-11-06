const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-navigation");
const mobileQuery = window.matchMedia("(max-width: 760px)");
function syncNavigation() {
  navigation.hidden = mobileQuery.matches;
  menuButton.setAttribute("aria-expanded", String(!navigation.hidden));
}
menuButton.addEventListener("click", () => {
  navigation.hidden = !navigation.hidden;
  menuButton.setAttribute("aria-expanded", String(!navigation.hidden));
});
mobileQuery.addEventListener("change", syncNavigation);
syncNavigation();

// Use light mode initially and remember an explicit choice when storage is available.
const themeButton = document.querySelector(".theme-toggle");
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.setAttribute("aria-pressed", String(theme === "dark"));
}
let savedTheme = "light";
try {
  if (localStorage.getItem("portfolio-theme") === "dark") savedTheme = "dark";
} catch {
  // The toggle still works when the browser blocks local storage.
}
applyTheme(savedTheme);
themeButton.hidden = false;
themeButton.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  try {
    localStorage.setItem("portfolio-theme", nextTheme);
  } catch {
    // Keep the selection for this page even if it cannot be saved.
  }
});
