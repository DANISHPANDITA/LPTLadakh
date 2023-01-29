import { doc, getDoc } from "firebase/firestore/lite";
import Head from "next/head";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { db } from "../components/firebase";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function Activities({ BG, ACTIVITIES, Logo }) {
  if (
    Object.values(ACTIVITIES).length > 0 &&
    Object.values(BG).length > 0 &&
    Object.values(Logo).length > 0
  ) {
    return (
      <div>
        <Head>
          <title>Activities</title>
        </Head>
        <Navbar logo={Logo} />
        <Fade delay={2000} top triggerOnce={true}>
          <img src={BG.Bg} className="h-28 w-3/4 mx-auto mt-6 xs:h-20" alt="" />
          <p className="font-nunito text-center text-5xl text-gray-800  font-extrabold -mt-20 xs:text-base sm:text-3xl lg:md:text-2xl md:text-2xl xs:-mt-12">
            OUR RECENT ACTIVITIES
          </p>
        </Fade>

        <div className="bg-gray-100 p-4 text-lg mt-16 mb-4 font-nunito flex flex-col space-y-3 text-justify w-10/12 mx-auto text-gray-800 font-semibold xs:text-sm sm:text-base md:text-base">
          {Object.values(ACTIVITIES).map((activity) => (
            <Fade delay={2200} cascade damping={0.3} triggerOnce={true}>
              <p>&#8226; {activity}</p>
            </Fade>
          ))}
        </div>

        <Footer />
      </div>
    );
  } else {
    return (
      <div className="h-screen w-screen">
        <ReactLoading type="spokes" color="red" height={667} width={375} />{" "}
      </div>
    );
  }
}
export default Activities;
export async function getServerSideProps(context) {
  const docRef = doc(db, "Pics", "ActivitiesBg");
  const docRef1 = doc(
    db,
    "Pics",
    "ActivitiesBg",
    "Activities",
    "HuWDoUwQbIwpkdfrd9ii"
  );
  const docRef2 = doc(db, "Pics", "Logo");

  const docSnap = await getDoc(docRef);
  const docSnap1 = await getDoc(docRef1);
  const docSnap2 = await getDoc(docRef2);

  const bg = docSnap.data();
  const Activities = docSnap1.data();
  const logo = docSnap2.data();
  return {
    props: {
      Logo: logo,
      BG: bg,
      ACTIVITIES: Activities,
    },
  };
}
