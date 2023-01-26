import React from "react";
import Fade from "react-reveal/Fade";
function CardSmall({ img, header, text }) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-xl">
      <Fade bottom>
        <img class="w-full rounded-lg" src={img} alt="Pic" />
      </Fade>

      <div class="px-6 py-4">
        <Fade bottom>
          <div class="font-bold text-center text-xl mb-2 xs:text-base sm:text-base md:text-lg">
            {header}
          </div>
        </Fade>
        <Fade bottom delay={1000}>
          <p class="text-gray-700 text-base text-justify font-semibold xs:text-xs sm:text-sm md:text-base">
            {text}
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default CardSmall;
