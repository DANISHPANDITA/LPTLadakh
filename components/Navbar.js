import React, { useEffect, useState } from "react";
import img from "../img/img_logo.jpg";
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
      className="font-nunito font-semibold flex flex-row justify-between items-center h-36 w-full px-2 top-0 sticky opacity-1 shadow-xl"
      style={{
        background:
          "linear-gradient(90deg, rgba(37,88,170,1) 14%, rgba(255,255,255,1) 30%, rgba(226,78,72,1) 50%, rgba(20,175,91,1) 69%, rgba(238,234,85,1) 86%)",
      }}
    >
      <img
        className="h-32 w-auto rounded-lg hover:opacity-95 hover:scale-95 transition-all duration-200 hover:cursor-pointer xs:h-20 sm:h-24 md:h-24"
        src={Logo.logoImg}
        onClick={() => {
          router.push("/");
        }}
        alt=""
      />
      <div className="flex flex-col items-center">
        <p className="font-bold text-5xl text-gray-800 xs:text-xl sm:text-xl md:text-2xl">
          LADAKH PHANDAY TSOGSPA
        </p>
        <p className="font-bold text-6xl text-gray-800 xs:text-4xl sm:text-4xl md:text-5xl">
          ལ་དྭགས་ཕན་བདེ་ཚོགས་པ།
        </p>
      </div>
      <Menu
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <MenuHandler>
          <IconButton className="rounded-full p-1 bg-gray-500 mr-4">
            <i className="fa-solid fa-bars p-3" />
          </IconButton>
        </MenuHandler>
        <MenuList className="font-nunito font-semibold bg-gray-100 w-1/4 p-1">
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
