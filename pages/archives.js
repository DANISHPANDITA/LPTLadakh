import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../components/firebase";
import img from "../img/activities_back.jpg";
import Head from "next/head";
function Archives({ pics }) {
  var ArchivePicsArr = Object.values(pics);
  if (ArchivePicsArr.length > 0) {
    return (
      <div className="bg-gray-200">
        <Head>
          <title>Archives</title>
        </Head>
        <Navbar />
        <img src={img.src} className="h-28 w-3/4 mx-auto mt-6 xs:h-20" alt="" />
        <p className="font-nunito text-center text-5xl text-gray-800  font-extrabold -mt-20 xs:text-2xl xs:-mt-12">
          GALLERY
        </p>
        <div className="flex flex-wrap min-w-[150px] justify-between p-5 space-y-4 mt-12">
          {ArchivePicsArr.map((pic) => (
            <img className="h-96 w-auto" src={pic} alt="" />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Archives;
export async function getServerSideProps(context) {
  const docRef = doc(db, "Pics", "JqameTrvXjXwfGfUxDTy");
  const docSnap = await getDoc(docRef);
  const ArchivePics = docSnap.data();
  return {
    props: {
      pics: ArchivePics,
    },
  };
}
