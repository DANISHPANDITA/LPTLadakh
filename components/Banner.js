import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore/lite";
function Banner() {
  const [Banner, setBanner] = useState({});
  useEffect(() => {
    const fetchLinks = async () => {
      const docRef = doc(db, "Pics", "Banner");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setBanner(docSnap.data());
      } else {
        alert("There is a problem with this page.");
      }
    };
    fetchLinks();
  }, []);
  const Bannerimg = Object.values(Banner);

  return (
    <div className="bg-orange-100">
      <Carousel
        infiniteLoop={true}
        interval={1200}
        autoPlay={true}
        autoFocus={true}
        showThumbs={false}
        showStatus={false}
      >
        {Bannerimg.map((bb) => (
          <div>
            <img
              src={bb}
              className="py-2 w-9/12 h-[620px] xs:h-[300px] sm:h-[380px] md:h-[420px] mx-auto mt-4 rounded-lg"
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
