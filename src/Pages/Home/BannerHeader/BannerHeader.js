import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../../online-learning .json";

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
