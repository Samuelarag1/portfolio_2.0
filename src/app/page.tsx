"use client";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { useLanguage } from "../../context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  return (
    <>
      <Navigation />
      <div className="lg:h-screen h-full w-screen flex-col flex items-center justify-around lg:flex-row lg:flex-wrap lg:justify-around">
        <Header />
        <div className="bg-black bg-opacity-50 p-4 h-56 w-80 rounded-lg lg:w-[60%] lg:h-36">
          <p className="text-white font-semibold text-wrap lg:text-xl text-center">
            {language.pages.home.description}
          </p>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-white text-xl lg:text-3xl">
              {language.pages.home.navtitle}
            </h4>
            <div className="h-20 w-80 bg-black bg-opacity-50 rounded-full  shadow-black shadow-lg m-2">
              <div className="flex w-full justify-around align-middle items-center h-full">
                <Link
                  href="https://www.linkedin.com/in/samuelarag1/"
                  target="_blank"
                  className="hover:scale-110 duration-300"
                >
                  <FaLinkedin size={50} color="#0072b1" />
                </Link>
                <Link
                  href="https://www.github.com/samuelarag1/"
                  target="_blank"
                  className="hover:scale-110 duration-300"
                >
                  <FaGithubSquare size={50} color="#FC573B" />
                </Link>
                <Link
                  href="https://wa.me/3834934797"
                  target="_blank"
                  className="hover:scale-110 duration-300"
                >
                  <IoLogoWhatsapp size={50} color="#00B569" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-end m-2 mt-10">
            <Link
              href="/projects"
              className="bg-black h-12 w-40 flex justify-between items-center p-6 rounded-full shadow-black shadow-md border-2 border-black text-white hover:text-gray-200 duration-300 hover:scale-x-110 hover:scale-y-110"
            >
              <strong> {language.buttons.projects}</strong>
              <GrLinkNext size={25} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
