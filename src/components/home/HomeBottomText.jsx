import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const HomeBottomText = () => {
  // const navigate = useNavigate();

  // const [isExiting, setIsExiting] = useState(false);

  return (
    <div className="font-[fontM5] flex gap-5 text-white self-center  pb-5 ">
      <button
        onClick={() => ""}
        className="text-[5.5vw] hover:text-[#d3fd50] cursor-pointer hover:border-[#d3fd50] uppercase border-3 border-white rounded-full px-7 leading-[4.5vw] pt-5"
      >
        Work
      </button>

      <button                            //here i have used an state with settime out it will wait according to the settimeout  
        onClick={() => {
          // setIsExiting(true);
          // console.log(setIsExiting);
          // setTimeout(() => {
            onNavigate("/agence");
            // alert("page routing");
          // }, 3000);
        }}
        // onClick  ={() => navigate("/agence")}
        className="text-[5.5vw] hover:text-[#d3fd50] cursor-pointer hover:border-[#d3fd50] uppercase border-3 border-white rounded-full px-8 leading-[4.5vw] pt-5"
      >
        Agence
        {/* {isExiting ? "loading" : "agence"} */}
      </button>
    </div>
  );
};

export default HomeBottomText;
