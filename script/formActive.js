const btnClosedForm = document.querySelector(".btn");
const closedForm = document.querySelector(".form-content");
const btnStartForm = document.querySelectorAll(".btnActiveForm");

btnClosedForm.addEventListener("click", () => {
  closedForm.classList.remove("active");
});

btnStartForm.forEach((elem) => {
  elem.addEventListener("click", () => {
    closedForm.classList.add("active");
  });
});
