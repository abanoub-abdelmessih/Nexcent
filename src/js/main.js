window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 100) {
    nav.classList.add("scroll-active");
  } else {
    nav.classList.remove("scroll-active");
  }
});
const toggleBtn = document.getElementById("modeToggle");
toggleBtn.addEventListener("click", toggleMode);

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    toggleBtn.innerHTML = "<div class='icon-sun'></div>";
  } else {
    toggleBtn.innerHTML = "<div class='icon-moon'></div>";
  }
}
