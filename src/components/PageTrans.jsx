import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";




const PageTrans = () => {

  const isFirstRender =useRef(true)

  // console.log("PageTrans rendered");
  const location = useLocation();

  useEffect(() => {

    if(isFirstRender.current){  
      console.log('first one render')
      isFirstRender.current = false;
    return; 
    }

    
    
      console.log("Routes changed", location.pathname);
    
  }, [location.pathname]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PageTrans;
