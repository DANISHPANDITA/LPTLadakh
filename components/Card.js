import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

function CardSmall({ img, header, text }) {
  return (
    <div className="font-ubuntu max-w-sm rounded overflow-hidden shadow-xl">
      <Fade bottom triggerOnce={true}>
        <Image
          className="rounded-lg mx-auto hover:opacity-80 hover:scale-105 transition duration-300 ease-in-out"
          src={img}
          width={350}
          height={300}
          alt="Pic"
        />
      </Fade>
      <div className="px-6 py-4">
        <Fade bottom triggerOnce={true}>
          <div className="font-bold text-center text-xl mb-2 xs:text-base sm:text-base md:text-lg">
            {header}
          </div>
        </Fade>
        <Fade bottom delay={500} triggerOnce={true}>
          <p className="text-gray-700 text-base text-justify font-semibold xs:text-sm sm:text-sm md:text-sm">
            {text}
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default CardSmall;
