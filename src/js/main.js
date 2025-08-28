import "../css/style.css";

// DOM Elements
const nav = document.getElementById("navbar");
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const toggleBtns = document.querySelectorAll(
  "#modeToggleDesktop, #modeToggleMobile"
);

// Constants
const SCROLL_THRESHOLD = 100;
const THEME_KEY = "theme";

// Scroll handler for navbar
function handleScroll() {
  nav.classList.toggle("scroll-active", window.scrollY > SCROLL_THRESHOLD);
}

// Apply theme on load
function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);

  toggleBtns.forEach((btn) => {
    btn.innerHTML = isDark
      ? "<div class='icon-sun'></div>"
      : "<div class='icon-moon'></div>";
  });
}

// Theme toggle functionality
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");

  toggleBtns.forEach((btn) => {
    btn.innerHTML = isDark
      ? "<div class='icon-sun'></div>"
      : "<div class='icon-moon'></div>";
  });
}

// Mobile menu functionality
function toggleMobileMenu() {
  mobileMenu.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
}

// Close menu when clicking outside
function handleOutsideClick(event) {
  const isClickInsideNav = event.target.closest("#navbar");

  if (!isClickInsideNav && !mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
}

// Event listeners
function initEventListeners() {
  window.addEventListener("scroll", handleScroll);

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", toggleTheme);
  });

  mobileMenuButton.addEventListener("click", toggleMobileMenu);
  document.addEventListener("click", handleOutsideClick);
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem(THEME_KEY) || "light";
  applyTheme(savedTheme);

  initEventListeners();
});
