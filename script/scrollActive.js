const body = document.querySelector("body");
body.addEventListener("scroll", () => {
  let scrollBar = body.scrollTop;
  document.querySelectorAll(".section").forEach((el, i) => {
    if (
      el.offsetTop - document.querySelector(".navbar").clientHeight <=
      scrollBar
    ) {
      document.querySelectorAll(".navbar__link").forEach((el) => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });
      document
        .querySelectorAll(".navbar__item")
        [i].querySelector(".navbar__link")
        .classList.add("active");
    }
  });
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
