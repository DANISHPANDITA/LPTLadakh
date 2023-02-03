import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import { db } from "../components/firebase";
import Head from "next/head";
import { Fade } from "react-awesome-reveal";
import ReactLoading from "react-loading";
import Image from "next/image";

function Projects({ Projects, logo }) {
  if (Object.values(Projects).length > 0 && Object.values(logo).length > 0) {
    return (
      <div className="font-ubuntu bg-gray-100">
        <Head>
          <title>Projects</title>
        </Head>
        <Navbar logo={logo} />
        <Fade delay={2000} bottom triggerOnce={true}>
          <p className="bg-bg font-ubuntu w-9/12 mx-auto text-center text-4xl py-4 mt-8 text-gray-800  font-extrabold  xs:text-2xl">
            OUR PROJECTS
          </p>
        </Fade>
        <Fade delay={2200} left triggerOnce={true}>
          <div className="flex flex-col space-y-4">
            {Projects.map((project) => (
              <div className="flex flex-col w-10/12 mx-auto shadow-2xl mt-2 rounded-xl p-3">
                <Fade cascade damping={0.3} triggerOnce={true}>
                  <p className="text-3xl text-gray-800 font-bold xs:text-sm sm:text-xl md:text-2xl">
                    {project.Header}
                  </p>
                  <div className="flex flex-row xs:flex-col sm:flex-col md:flex-col items-center">
                    <Image
                      src={project.Pic}
                      className="rounded-xl"
                      width={200}
                      height={300}
                      alt="Pic"
                    />
                    <p className="font-semibold font-nunito text-gray-700 text-lg ml-3 text-justify xs:text-sm sm:text-base md:text-lg">
                      {project.Info}
                    </p>
                  </div>
                </Fade>
              </div>
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

export default Projects;
export async function getServerSideProps(context) {
  const docRef2 = doc(db, "Pics", "Logo");

  const docSnap2 = await getDoc(docRef2);

  const querySnapshot = await getDocs(
    collection(db, "Pics", "ProjectPage", "Projects")
  );
  var pr = [];
  querySnapshot.forEach((doc) => {
    pr.push(doc.data());
  });
  const logo = docSnap2.data();
  return {
    props: {
      Projects: pr,
      logo: logo,
    },
  };
}
