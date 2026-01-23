import React, { useEffect } from "react";
// import { useEffect } from "react";
import Video from "./Video";
import { useGSAP } from "@gsap/react";

import gsap from 'gsap';

const HomeHeroText = () => {
useEffect(()=>{
  const ctx = gsap.context(()=>{

    const tl =gsap.timeline();
    tl.from(".hero-line",{
      y:-60,  //here we are fixing the error of timeline 
      // opacity: 0,
      // duration: 0.6,
      // stagger:0.15,


    })
  })

})


  // useEffect(()=>{
    
  // },[]);
useGSAP(()=>{
  gsap.to(".hero-line",{
    y:1000, 
    duration:9 ,
    delay:4
  })
})







  return (
    <>
    <h1 className="absolute text-white bg-amber-0">
      <svg viewBox="0 0 350 120" xmlns="http://www.w3.org/2000/svg" fill="white" className="w-32 h-15 p-2">
        <path d="M10 10 h25 v100 h-25 z" />
        <path d="M45 10 h30 l-25 45 h-15 z" />
        <path d="M50 65 l25 45 h-30 l-15 -30 z" />
        <path d="M100 10 h70 v25 l-35 75 h-25 l35 -75 h-45 z" />
        <path d="M190 10 h70 v40 h-45 v10 h45 v50 h-70 v-40 h45 v-10 h-45 z" />
      </svg>
    </h1>
      <div   className="  font-fontM3  flex flex-col items-center text-white   ">
        <div className="hero-line text-[10vw] uppercase leading-[8vw]">
          THE SPARK FOR
        </div>

        <div className="hero-line text-[9.5vw] uppercase leading-[9vw] flex items-center  justify-center gap-1 ">
          ALL
          <div className=" h-[7vw] mt-4 w-[17vw] rounded-full overflow-hidden gap-1">
            <Video />
          </div>
          THINGS
        </div>
        <div className="hero-line text-[10vw]  leading-[9vw]">CREATIVE</div>
      </div>
    </>
  );
};

export default HomeHeroText;
