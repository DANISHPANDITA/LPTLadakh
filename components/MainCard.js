import React from "react";
import { Fade } from "react-awesome-reveal";

function MainCard({ CardInfo }) {
  return (
    <div className="font-ubuntu font-semibold flex flex-col lg:flex-row xl:flex-row xxl:flex-row items-center w-11/12 mx-auto bg-gradient-to-r from-slate-100 via-[#87a0bb] to-slate-100 p-2 mt-4 shadow-xl">
      <div className="flex flex-col space-y-4 items-center">
        <Fade delay={2200} triggerOnce={true} cascade damping={0.5}>
          <img
            src={CardInfo.picA}
            className="h-64 w-72 xs:h-32 lg:min-w-[480px] xl:min-w-[480px] xxl:min-w-[480px] rounded-lg mr-4"
            alt=""
          ></img>

          <img
            src={CardInfo.picB}
            className="h-64 xs:h-32 w-auto rounded-lg mr-4"
            alt=""
          ></img>
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
