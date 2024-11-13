import Navigation from "@/components/Navigation";
import React from "react";
import { GrLinkNext } from "react-icons/gr";

function SkillsPage() {
  return (
    <div>
      <Navigation />

      <div className="w-full flex items-end justify-end mt-5 mb-5">
        <a href="/projects">
          <div className="bg-[#F15152] h-10 w-40 flex justify-around items-center p-2 rounded-full mr-2 shadow-black shadow-md border-2 border-black text-white hover:text-black  duration-300">
            <strong className="">Proyectos</strong>
            <GrLinkNext size={25} className=" " />
          </div>
        </a>
      </div>
    </div>
  );
}

export default SkillsPage;
