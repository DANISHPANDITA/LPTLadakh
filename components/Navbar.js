import React, { useEffect, useState } from "react";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "./firebase";
import Fade from "react-reveal/Fade";

function Navbar() {
  const router = useRouter();
  const [Logo, setLogo] = useState({});
  useEffect(() => {
    const fetchLinks = async () => {
      const docRef = doc(db, "Pics", "Logo");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLogo(docSnap.data());
      } else {
        alert("There is a problem with this page.");
      }
    };
    fetchLinks();
  }, []);
  return (
    <div
      className="flex flex-row justify-between items-center h-36 xs:h-24 sm:h-24 w-full px-2  shadow-xl"
      style={{
        background:
          "linear-gradient(90deg, rgba(71,124,209,1) 14%, rgba(255,255,255,1) 30%, rgba(230,106,101,1) 50%, rgba(54,215,128,1) 69%, rgba(255,252,136,1) 86%)",
      }}
    >
      <img
        className="h-32 w-auto rounded-lg hover:opacity-95 hover:scale-95 transition-all duration-200 hover:cursor-pointer xs:h-16 sm:h-24 md:h-24"
        src={Logo.logoImg}
        onClick={() => {
          router.push("/");
        }}
        alt=""
      />
      <div className="flex flex-col items-center">
        <Fade bottom>
          <p className="font-serif font-extrabold text-5xl italic text-[#193548] xs:text-sm sm:text-lg md:text-3xl">
            LADAKH PHANDAY TSOGSPA
          </p>
        </Fade>
        <Fade bottom>
          <p className="font-extrabold text-6xl  text-[#193548] xs:text-xl sm:text-3xl md:text-4xl">
            ལ་དྭགས་ཕན་བདེ་ཚོགས་པ།
          </p>
        </Fade>
      </div>
      <Menu
        placement="left-end"
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <MenuHandler>
          <IconButton
            variant="gradient"
            className="rounded-full p-1 bg-gray-900"
          >
            <i className="fa-solid fa-bars p-3 xs:p-1 text-white" />
          </IconButton>
        </MenuHandler>
        <MenuList className="font-nunito font-semibold bg-gray-100  p-1 xs:p-0 sm:p-0 sm:text-base xs:text-xs">
          <MenuItem
            className="p-2 hover:cursor-pointer hover:bg-gray-200 rounded-lg"
            onClick={() => {
              router.push("/projects");
            }}
          >
            Projects
          </MenuItem>
          <MenuItem
            className="p-2 hover:cursor-pointer hover:bg-gray-200 rounded-lg"
            onClick={() => {
              router.push("/activities");
            }}
          >
            Recent Activities
          </MenuItem>
          <MenuItem
            onClick={() => {
              router.push("/archives");
            }}
            className="p-2 hover:cursor-pointer hover:bg-gray-200 rounded-lg"
          >
            Archives
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default Navbar;
