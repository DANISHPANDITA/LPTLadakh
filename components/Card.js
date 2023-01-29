import React from "react";
import { Fade } from "react-awesome-reveal";
function CardSmall({ img, header, text }) {
  return (
    <div className="font-ubuntu max-w-sm rounded overflow-hidden shadow-xl">
      <Fade bottom triggerOnce={true}>
        <img className="w-full rounded-lg" src={img} alt="Pic" />
      </Fade>
      <div class="px-6 py-4">
        <Fade bottom triggerOnce={true}>
          <div className="font-bold text-center text-xl mb-2 xs:text-base sm:text-base md:text-lg">
            {header}
          </div>
        </Fade>
        <Fade bottom delay={1000} triggerOnce={true}>
          <p className="text-gray-700 text-base text-justify font-semibold xs:text-sm sm:text-sm md:text-sm">
            {text}
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default CardSmall;
