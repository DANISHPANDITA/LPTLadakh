import { doc, getDoc } from "firebase/firestore/lite";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { db } from "../components/firebase";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function Activities() {
  const [Bg, setBg] = useState({});
  const [Activities, setActivities] = useState({});
  useEffect(() => {
    const fetchLinks = async () => {
      const docRef = doc(db, "Pics", "ActivitiesBg");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBg(docSnap.data());
      } else {
        alert("There is a problem with this page.");
      }
      const docRef1 = doc(
        db,
        "Pics",
        "ActivitiesBg",
        "Activities",
        "HuWDoUwQbIwpkdfrd9ii"
      );
      const docSnap1 = await getDoc(docRef1);
      if (docSnap1.exists()) {
        setActivities(docSnap1.data());
      } else {
        alert("There is a problem with this page.");
      }
    };
    fetchLinks();
  }, []);
  const activities = Object.values(Activities);
  return (
    <div>
      <Head>
        <title>Activities</title>
      </Head>
      <Navbar />
      <img src={Bg.Bg} className="h-28 w-3/4 mx-auto mt-6 xs:h-20" alt="" />
      <p className="font-nunito text-center text-5xl text-gray-800  font-extrabold -mt-20 xs:text-2xl xs:-mt-12">
        OUR RECENT ACTIVITIES
      </p>
      <div className="bg-gray-100 p-4 text-lg mt-16 mb-4 font-nunito flex flex-col space-y-3 text-justify w-10/12 mx-auto text-gray-800 font-semibold xs:text-base sm:text-base md:text-base">
        {activities.map((activity) => (
          <p>{activity}</p>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Activities;
