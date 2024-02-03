// LocoMotive JS -----

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});


// Shery JS -----

Shery.mouseFollower({
  skew: true,
});

Shery.makeMagnet(".magnet", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});



// Script -----

//Text Scrolling --- 
let currentScroll = 0;
let isScrollingDown = true;
let arrows = document.querySelectorAll(".arrow");

let tween = gsap
  .to(".marqpart", {
    xPercent: -100,
    repeat: -1,
    duration: 10,
    ease: "linear",
  })
  .totalProgress(0.5);

gsap.set(".marqinner", {
  xPercent: -100,
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > currentScroll) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }

  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1,
  });

  currentScroll = window.pageYOffset;

});

//Menu -----
document.querySelector(".menuBtn").addEventListener("click", function() {
  gsap.to(".menu", {
    zIndex: 1000,
    right : 0,
    opacity: 1,
    borderTopLeftRadius: "0%",
    borderBottomLeftRadius: "0%",
    transition: "ease 0.05s"
  })
});
document.querySelector(".close").addEventListener("click", function() {
  gsap.to(".menu", {
    right : "-38%",
    borderTopLeftRadius: "700px",
    borderBottomLeftRadius: "700px",
    ease: "linear"
  })
});

//Work Image showing ---
document.querySelectorAll(".elem").forEach(function (elem) {
  let rotate = 0;
  let diffrot = 0;

  elem.addEventListener("mousemove", function (dets) {
    let diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8),
    });
    gsap.to(elem.querySelector("a"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8),
    });
  });
  elem.addEventListener("mouseleave", function () {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power1,
    });
  });
  elem.addEventListener("mouseleave", function () {
    gsap.to(elem.querySelector("a"), {
      opacity: 0,
      ease: Power3,
    });
  });

})

// Get time -----
window.addEventListener('load', function() {
  function addZ(num) {
    return num < 10 ? `0${num}` : num;
  }

  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = today.getDate();
  let hours = addZ(today.getHours());
  let minutes = addZ(today.getMinutes());
  let seconds = addZ(today.getSeconds());

  let current_time = `${hours}:${minutes}:${seconds}`;
  time.innerHTML = current_time;

})
let time = document.querySelector(".time");
let timeBtn = document.querySelector(".clickTime");

timeBtn.addEventListener("click", function () {
  function addZ(num) {
    return num < 10 ? `0${num}` : num;
  }

  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = today.getDate();
  let hours = addZ(today.getHours());
  let minutes = addZ(today.getMinutes());
  let seconds = addZ(today.getSeconds());

  let current_time = `${hours}:${minutes}:${seconds}`;
  time.innerHTML = current_time;

})