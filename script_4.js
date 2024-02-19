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
navMenu();
mainTime();
//

const sec1 = document.querySelector(".section-1");
const boxes = document.querySelectorAll(".boxes-02");
const sec_c_2 = document.querySelector(".sec-child-2");

function callBack() {
  sec1.addEventListener("mouseenter", () => {
    setTimeout(() => {
      sec_c_2.style.transform = "translateX(0)";
      boxes.forEach((e) => {
        e.style.transform = "scaleX(1)";
      });
    }, 200);
  });
}

callBack();

// function callBack() {

//   sec1.addEventListener("mouseenter", () => {

//     setTimeout(() => {
//       sec_c_2.style.transform = "translateX(0)";
//       boxes.forEach((e) => {
//         e.style.transform = "scaleX(1)";
//       });
//     }, 200);
//   });
// }

// callBack();
