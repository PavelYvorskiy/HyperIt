"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const btnForm = document.querySelector(".btnForm");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
    let formData = new FormData(form);
    if (error === 0) {
      btnForm.classList.add("active");
      /*  let response = await fetch("./sendmail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        await response.json();
        form.reset();
      }*/
    }
  }
  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll(".req");
    console.log(formReq);
    formReq.forEach((input) => {
      removeError(input);
      if (input.classList.contains("email")) {
        if (emailTest(input)) {
          addError(input);
          error++;
        }
      } else if (input.classList.contains("tel")) {
        if (telTest(input)) {
          addError(input);
          error++;
        }
      }
    });
    return error;
  }
  function addError(input) {
    input.parentElement.classList.add("error");
    input.classList.add("error");
  }
  function removeError(input) {
    input.parentElement.classList.remove("error");
    input.classList.remove("error");
  }
  function emailTest(input) {
    return !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
      input.value
    );
  }
  function telTest(input) {
    return !/^\d{3}\d{3}\d{2}\d{2}$/.test(input.value);
  }
});
