// LocoMotive JS -----

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });
  
  
  // Shery JS -----
  const wdth = window.innerWidth;
  console.log(wdth)
  if (wdth > 1000) {
    Shery.mouseFollower({
      skew: true,
    });
    Shery.makeMagnet(".magnet", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 0.5,
    });
  }


//Menu -----
document.querySelector(".menuBtn").addEventListener("click", function () {
    gsap.to(".menu", {
      zIndex: 1000,
      right: 0,
      opacity: 1,
      borderTopLeftRadius: "0%",
      borderBottomLeftRadius: "0%",
    })
    gsap.to(".menuBtn", {
      zIndex: 1,
    })
  });
  document.querySelector(".close").addEventListener("click", function () {
    gsap.to(".menu", {
      right: "-38%",
      opacity: 0,
      borderTopLeftRadius: "700px",
      borderBottomLeftRadius: "700px",
      ease: "linear",
      zIndex: -1,
    })
    gsap.to(".menuBtn", {
      zIndex: 9999,
    })
  });
  
  
  // Get time -----
  window.addEventListener('load', function () {
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
  
  
  // width < 600
  
  if (wdth <= 600) {
    // 
  }
  