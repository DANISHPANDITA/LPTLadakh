import type { NextPage } from "next";
import Head from "next/head";
import { doc, getDoc } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { db } from "../components/firebase";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MainCard from "../components/MainCard";
import CardSmall from "../components/Card";
import Footer from "../components/Footer";
export default function Home({ SmallCardInfo }:{SmallCardInfo:object}){
  console.log(typeof(SmallCardInfo))
  if (Object.values(SmallCardInfo).length > 0) {
    return (
      <div className="bg-amber-100">
        <Head>
          <title>Ladakh Phanday Tsogspa</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Banner />
        <MainCard />
        <div className="font-nunito flex flex-wrap xs:flex-col xs:space-y-3 xs:items-center sm:space-y-3 sm:items-center sm:flex-col md:space-y-3 md:items-center md:flex-col lg:space-y-3 lg:items-center justify-between px-4 py-2 mt-4 w-11/12 mx-auto">
          <CardSmall
            img={SmallCardInfo.sewa}
            header={SmallCardInfo.sewaheader}
            text={SmallCardInfo.sewainfo}
          />
          <CardSmall
            img={SmallCardInfo.sanskar}
            header={SmallCardInfo.sanskarheader}
            text={SmallCardInfo.sanskarinfo}
          />
          <CardSmall
            img={SmallCardInfo.ekta}
            header={SmallCardInfo.ektaheader}
            text={SmallCardInfo.ektainfo}
          />
        </div>
        <Footer />
      </div>
    );
  }
};
export async function getServerSideProps(context) {
  const docRef = doc(db, "Pics", "SmallCard");
  const docSnap = await getDoc(docRef);
  const smallCardInfo = docSnap.data();
  console.log(smallCardInfo);
  return {
    props: {
      SmallCardInfo: smallCardInfo,
    },
  };
}
