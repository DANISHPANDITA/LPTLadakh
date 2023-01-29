import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../components/firebase";
import img from "../img/activities_back.jpg";
import Head from "next/head";
import { Fade } from "react-awesome-reveal";
function Archives({ pics, Logo }) {
  var ArchivePicsArr = Object.values(pics);
  if (ArchivePicsArr.length > 0) {
    return (
      <div className="bg-gray-200">
        <Head>
          <title>Archives</title>
        </Head>
        <Navbar logo={Logo} />
        <Fade delay={2000} top triggerOnce={true}>
          <img
            src={img.src}
            className="h-28 w-3/4 mx-auto mt-6 xs:h-20"
            alt=""
          />
          <p className="font-nunito text-center text-5xl text-gray-800  font-extrabold -mt-20 xs:text-2xl xs:-mt-12">
            GALLERY
          </p>
        </Fade>
        <Fade delay={2200} cascade damping={0.7}>
          <div className="flex flex-wrap min-w-[150px] justify-between p-5 space-y-4 mt-12">
            {ArchivePicsArr.map((pic) => (
              <img loading="lazy" className="h-96 w-auto" src={pic} alt="" />
            ))}
          </div>
        </Fade>
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
