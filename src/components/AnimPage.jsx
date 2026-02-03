// components/AnimPage.jsx
import gsap from "gsap";
import PageTrans from "./PageTrans";
import { Repeat } from "lucide-react";
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";

// gsap.registerPlugin(CSSRulePlugin);

function AnimPage(target) {
  console.log("AnimPage called", target);
  if (!target) return null;
  // const LDParent = target.querySelector(".LDParent")
  const sticks = target.querySelectorAll(".stick");
  const smLD = target.querySelectorAll(".smLD");
  // const smParent = target.querySelector(".smParent");
  // console.log("sticks found", sticks.length);
  // console.log("smLD found", smlds.length);
  // console.log("smParent found", smParent);



  // const tl = gsap.timeline({
  //   onStart: () => console.log("Animation started"),
  //   onComplete: () => console.log("Animation completed"),
  // });
 gsap.set(target, { opacity: 1,duration:"4", pointerEvents: "none" });
      gsap.set(sticks, { scaleX: 1, opacity: 1 });
          gsap.set(smLD, { y: 0, opacity: 1 });



          

 const tl =gsap.timeline({
    delay: 0.9,
    defaults: {immediateRender: false},
  });


  
  tl.from(sticks,{
    y: "-100%",
    stagger: 0.08,
    duration: 0.4,
    ease: "power3.out",
    
  });
 


  tl.from(smLD,{
     y: "100%",
      stagger: 0.1,
      duration: 0.3,



  },"-=0.2");

   tl.to(target, {
    opacity: 0,
    duration: 0.3,
    onComplete: () => {
      gsap.set(target, { pointerEvents: "none" });
    },
  });
  return tl;
}


  












  // const tl2 = gsap.timeline();
  // tl.to(".LDParent",{
  //    display: 'flex',
  //     duration: 0.1,
  //     opacity: 1,

  // })
  // tl2.from('.smLD',{
  //   y: '90%',
  //   duration: 0.2,
  //   stagger: -0.1,
  // })
  //     tl2.to('.smLD', {
  //     y: '90%',
  //     duration: 0.2,
  //     stagger: -0.1
  //   });

  //   tl.from('.stick', {
  //     y: '-100%',
  //     stagger: -0.08,
  //     duration: 0.2
  //   });

  //    tl.to('.smParentLD', {
  //     opacity: 0,
  //   });

  //   tl.to('.stick', {
  //     y: '100%',
  //     stagger: -0.08,
  //     duration: 0.2
  //   });

  //   tl.to(LDParent.current, {
  //     display: 'none',
  //     opacity: 0
  //   });
// }

export default AnimPage;
