var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.display = "block";
  navLinks.style.right = "0px";
}

function hideMenu() {
  navLinks.style.display = "none";
}

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  }
});
