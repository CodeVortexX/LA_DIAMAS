"use client";

import Lottie from "lottie-react";
import animationData from "../../../public/animations/logo-loader1.json";
import "./loader.css";

export default function Loader({ onComplete }) {
  return (
    <div className="loaderWrapper">
      <div className="loaderContent">
        <Lottie
          animationData={animationData}
          loop={false} // 🔥 IMPORTANT
          onComplete={onComplete} // 🔥 use this instead
          className="loaderAnimation"
        />
      </div>
    </div>
  );
}