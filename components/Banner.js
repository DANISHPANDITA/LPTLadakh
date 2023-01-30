import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Fade } from "react-awesome-reveal";

function Banner({ bannerImgs }) {
  const Bannerimg = Object.values(bannerImgs);
  return (
    <div className="bg-gradient-to-r from-slate-100 via-orange-200 to-slate-100">
      <Fade bottom delay={2000} triggerOnce={true}>
        <Carousel
          infiniteLoop={true}
          interval={1200}
          autoPlay={true}
          autoFocus={true}
          showThumbs={false}
          showStatus={false}
        >
          {Bannerimg.map((bb) => (
            <div>
              <img
                key={Bannerimg.indexOf(bb)}
                src={bb}
                className="w-[500px] h-[620px] xs:h-[250px] sm:h-[380px] md:h-[420px] mx-auto mt-1 rounded-lg"
                alt=""
              />
            </div>
          ))}
        </Carousel>
      </Fade>
    </div>
  );
}

export default Banner;
