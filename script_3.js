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

const ab1 = document.querySelector(".ab-h3");
const ab2 = document.querySelector(".ab-span");
const imgSection = document.querySelector(".img-section"); //?N
const secChild_1 = document.querySelector(".section-child-1"); //?N
const ab_1 = document.querySelectorAll(".ab-h3_1"); //!M
const ab_2 = document.querySelectorAll(".ab-span_2"); //!M
const mEnt = document.querySelector("#mEnter"); //!M
const its_1 = document.querySelector("#its_1"); //T
const its_2 = document.querySelector("#its_2"); //T
const scale = document.querySelectorAll(".con-box"); //Sl
const sec3 = document.querySelector(".section-3"); //?S3
const box01 = document.querySelectorAll(".boxes-01"); //?S3
function imageTarget() {

  if(window.innerWidth > 600){
   
    secChild_1.addEventListener("mouseenter", () => {
      setTimeout(() => {
        imgSection.style.scale = "1";
      }, 100);
      setTimeout(() => {
        its_1.style.transform = "translateX(0)";
      }, 50);
      setTimeout(() => {
        its_2.style.transform = "translateX(0)";
      }, 50);
    });
  }else{
   
    setTimeout(() => {
      imgSection.style.scale = "1";
    }, 100);
    setTimeout(() => {
      its_1.style.transform = "translateX(0)";
    }, 50);
    setTimeout(() => {
      its_2.style.transform = "translateX(0)";
    }, 50);
  }
 
}

function callBack() {
  setTimeout(() => {
    ab1.style.left = "0vw";
  }, 200);
  setTimeout(() => {
    ab2.style.right = "0vw";
  }, 400);
}

function callBack_2() {
  if(window.innerWidth > 600){
    mEnt.addEventListener("mouseenter", () => {
      setTimeout(() => {
        ab_1.forEach((e) => {
          e.style.transform = "translateX(0)";
        });
      }, 200);
  
      setTimeout(() => {
        ab_2.forEach((a) => {
          a.style.transform = "translateY(0)";
        });
  
        scale.forEach((e) => {
          e.style.scale = "1";
        });
      }, 400);
    });
  }else{
    setTimeout(() => {
      ab_1.forEach((e) => {
        e.style.transform = "translateX(0)";
      });
    }, 200);

    setTimeout(() => {
      ab_2.forEach((a) => {
        a.style.transform = "translateY(0)";
      });

      scale.forEach((e) => {
        e.style.scale = "1";
      });
    }, 400);
  }

}

imageTarget();
callBack();
callBack_2();

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
