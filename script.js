let hamburgerIcon = document.querySelector(".jsHamburgerIcon");
let links = document.querySelector(".jsLinks");

// hamburgerIcon.addEventListener("click", () => {
//   !links.classList.contains("links-active")
//     ? links.classList.add("links-active")
//     : links.classList.remove("links-active");
// });

// Shorter method
hamburgerIcon.addEventListener("click", () => {
  links.classList.toggle("links-active");
});
