import { doc, getDoc } from "firebase/firestore/lite";
import Head from "next/head";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { db } from "../components/firebase";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Activities({ ACTIVITIES, Logo }) {
  return (
    <div className="font-ubuntu">
      <Head>
        <title>Activities</title>
      </Head>
      <Navbar logo={Logo} />
      <Fade delay={2000} top triggerOnce={true}>
        <p className="bg-bg font-ubuntu w-9/12 mx-auto text-center text-4xl py-4 mt-8 text-gray-800  font-extrabold  xs:text-2xl">
          OUR RECENT ACTIVITIES
        </p>
      </Fade>
      <Fade delay={2300} triggerOnce={true}>
        <div className="bg-gray-100 p-4 text-lg mt-4 mb-4 flex flex-col space-y-3 text-justify w-10/12 mx-auto text-gray-800 font-semibold xs:text-sm sm:text-base md:text-base">
          {Object.values(ACTIVITIES).map((activity) => (
            <Fade cascade damping={0.3} triggerOnce={true}>
              <p>&#8226; {activity}</p>
            </Fade>
          ))}
        </div>
      </Fade>
      <Footer />
    </div>
  );
}
export default Activities;
export async function getServerSideProps(context) {
  const docRef1 = doc(
    db,
    "Pics",
    "ActivitiesBg",
    "Activities",
    "HuWDoUwQbIwpkdfrd9ii"
  );
  const docRef2 = doc(db, "Pics", "Logo");

  const docSnap1 = await getDoc(docRef1);
  const docSnap2 = await getDoc(docRef2);

  const Activities = docSnap1.data();
  const logo = docSnap2.data();
  return {
    props: {
      Logo: logo,
      ACTIVITIES: Activities,
    },
  };
}
