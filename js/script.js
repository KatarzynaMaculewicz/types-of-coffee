console.log("Hello world");

let button = document.querySelector(".header__button")
let body = document.querySelector(".body");

button.addEventListener("click", () => {
      body.classList.toggle("body--dark");
      button.interText === (button.interText === "dark mode") ? "light mode" : "dark mode";
});
