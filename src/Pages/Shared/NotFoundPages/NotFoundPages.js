import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../../404-not-found-page.json";

const NotFoundPages = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default NotFoundPages;
