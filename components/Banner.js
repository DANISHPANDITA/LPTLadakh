import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function Banner({ bannerImgs }) {
  const Bannerimg = Object.values(bannerImgs);
  return (
    <div className="bg-gradient-to-r from-slate-100 via-orange-200 to-slate-100">
      <Carousel
        infiniteLoop={true}
        interval={1200}
        autoPlay={true}
        autoFocus={true}
        showThumbs={false}
        showStatus={false}
      >
        {Bannerimg.map((bb) => (
          <div
            key={Bannerimg.indexOf(bb)}
            className="w-full h-[620px] xs:h-[250px] sm:h-[380px] md:h-[420px] mx-auto mt-1 rounded-lg"
          >
            <Image src={bb} width={500} height={500} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
