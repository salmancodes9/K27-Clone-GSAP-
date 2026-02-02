// components/AnimPage.jsx
import gsap from "gsap";
import PageTrans from "./PageTrans";
import { Repeat } from "lucide-react";
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";

// gsap.registerPlugin(CSSRulePlugin);

function AnimPage(target) {
  console.log("AnimPage called", target);
  if (!target) return;
  const LDParent = target.querySelector(".LDParent")
  const sticks = target.querySelectorAll(".stick");
  const smlds = target.querySelectorAll(".smLD");
  const smParent = target.querySelector(".smParent");
  console.log("sticks found", sticks.length);
  console.log("smLD found", smlds.length);
  console.log("smParent found", smParent);

  // // Reset the overlay to visible state (black screen)
  // gsap.set(target, { opacity: 1, pointerEvents: "none" });

  // // Reset sticks to full scale (fully visible black tiles)
  // gsap.set(sticks, { scaleX: 1, opacity: 1 });
  // // Reset smlds to starting position
  // gsap.set(smlds, { y: 0, opacity: 1 });

  const tl = gsap.timeline({
    onStart: () => console.log("Animation started"),
    onComplete: () => console.log("Animation completed"),
  });

  // const tl2 = gSAP.timeline(( repeat: -1 ))
  const tl2 = gsap.timeline();
  tl.to(".LDParent",{
     display: 'flex',
      duration: 0.1,
      opacity: 1,

  })

  
  
 




 

  
}

export default AnimPage;
