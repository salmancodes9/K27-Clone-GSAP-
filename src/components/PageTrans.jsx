import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AnimPage from "./AnimPage";

const PageTrans = () => {
  const LDParent = useRef();
  const isFirstRender = useRef(true);

  // console.log("PageTrans rendered");
  const location = useLocation();

  useEffect(() => {
    AnimPage(LDParent.current);
    if (isFirstRender.current) {
       console.log("first one render");
      isFirstRender.current = false;
      return;
    }

    console.log("Routes changed", location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <Outlet />
      <div
        ref={LDParent}
        className="h-screen opacity-0 w-screen  fixed z-10">
        <div className="stick w-1/6 bg-black"></div>
        <div className="stick w-1/4 bg-black"></div>
        <div className="stick w-1/5 bg-black"></div>
        <div className="stick w-1/5 bg-black"></div>
        <div className="stick w-1/5 bg-black">
          <div className="smParent absolute h-10 w-16 bottom-4 right-4 z-20 grid grid-cols-10 overflow-hidden">
            <div className="smLD col-span-2 bg-white"></div>
            <div className="smLD col-span-3 bg-white"></div>
            <div className="smLD col-span-2 bg-white"></div>
            <div className="smLD col-span-3 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTrans;
