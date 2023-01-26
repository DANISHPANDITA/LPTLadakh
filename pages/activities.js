import { doc, getDoc } from "firebase/firestore/lite";
import Head from "next/head";
import React, { useEffect, useState } from "react";
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
        <img src={BG.Bg} className="h-28 w-3/4 mx-auto mt-6 xs:h-20" alt="" />
        <p className="font-nunito text-center text-5xl text-gray-800  font-extrabold -mt-20 xs:text-2xl xs:-mt-12">
          OUR RECENT ACTIVITIES
        </p>
        <div className="bg-gray-100 p-4 text-lg mt-16 mb-4 font-nunito flex flex-col space-y-3 text-justify w-10/12 mx-auto text-gray-800 font-semibold xs:text-base sm:text-base md:text-base">
          {Object.values(ACTIVITIES).map((activity) => (
            <p>{activity}</p>
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
