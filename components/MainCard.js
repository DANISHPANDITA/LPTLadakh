import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

function MainCard({ CardInfo }) {
  return (
    <div className="font-ubuntu font-semibold flex flex-col lg:flex-row xl:flex-row xxl:flex-row items-center w-11/12 mx-auto bg-gradient-to-r from-slate-100 via-[#87a0bb] to-slate-100 p-2 mt-4 shadow-xl">
      <div className="flex flex-col space-y-4 items-center lg:mr-4 xl:mr-4 xxl:mr-4">
        <Fade delay={2200} triggerOnce={true} cascade damping={0.5}>
          <div className="relative xs:w-[250px] lg:w-[480px] xl:w-[480px] xxl:w-[480px] w-[320x]">
            <Image
              className="rounded-xl"
              src={CardInfo.picA}
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="relative xs:w-[250px] lg:w-[480px] xl:w-[480px] xxl:w-[480px] w-[360px]">
            <Image
              className="rounded-xl"
              src={CardInfo.picB}
              width={500}
              height={500}
              alt=""
            />
          </div>
        </Fade>
      </div>
      <div>
        <Fade duration={200} triggerOnce={true} delay={2200}>
          <p className="text-justify text-lg md:text-base xs:text-sm  mt-1">
            {CardInfo.Info}
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default MainCard;
