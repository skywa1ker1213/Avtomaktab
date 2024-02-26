gsap.registerPlugin(ScrollTrigger)

// FADE UP EFFECT ON OPEN WINDOW
// const fadeOpen = gsap.timeline({ defaults: { duration: 0.30 } });
// fadeOpen.from(".top__bar", { opacity: 0, y: -100 })
//   .from(".logo", { opacity: 0, y: -100 })
//   .from(".gsap__item1", { opacity: 0, y: -100 })
//   .from(".gsap__item2", { opacity: 0, y: -100 })
//   .from(".gsap__item3", { opacity: 0, y: -100 })
//   .from(".gsap__item4", { opacity: 0, y: -100 })
//   .from(".dropdown", { opacity: 0, y: -100 })


const boxes = gsap.utils.toArray('.animate-up');

boxes.forEach((box, i) => {
  const anim = gsap.fromTo(box, { autoAlpha: 0, y: 100 }, { duration: 1, autoAlpha: 1, y: 0 });
  ScrollTrigger.create({
    trigger: box,
    animation: anim,
    toggleActions: 'play none none none',
    once: true,
  });
});
