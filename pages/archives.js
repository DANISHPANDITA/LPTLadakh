import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../components/firebase";
import Head from "next/head";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

function Archives({ pics, Logo, BG }) {
  var ArchivePicsArr = Object.values(pics);
  return (
    <div
      style={{ fontFamily: "Signika Negative" }}
      className="bg-gradient-to-r from-slate-100 via-[#87a0bb] to-slate-100"
    >
      <Head>
        <title>Archives</title>
      </Head>
      <Navbar logo={Logo} />
      <Fade delay={2000} top triggerOnce={true}>
        <p className="bg-bg w-9/12 mx-auto text-center text-4xl py-4 mt-8 text-gray-800  font-extrabold  xs:text-2xl">
          GALLERY
        </p>
      </Fade>
      <Fade delay={2200} cascade damping={0.7}>
        <div className="flex flex-wrap min-w-[150px] justify-between p-5 space-y-4 mt-2 xs:flex-col xs:items-center sm:flex-col sm:items-center ">
          {ArchivePicsArr.map((pic) => (
            <Image
              key={ArchivePicsArr.indexOf(pic)}
              src={pic}
              width={400}
              height={300}
              alt="Pic"
            />
          ))}
        </div>
      </Fade>
      <Footer />
    </div>
  );
}

export default Archives;
export async function getServerSideProps(context) {
  const docRef = doc(db, "Pics", "JqameTrvXjXwfGfUxDTy");
  const docRef1 = doc(db, "Pics", "Logo");

  const docSnap = await getDoc(docRef);
  const docSnap1 = await getDoc(docRef1);

  const ArchivePics = docSnap.data();
  const logo = docSnap1.data();

  return {
    props: {
      pics: ArchivePics,
      Logo: logo,
    },
  };
}
