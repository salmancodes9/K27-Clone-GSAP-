// components/AnimPage.jsx
import gsap from "gsap";

function AnimPage(target) {
  console.log("working fine");
  if (!target) return;

  gsap.fromTo(
    target,
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
    },
  );
}

export default AnimPage;
