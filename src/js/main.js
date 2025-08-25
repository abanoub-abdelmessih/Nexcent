window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 100) {
    nav.classList.add("scroll-active");
  } else {
    nav.classList.remove("scroll-active");
  }
});
