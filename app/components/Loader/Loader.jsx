"use client";

import Lottie from "lottie-react";
import animationData from "../../../public/animations/logo-loader1.json";
import "./loader.css";

export default function Loader({ onLoopComplete }) {
  return (
    <div className="loaderWrapper">

      <div className="loaderContent">
        <Lottie
          animationData={animationData}
          loop={true}
          onLoopComplete={onLoopComplete}
          className="loaderAnimation"
        />
      </div>

    </div>
  );
}