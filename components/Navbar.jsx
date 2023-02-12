import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center shadow-xl z-50">
      <div className="cursor-pointer hover:scale-105 ml-10"><Image src="/logo.svg" width="180" height="80" alt="logo" />
      </div>
      <ul className="hidden md:flex items-center">
        <li className="ml-10 text-sm hover:border-b ">
          <Link href="/">HOME</Link>
        </li>
        <li className="ml-10 text-sm hover:border-b ">
          <Link href="/">PROJECTS</Link>
        </li>
        <li className="ml-10 text-sm hover:border-b ">
          <Link href="/">ABOUT ME</Link>
        </li>
        <li className="ml-10 text-sm hover:border-b ">
          <Link href="/">CONTACT ME</Link>
        </li>
        <div>
          <button class="btn btn-blue btn-blue:hover ml-10 mt-1.5 mr-4">
            Contact Me
          </button>
        </div>
      </ul>
      <div onClick={handleNav} className="md:hidden cursor-pointer">
        <AiOutlineMenu size={30} />
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 "
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src="/logo.svg" width="200" height="137" alt="logo" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-400 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let`s build some new website for you or your buisness.
              </p>
            </div>
          </div>
          <div>
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">About Me</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Contact Me</li>
              </Link>
            </ul>
            <div className="pt-30">
              <p className=" tracking-widest text-[#5651e5]">LET`S CONNECT</p>
              <div className="flex justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duation-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duation-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duation-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duation-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
