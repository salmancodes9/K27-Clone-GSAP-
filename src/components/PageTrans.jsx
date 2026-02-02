import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AnimPage from "./AnimPage";

const PageTrans = () => {
  const LDParent = useRef();
  const isFirstRender = useRef(true);

  // console.log("PageTrans rendered");
  const location = useLocation();

  useEffect(() => {
    if (isFirstRender.current) {
      AnimPage(LDParent.current);
      console.log("first one render");
      isFirstRender.current = false;
      return;
    }

    // AnimPage(LDParent.current);
    console.log("Routes changed", location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <div
        ref={LDParent}
        className="h-screen w-screen fixed z-50 pointer-events-none flex">
        <div className="stick w-1/6 h-screen bg-black"></div>
        <div className="stick w-1/4 h-screen bg-black"></div>
        <div className="stick w-1/5 h-screen bg-black"></div>
        <div className="stick w-1/5 h-screen bg-black"></div>
        <div className="stick w-1/5 h-screen bg-black relative">
          <div className="smParent absolute h-10 w-16 bottom-4 right-4 z-20 grid grid-cols-10 overflow-hidden">
            <div className="smLD col-span-2 bg-white"></div>
            <div className="smLD col-span-3 bg-white"></div>
            <div className="smLD col-span-2 bg-white"></div>
            <div className="smLD col-span-3 bg-white"></div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default PageTrans;
