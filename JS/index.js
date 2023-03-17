let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
}



VanillaTilt.init(document.querySelector(".card"), {
  max: 25,
  speed: 300
});


VanillaTilt.init(document.querySelectorAll(".card"));


// Testimonials section
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
