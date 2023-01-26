import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import { db } from "../components/firebase";
import Head from "next/head";

function Projects({ BG, Projects }) {
  if (Object.values(BG).length > 0 && Object.values(Projects).length > 0) {
    return (
      <div className="bg-gray-100">
        <Head>
          <title>Projects</title>
        </Head>
        <Navbar />
        <img src={BG.Bg} className="h-28 w-3/4 mx-auto mt-6 xs:h-20" alt="" />
        <p className="font-nunito text-center text-5xl text-gray-100  font-extrabold -mt-20 xs:text-2xl xs:-mt-12">
          OUR PROJECTS
        </p>
        <div className="flex flex-col space-y-4">
          {Projects.map((project) => (
            <div className="flex flex-col w-10/12 mx-auto shadow-2xl mt-24 rounded-xl p-3">
              <p className="font-nunito text-3xl text-gray-800 font-bold xs:text-xl sm:text-xl md:text-2xl">
                {project.Header}
              </p>
              <div className="flex flex-row xs:flex-col sm:flex-col md:flex-col items-center">
                <img
                  className="h-48 w-auto shadow-xl"
                  src={project.Pic}
                  alt=""
                />
                <p className="font-semibold font-nunito text-gray-700 text-lg ml-3 text-justify ">
                  {project.Info}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Projects;
export async function getServerSideProps(context) {
  const docRef = doc(db, "Pics", "ProjectPage", "ProjectBg", "1");
  const docSnap = await getDoc(docRef);
  const ProjectHeadbg = docSnap.data();
  const querySnapshot = await getDocs(
    collection(db, "Pics", "ProjectPage", "Projects")
  );
  var pr = [];
  querySnapshot.forEach((doc) => {
    pr.push(doc.data());
  });
  return {
    props: {
      BG: ProjectHeadbg,
      Projects: pr,
    },
  };
}
