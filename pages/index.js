import Head from "next/head";
import { doc, getDoc } from "firebase/firestore/lite";
import React from "react";
import { db } from "../components/firebase";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MainCard from "../components/MainCard";
import CardSmall from "../components/Card";
import Footer from "../components/Footer";
import ReactLoading from "react-loading";

export default function Home({
  Logo,
  SmallCardInfo,
  bannerImgs,
  MainCardData,
}) {
  if (
    Object.values(SmallCardInfo).length > 0 &&
    Object.values(Logo).length > 0 &&
    Object.values(bannerImgs).length > 0 &&
    Object.values(MainCardData).length > 0
  ) {
    return (
      <div className="bg-gradient-to-r from-slate-100 via-orange-200 to-slate-100">
        <Head>
          <title>Ladakh Phanday Tsogspa</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar logo={Logo} />
        <Banner bannerImgs={bannerImgs} />
        <MainCard CardInfo={MainCardData} />
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
  } else {
    return (
      <div className="h-screen w-screen bg-orange-300">
        <ReactLoading type="spokes" color="red" height={667} width={375} />{" "}
      </div>
    );
  }
}
export async function getServerSideProps(context) {
  const docRef = doc(db, "Pics", "SmallCard");
  const docRef1 = doc(db, "Pics", "Logo");
  const docRef2 = doc(db, "Pics", "Banner");
  const docRef3 = doc(db, "Pics", "MainCard");

  const docSnap = await getDoc(docRef);
  const docSnap1 = await getDoc(docRef1);
  const docSnap2 = await getDoc(docRef2);
  const docSnap3 = await getDoc(docRef3);

  const smallCardInfo = docSnap.data();
  const Logo = docSnap1.data();
  const bannerImgs = docSnap2.data();
  const MainCardData = docSnap3.data();

  return {
    props: {
      SmallCardInfo: smallCardInfo,
      Logo: Logo,
      bannerImgs: bannerImgs,
      MainCardData: MainCardData,
    },
  };
}
