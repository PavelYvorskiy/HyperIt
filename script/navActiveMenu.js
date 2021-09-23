const navbarBtn = document.querySelector(".navbar__btn");
const navbarMenu = document.querySelector(".navbar");
navbarBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});
