// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

// menuIcon.onclick = () => {
//   navbar.classList.toggle('active');
// }



// VanillaTilt.init(document.querySelector(".card"), {
//   max: 25,
//   speed: 300
// });


// VanillaTilt.init(document.querySelectorAll(".card"));


// // Testimonials section
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   grabCursor: true,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
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



//counting section

const counters = document.querySelectorAll(".counter span");
const container = document.querySelector(".counters-container");

let activated = false;

window.addEventListener("scroll", () => {
  if (pageYOffset > container.offsetTop - container.offsetHeight - 400 && activated == false) {
    counters.forEach(counter => {
      counter.innerText = 0;
      let count = 0;

      function updateCount() {
        const target = parseInt(counter.dataset.count);

        if (count < target) {
          count++;

          counter.innerText = count;
          setTimeout(updateCount, 5);
        } else {
          counter.innerText = target;
        }
      }
      updateCount();

      activated = true;
    });

  } else if (pageYOffset < container.offsetTop - container.offsetHeight - 500 || pageYOffset === 0 && activated === true) {
    counters.forEach(counter => {
      counter.innerText = 0;
    });
    activated = false;
  }
});