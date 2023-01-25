import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import { db } from "../components/firebase";
import img1 from "../img/project_back.jpeg";
import Head from "next/head";

function Projects() {
  const [Projects, setProjects] = useState([]);
  const [ProjectHeadBG, setProjectHeadBG] = useState("");

  useEffect(() => {
    const fetchLinks = async () => {
      const docRef = doc(db, "Pics", "ProjectPage", "ProjectBg", "1");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProjectHeadBG(docSnap.data());
      } else {
        alert("There is a problem with this page.");
      }
      const querySnapshot = await getDocs(
        collection(db, "Pics", "ProjectPage", "Projects")
      );
      var pr = [];
      querySnapshot.forEach((doc) => {
        pr.push(doc.data());
        setProjects([...pr]);
      });
    };
    fetchLinks();
  }, []);
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Projects</title>
      </Head>
      <Navbar />
      <img
        src={ProjectHeadBG.Bg}
        className="h-28 w-3/4 mx-auto mt-6 xs:h-20"
        alt=""
      />
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
              <img className="h-48 w-auto shadow-xl" src={project.Pic} alt="" />
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

export default Projects;
