import React from "react";

const Video = () => {
  return (
    <div className=" w-full h-full">
      <video
        src="/home-hro-vid.mp4"
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
};

export default Video;
