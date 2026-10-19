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
