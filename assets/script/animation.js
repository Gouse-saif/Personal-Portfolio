// ======= Scroll Reveal Animation =======
const sr = ScrollReveal({
  // origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
  mobile: true,
});


// Scroll For Home
sr.reveal(".one", { delay: 200, origin: "bottom" });
sr.reveal(".two", { delay: 400, origin: "top" });
sr.reveal(".three", { delay: 200, origin: "bottom" });

// Scroll For About
sr.reveal(".folded1", { delay: 200, origin: "bottom" });
sr.reveal(".folded2", { delay: 400, origin: "bottom" });
sr.reveal(".folded3", { delay: 600, origin: "bottom" });

// Scroll For Skills
sr.reveal(".professional__container", { delay: 200, origin: "top" });
// sr.reveal(".skill__content__container", { delay: 400, origin: "top" });


// Scroll For Services
sr.reveal(".service__card1", { delay: 200, scale:0.1});
sr.reveal(".service__card2", { delay: 200, scale:0.1 });
sr.reveal(".service__card3", { delay: 200, scale:0.1 });

// Scroll For Contact
sr.reveal(".gmail__container", { delay: 800, origin: "top" });
sr.reveal(".whatsapp__container", { delay: 500, origin: "top" });
sr.reveal(".telegram__container", { delay: 200, origin: "top" });
sr.reveal(".form__container", { delay: 200, scale:0.1 });