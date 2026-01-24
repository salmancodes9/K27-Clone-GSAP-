import React from "react";

const HomeBottomText = () => {
  return (
    <div className="font-[fontM5] flex gap-5 text-white self-center  pb-5 ">
      <button className="text-[5.5vw] hover:text-[#d3fd50] cursor-pointer hover:border-[#d3fd50] uppercase border-3 border-white rounded-full px-7 leading-[4.5vw] pt-5">
        Work
      </button>
      <button className="text-[5.5vw] hover:text-[#d3fd50] cursor-pointer hover:border-[#d3fd50] uppercase border-3 border-white rounded-full px-8 leading-[4.5vw] pt-5">
        Agence
      </button>
    </div>
  );
};

export default HomeBottomText;
