import React from "react";
import featureBg from "../assets/features-bg.jpg";

const Features = () => {
  return (
    <div className="relative py-6">
      <div className="relative top-0 left-0 w-full h-full">
        <img
          src={featureBg}
          alt=""
          className="bg-primary w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 object"></div>
      </div>

      <div className="absolute top-10 left-0 w-full">
        <div className="container">
            d
        </div>
      </div>
    </div>
  );
};

export default Features;
