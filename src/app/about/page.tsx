"use client";
import Navigation from "@/components/Navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GrLinkPrevious } from "react-icons/gr";
import { useLanguage } from "../../../context/LanguageContext";

function AboutPage() {
  const { language } = useLanguage();
  return (
    <>
      <div className="h-screen w-screen">
        <Navigation />

        <div>
          <div>
            <h4 className="text-center text-xl text-white text-shadow">
              {language.pages.about.title}
            </h4>
            <div className="flex flex-col items-center align-middle justify-center mt-2">
              <Image
                src="/profile2.jpg"
                width={200}
                height={200}
                alt="profile picture"
                style={{ objectFit: "cover" }}
                className=" bg-black h-56 w-56 lg:h-80 lg:w-80 rounded-full border-solid border-black border-8 shadow-2xl shadow-[#3A2E39] profilePicture2"
              />
            </div>
          </div>

          <div className="lg:flex">
            <div className="bg-black bg-opacity-50 m-5 p-2 rounded-lg font-semibold flex flex-col gap-5">
              <p className="text-white text-center">
                {language.pages.about.about_1}
              </p>

              <p className="text-center text-white">
                {language.pages.about.about_2}
              </p>
            </div>

            <div className="bg-gray-200 bg-opacity-50 m-5 p-2 rounded-lg flex flex-col gap-5 text-center text-black">
              <strong>{language.pages.about.about_3}</strong>
            </div>
          </div>
        </div>

        <div className="items-center flex flex-col justify-center">
          <a href="https://wa.me/3834934797" target="_blank">
            <Image
              src={"/whatsapp.png"}
              alt="wsp icon"
              height={100}
              width={100}
              className="hover:scale-110 duration-300"
            />
          </a>
          <h5 className="text-xl font-bold text-white">
            {language.pages.about.contact}
          </h5>
        </div>
        <div className="flex justify-start m-2 mt-10">
          <Link
            href="/projects"
            className="bg-black h-12 w-40 flex justify-between items-center p-6 rounded-full shadow-black shadow-md border-2 border-black text-white hover:text-gray-200 duration-300 hover:scale-x-110 hover:scale-y-110"
          >
            <GrLinkPrevious size={25} />
            <strong> {language.buttons.skills}</strong>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
