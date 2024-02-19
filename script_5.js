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

const section1 = document.querySelector(".section-1");
const section2 = document.querySelector(".section-2");
const boxes2 = document.querySelectorAll(".boxes-2");
const cH2 = document.querySelector(".cH2");
const cP = document.querySelector(".cP");
const fH2 = document.querySelector(".fH2");
const btnC = document.querySelector(".Btn");

if(window.innerWidth > 600){
section1.addEventListener("mouseenter", () => {
  cH2.style.transform = "translateX(0vw)";
  cP.style.transform = "translateY(3vw)";
  boxes2.forEach((e) => {
    setTimeout(() => {
      e.style.transform = "scaleY(1)";
    }, 100);
  });
});
}else{
  cH2.style.transform = "translateX(0vw)";
  cP.style.transform = "translateY(3vw)";
  boxes2.forEach((e) => {
    setTimeout(() => {
      e.style.transform = "scaleY(1)";
    }, 100);
  });
}
if (window.innerWidth > 600) {
    section2.addEventListener("mouseenter", () => {
    fH2.style.transform = "translateY(-3vw)";
    fH2.style.transition = "all ease 0.5s";
    btnC.style.transform = "translateY(3vw)";
    btnC.style.transition = "all ease 1s";
  });
}else{

    fH2.style.transform = "translateY(-3vw)";
    fH2.style.transition = "all ease 0.5s";
    btnC.style.transform = "translateY(3vw)";
    btnC.style.transition = "all ease 1s";
 
}
