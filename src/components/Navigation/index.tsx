"use client";
import React, { useState } from "react";
import { LuDownload, LuLanguages } from "react-icons/lu";
import Switch from "../Switch";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navigation() {
  const [toggle, setToggle] = useState<boolean>(false);
  const path = usePathname();

  const handleOnToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <nav className="lg:w-full h-20 lg:flex lg:justify-around bg-[#3A2E39] lg:items-center flex flex-col justify-center bg-opacity-50">
      <div className="mr-2 flex w-full justify-around items-center">
        <h1 className="text-2xl font-[anton-regular] text-white">
          Samuel Aragon
        </h1>
        <Switch checked={toggle} onChange={handleOnToggle} />
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } bg-[#1d171c] transition-transform duration-500`}
      >
        <div className="flex flex-col h-56 w-full">
          <div className="flex w-full justify-around items-center align-middle">
            <div>
              <button className="flex gap-2 align-middle items-center mt-4 bg-[#F15152] text-white w-24 justify-center p-2 rounded-full border-black border-2 hover:bg-[#6d2525] hover:text-gray-200 transition duration-300">
                <LuDownload size={20} color={"white"} />
                CV
              </button>
            </div>
            <div>
              <button className="flex w-28 justify-center gap-2 align-middle items-center mt-4 ml-4 bg-[#1E555C] text-white p-2 rounded-full border-black border-2 hover:bg-[#0d2629] hover:text-gray-200 transition duration-300">
                <LuLanguages size={20} color={"white"} />
                EN/ES
              </button>
            </div>
          </div>
          <div className="w-full mt-5 font-bold text-2xl">
            {path !== "/" ? (
              <Link
                href="/"
                className="block mt-4 ml-4 text-white hover:text-[#F15152] duration-300 "
              >
                Inicio
              </Link>
            ) : (
              ""
            )}
            <Link
              href="/projects"
              className="block mt-4 ml-4 text-white hover:text-[#F15152] duration-300 "
            >
              Proyectos
            </Link>
            <Link
              href="/skills"
              className="block mt-4 ml-4 text-white hover:text-[#F15152] duration-300 "
            >
              Skills
            </Link>
            <Link
              href="/about"
              className="block mt-4 ml-4 text-white hover:text-[#F15152] duration-300 "
            >
              Sobre mi
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
