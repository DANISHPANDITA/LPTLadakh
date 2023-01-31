import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

function MainCard({ CardInfo }) {
  return (
    <div className="font-ubuntu font-semibold flex flex-col lg:flex-row xl:flex-row xxl:flex-row items-center w-11/12 mx-auto bg-gradient-to-r from-slate-100 via-[#87a0bb] to-slate-100 p-2 mt-4 shadow-xl">
      <div className="flex flex-col space-y-4 items-center">
        <Fade delay={2200} triggerOnce={true} cascade damping={0.5}>
          <Image
            src={CardInfo.picA}
            className="rounded-xl lg:min-w-[480px] xl:min-w-[480px] xxl:min-w-[480px] w-auto"
            width={500}
            height={500}
            alt=""
          />
          <Image
            src={CardInfo.picB}
            className="rounded-xl lg:min-w-[480px] xl:min-w-[480px] xxl:min-w-[480px] w-auto"
            width={500}
            height={500}
            alt=""
          />
        </Fade>
      </div>
      <div>
        <Fade duration={200} triggerOnce={true} delay={2200}>
          <p className="text-justify text-lg md:text-base xs:text-base  mt-1">
            {CardInfo.Info}
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default MainCard;
