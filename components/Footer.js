import { IconButton, Tooltip } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../components/firebase";
function Footer() {
  const [Contacts, setContacts] = useState({});
  const [Logo, setLogo] = useState({});
  useEffect(() => {
    const fetchLinks = async () => {
      const docRef1 = doc(db, "Pics", "Logo");
      const docSnap1 = await getDoc(docRef1);
      if (docSnap1.exists()) {
        setLogo(docSnap1.data());
      } else {
        alert("There is a problem with this page.");
      }

      const docRef = doc(db, "Pics", "Links");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setContacts(docSnap.data());
      } else {
        alert("There is a problem with this page.");
      }
    };
    fetchLinks();
  }, []);
  return (
    <div className="font-nunito bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 text-gray-100  flex flex-row sm:flex-col xs:flex-col md:flex-col justify-between p-4">
      <div className="w-1/4 lg:w-1/2 xl:w-1/2 md:w-full xs:w-full sm:w-full text-base xs:text-xs sm:text-xs md:text-base">
        <p className="font-semibold mb-3 text-lg xs:text-sm sm:text-base md:text-base">
          Contact us
        </p>
        <p>{Contacts.Address}</p>
        <p className="mb-0.5">
          Phone : <span>{Contacts.Phone}</span>
        </p>
        <p className="mb-0.5">
          Email : <span>{Contacts.Email}</span>
        </p>
      </div>

      <div className="flex flex-col items-center">
        <p className="font-semibold text-lg xs:text-sm sm:text-base md:text-base">
          Follow us on
        </p>

        <Tooltip
          placement="top-start"
          content="Facebook"
          className="bg-black p-2"
        >
          <IconButton
            className="p-2 rounded-full"
            onClick={() => {
              window.open(Contacts.Fb, "_blank");
            }}
          >
            <i className="fa-brands fa-facebook-f"></i>
          </IconButton>
        </Tooltip>

        <img
          src={Logo.logoImg}
          className="h-36 w-auto mt-4 rounded-full"
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer;
