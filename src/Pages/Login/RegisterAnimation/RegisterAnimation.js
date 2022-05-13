import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../../42476-register.json";

const RegisterAnimation = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default RegisterAnimation;
