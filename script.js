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

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const h1 = document.querySelector("h1");
const myH2 = document.querySelector(".m-h2");
const head = document.querySelector("header");
const mImg = document.querySelector(".main-img");
const myWork = document.querySelector(".myWork");
function mainTime() {
  setTimeout(() => {
    h1.style.left = "0vw";
  }, 500);

  setTimeout(() => {
    myH2.style.bottom = "0vw";
  }, 400);

  setTimeout(() => {
    head.style.bottom = "0vw";
    mImg.style.scale = "1";
  }, 100);

  setTimeout(() => {
    myWork.style.left = "0";
  }, 1000);
}
mainTime();

// 


const sec3 = document.querySelector(".section-3"); //?S3
const box01 = document.querySelectorAll(".boxes-01"); //?S3

function callBack_3() {
  if(window.innerWidth > 600){
    sec3.addEventListener("mouseenter", () => {
      box01.forEach((call) => {
        call.style.transform = "scaleY(1)";
      });
    });
  }else{
    box01.forEach((call) => {
      call.style.transform = "scaleY(1)";
    });
  }
}

callBack_3();