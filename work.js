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
  
  
//Menu -----
document.querySelector(".menuBtn").addEventListener("click", function() {
    gsap.to(".menu", {
      zIndex: 1000,
      right : 0,
      opacity: 1,
      borderTopLeftRadius: "0%",
      borderBottomLeftRadius: "0%",
      transition: "ease 0.05s"
    });
});
document.querySelector(".close").addEventListener("click", function() {
    gsap.to(".menu", {
      right : "-38%",
      borderTopLeftRadius: "700px",
      borderBottomLeftRadius: "700px",
      ease: "linear"
    })
});
  
// ---- hover