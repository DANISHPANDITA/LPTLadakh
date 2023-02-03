import React from "react";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { Fade, Slide } from "react-awesome-reveal";
import { useRouter } from "next/router";
import Image from "next/image";

function Navbar({ logo }) {
  const router = useRouter();
  return (
    <Slide triggerOnce={true} duration={1300} direction="down">
      <div
        className="flex flex-row justify-between items-center h-36 xs:h-24 sm:h-24 w-full px-1"
        style={{
          background:
            "linear-gradient(90deg, rgba(71,124,209,1) 14%, rgba(255,255,255,1) 30%, rgba(230,106,101,1) 50%, rgba(54,215,128,1) 69%, rgba(255,252,136,1) 86%)",
        }}
      >
        <div className="flex flex-row items-center">
          <Fade triggerOnce={true} delay={1200}>
            <Image
              src={logo.logoImg}
              onClick={() => {
                router.push("/");
              }}
              className="h-32 w-auto rounded-lg hover:opacity-95 hover:scale-95 transition-all duration-200 hover:cursor-pointer xs:h-16 sm:h-24 md:h-24"
              width={100}
              height={100}
              alt=""
            />
          </Fade>
          <div className="flex flex-col items-center">
            <Fade delay={1400} bottom triggerOnce={true}>
              <p className="font-ubuntu font-extrabold text-4xl italic text-[#122937] ml-6 xs:text-base sm:text-lg md:text-3xl">
                LADAKH PHANDAY TSOGSPA
              </p>
            </Fade>
            <Fade delay={1600} bottom triggerOnce={true}>
              <p className="font-extrabold text-5xl  text-[#193548] xs:text-xl sm:text-3xl md:text-4xl">
                ལ་དྭགས་ཕན་བདེ་ཚོགས་པ།
              </p>
            </Fade>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-3 font-ubuntu font-extrabold xs:hidden sm:hidden md:hidden">
          <Fade triggerOnce={true} delay={1800} damping={0.7} cascade>
            <button
              onClick={() => {
                router.push("/projects");
              }}
              className="hover:cursor-pointer hover:text-red-900  text-lg"
            >
              Projects |
            </button>
            <button
              onClick={() => {
                router.push("/activities");
              }}
              className="hover:cursor-pointer hover:text-red-900  text-lg"
            >
              Recent Activities |
            </button>
            <button
              onClick={() => {
                router.push("/archives");
              }}
              className="hover:cursor-pointer hover:text-red-900  text-lg"
            >
              Archives
            </button>
          </Fade>
        </div>
        <div className="lg:hidden xl:hidden xxl:hidden">
          <Fade triggerOnce={true} delay={1800}>
            <Menu
              placement="left-end"
              animate={{
                mount: { y: 0 },
                unmount: { y: 30 },
              }}
            >
              <MenuHandler>
                <IconButton className="p-1 bg-gray-900">
                  <i className="fa-solid fa-bars p-3 xs:p-1 text-white" />
                </IconButton>
              </MenuHandler>
              <MenuList className="font-ubuntu font-semibold bg-gray-100  p-1 xs:p-0 sm:p-0 sm:text-base xs:text-base">
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
          </Fade>
        </div>
      </div>
    </Slide>
  );
}

export default Navbar;
