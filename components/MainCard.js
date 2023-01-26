import { doc, getDoc } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { Fade, Slide } from "react-awesome-reveal";

function MainCard() {
  const [CardInfo, setCardInfo] = useState({});
  useEffect(() => {
    const fetchLinks = async () => {
      const docRef = doc(db, "Pics", "MainCard");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCardInfo(docSnap.data());
      } else {
        alert("There is a problem with this page.");
      }
    };
    fetchLinks();
  }, []);
  return (
    <div className="font-nunito font-semibold flex flex-col lg:flex-row xl:flex-row xxl:flex-row items-center w-11/12 mx-auto bg-gradient-to-r from-slate-100 via-[#475f78] to-slate-100 p-2 mt-4 shadow-xl">
      <div className="flex flex-col space-y-4 items-center">
        <Slide cascade damping={0.5}>
          <img
            src={CardInfo.picA}
            className="h-64 w-auto xs:h-32 lg:min-w-[480px] xl:min-w-[480px] xxl:min-w-[480px] rounded-lg mr-4"
            alt=""
          ></img>

          <img
            src={CardInfo.picB}
            className="h-64 xs:h-32 w-auto rounded-lg mr-4"
            alt=""
          ></img>
        </Slide>
      </div>
      <div>
        <Fade delay={1500}>
          <p className="text-justify text-base xs:text-sm  mt-1">
            {CardInfo.Info}
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default MainCard;
