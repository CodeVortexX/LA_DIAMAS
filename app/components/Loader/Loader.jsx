"use client";

import Lottie from "lottie-react";
import animationData from "../../../public/animations/logo-loader.json";
import "./loader.css";

export default function Loader() {
  return (
    <div className="loaderWrapper">

      <div className="loaderContent">
        <Lottie
          animationData={animationData}
          loop={true}
          className="loaderAnimation"
        />
      </div>

    </div>
  );
}