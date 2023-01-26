import { doc, getDoc } from "firebase/firestore/lite";
import Head from "next/head";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { db } from "../components/firebase";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function Activities({ BG, ACTIVITIES }) {
  if (Object.values(ACTIVITIES).length > 0 && Object.values(BG).length > 0) {
    return (
      <div>
        <Head>
          <title>Activities</title>
        </Head>
        <Navbar />
        <Fade top triggerOnce={true}>
          <img src={BG.Bg} className="h-28 w-3/4 mx-auto mt-6 xs:h-20" alt="" />
          <p className="font-nunito text-center text-5xl text-gray-800  font-extrabold -mt-20 xs:text-base sm:text-3xl lg:md:text-2xl md:text-2xl xs:-mt-12">
            OUR RECENT ACTIVITIES
          </p>
        </Fade>

        <div className="bg-gray-100 p-4 text-lg mt-16 mb-4 font-nunito flex flex-col space-y-3 text-justify w-10/12 mx-auto text-gray-800 font-semibold xs:text-xs sm:text-base md:text-base">
          {Object.values(ACTIVITIES).map((activity) => (
            <Fade cascade damping={0.3} triggerOnce={true}>
              <p>&#8226; {activity}</p>
            </Fade>
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}
export default Activities;
export async function getServerSideProps(context) {
  const docRef = doc(db, "Pics", "ActivitiesBg");
  const docSnap = await getDoc(docRef);
  const bg = docSnap.data();
  const docRef1 = doc(
    db,
    "Pics",
    "ActivitiesBg",
    "Activities",
    "HuWDoUwQbIwpkdfrd9ii"
  );
  const docSnap1 = await getDoc(docRef1);
  const Activities = docSnap1.data();
  return {
    props: {
      BG: bg,
      ACTIVITIES: Activities,
    },
  };
}
