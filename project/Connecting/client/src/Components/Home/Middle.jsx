import React from "react";
import background_video from "../../assets/backgroundVideo.mp4";
import "./Middle.css";

const Middle = () => {
  return (
    <div className="middle">
      <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          marginTop: "120px",
          clipPath: "inset(0 0 26% 0)",
        }}
      >
        <source src={background_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>

        <div className="middle-text">
          <h1>We bring thoughtful food makers and retailers together.</h1>
          <p className="box-text">
            We partner with foodservice suppliers and retailers of all sizes to
            spread the joy of Southern Ontario’s best specialty food products.
          </p>
        </div>
      </div>
   
  );
};

export default Middle;
