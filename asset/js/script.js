// Mobile Setup for toggling nav-toogle and nav-close classes

const navMenuEl = document.getElementById("nav-menu");

const navCloseEl = document.getElementById("nav-close");

const navToggleEl = document.getElementById("nav-toggle");

if (navToggleEl) {
  navToggleEl.addEventListener("click", () => {
    navMenuEl.classList.add("show-menu");
  });
}

if (navCloseEl) {
  navCloseEl.addEventListener("click", () => {
    navMenuEl.classList.remove("show-menu");
  });
}

// Remove Menu After Selected link Target

const navLinkEl = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  // when we click on any nav-link , it removes show-menu class

  navMenu.classList.remove("show-menu");
};

navLinkEl.forEach((n) => n.addEventListener("click", linkAction));

// Active link

let navlistEl = document.querySelectorAll(".nav-link");

//whenever we click on any link the active class will be added

navlistEl.forEach((listEl) => {
  listEl.addEventListener("click", () => {
    removeActive();
    listEl.classList.add("active");
  });
});

//whenever we click on any current link the active class on the previous link will be removed

function removeActive() {
  navlistEl.forEach((listEl) => {
    listEl.classList.remove("active");
  });
}

// Add Header Shadow

const shadowHeader = () => {
  const header = document.getElementById("header");

  // Add a class if the bottom offset is greater than 50 of the

  window.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};

window.addEventListener("scroll", shadowHeader);

// ACTIVE SECTION

window.addEventListener("scroll", ()=>{

  const sectionsEl = document.querySelectorAll("section[id]");
  
  const scrollDown = window.scrollY;

  sectionsEl.forEach((current) => {
    const sectHeight = current.offsetHeight;
    const sectTop = current.offsetTop - 60;
    const sectId = current.getAttribute("id");
  
    let sectClass = document.querySelector(".nav-list a[href*= " + sectId + "]");
  
    if (scrollDown > sectTop && scrollDown <= sectTop + sectHeight) {
      sectClass.classList.add("active");
    } else {
      sectClass.classList.remove("active");
    }
  });

})

// SHOW SCROLL UP

const scrollUp = () => {
  const scrollUp = document.getElementById("scrollup");

  //when the scroll is higher than 350 viewport height , add the show scroll class
  window.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/* Scroll Reveal */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 300,
  reset: true, // Animation reset
});

// HOME SCROLL REVEAL

sr.reveal(`.home-shape`, { origim: "bottom" });

sr.reveal(`.home-coffee`, { delay: 1000, distance: "200px", duration: 1500 });

sr.reveal(`.home-splash`, { scale: 0, duration: 1500 });

sr.reveal(`.home-bean-1, .home-bean-2`, {
  delay: 2200,
  duration: 1500,
  scale: 0,
  rotate: { z: 100 },
});

sr.reveal(`.home-cube-1, .home-cube-2`, {
  delay: 2600,
  duration: 1500,
  scale: 0,
  rotate: { z: 100 },
});

sr.reveal(`.home-leaf`, {
  delay: 2800,
  duration: 1500,
  scale: 0,
  rotate: { z: 90 },
});

sr.reveal(`.home-title`, {
  delay: 3500,
});

sr.reveal(`.home-data, .home-sticker`, {
  delay: 4000,
});

// POPULAR SCROLL REVEAL

sr.reveal(`.popular-swiper`, { delay: 300 });

//ABOUT SCROLL REVEAL

sr.reveal(`.about-data`, { origin: "left" });

sr.reveal(`.about-images`, { origin: "right" });

sr.reveal(`.about-coffee`, { delay: 1000 });

sr.reveal(`.about-leaf-1, .about-leaf-2`, { delay: 1400, rotate: { z: 90 } });

// PRODUCT SCROLL REVEAL
sr.reveal(`.product-card`, { interval: 100 });

// CONTACT SCROLL REVEAL
sr.reveal(`.contact-shape`, { delay: 600, scale: 0 });

sr.reveal(`.contact-delivery`, { delay: 1200 });

//FOOTER SCROLL REVEAL

sr.reveal(`.footer-container, .footer-copy`);

const swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 32 /* 
slidesPerView: "auto", */,

  breakpoints: {
    1150: {
      spaceBetween: 80,
      slidesPerView: 3,
    },

    600: {
      spaceBetween: 35,
      slidesPerView: 2,
    },
  },
});
