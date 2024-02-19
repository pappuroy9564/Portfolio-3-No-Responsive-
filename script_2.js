const close = document.querySelector("#close");
const open = document.querySelector("#open");
const fBar = document.querySelector(".targetBar");
function navMenu() {
  open.addEventListener("click", () => {
    fBar.style.top = "0";
  });

  close.addEventListener("click", () => {
    fBar.style.top = "-100%";
  });
}
navMenu();
// !!!!!!!!!!!!!!!!!!!!!!!!!!
const h1 = document.querySelector("h1");
const head = document.querySelector("header");
function mainTime() {
  setTimeout(() => {
    h1.style.left = "0";
    h1.style.paddingLeft = "5vw";
  }, 100);
  setTimeout(() => {
    head.style.bottom = "0vw";
  }, 100);
}
mainTime();
