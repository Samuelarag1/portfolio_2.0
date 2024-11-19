import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

function SkillsPage() {
  return (
    <>
      <Navigation />
      <div className="h-[90vh] w-screen flex flex-col items-center justify-around">
        <h3 className="text-[2rem] lg:text-4xl text-center font-bold text-white text-shadow lg:mt-10 mt-5 text-wrap">
          Skills
        </h3>
        <div className="h-96 bg-black bg-opacity-55 w-96 flex items-center justify-around flex-col rounded-lg shadow-xl shadow-black">
          <Image src={"/skills/react.png"} width={200} height={200} alt="" />
          <div className="flex flex-col items-center justify-center text-white text-shadow">
            <p className="text-3xl">React</p>
            <strong className="text-xl">2 years experience</strong>
            <p className="text-lg">
              <span className="font-bold">Frameworks: </span>
              Nextjs, vite.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-around p-4">
          <div>
            <Link
              href="/projects"
              className="bg-black h-12 w-40 flex justify-between items-center p-6 rounded-full shadow-black shadow-md border-2 border-black text-white hover:text-gray-200 duration-300 hover:scale-x-110 hover:scale-y-110"
            >
              <GrLinkPrevious size={25} />
              <strong className="text-white">Projects</strong>
            </Link>
          </div>
          <div>
            <a href="/skills">
              <div className="bg-black h-12 w-40 flex justify-between items-center p-6 rounded-full shadow-black shadow-md border-2 border-black text-white hover:text-gray-200 duration-300 hover:scale-x-110 hover:scale-y-110">
                <strong>About me</strong>
                <GrLinkNext size={25} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsPage;
