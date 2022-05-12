import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../../online-learning.json";

const BannerHeader = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default BannerHeader;

/* import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const BannerHeader = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../online-learning.json"),
    });
  }, []);
  return <div className="container" ref={container}></div>;
};

export default BannerHeader;
 */
