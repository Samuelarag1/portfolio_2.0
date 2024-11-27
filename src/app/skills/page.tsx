"use client";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import ISkills from "../../../Models/Skills";
import { useLanguage } from "../../../context/LanguageContext";

const skills: ISkills[] = [
  {
    name: "React",
    icon: "/skills/react.png",
    experience: 2,
    frameworks: ["NextJs", "Vite"],
  },
  {
    name: "Tailwindcss",
    icon: "/skills/tailwindcss.png",
    experience: 2,
  },
  {
    name: "Typescript",
    icon: "/skills/typescript.png",
    experience: 2,
  },
  {
    name: "Nodejs",
    icon: "/skills/node.png",
    experience: 2,
    frameworks: ["NestJS", "Express"],
  },
  {
    name: "Postgres",
    icon: "/skills/postgres.png",
    experience: 1,
    frameworks: ["TypeORM"],
  },
  {
    name: "Javascript",
    icon: "/skills/js.png",
    experience: 3,
  },
  {
    name: "HTML5",
    icon: "/skills/html.png",
    experience: 3,
  },
  {
    name: "CSS3",
    icon: "/skills/css.png",
    experience: 2,
  },
  {
    name: "Git",
    icon: "/skills/github-sign.png",
    experience: 3,
  },
  {
    name: "Figma",
    icon: "/skills/figma.png",
    experience: 1,
  },
];
function SkillsPage() {
  const { language } = useLanguage();
  const [skillSelected, setSkillSelected] = useState<ISkills>({
    name: language.pages.skills.select_skill,
    icon: "/touch.png",
  });

  return (
    <>
      <Navigation />
      <div className="h-[100vh] w-screen flex flex-col items-center justify-between">
        <h3 className="text-[2rem] lg:text-4xl text-center font-bold text-white text-shadow lg:mt-10 mt-5 text-wrap">
          Skills
        </h3>
        <div className="h-96 w-80 lg:h-96 lg:w-96 bg-black bg-opacity-55  flex items-center justify-around flex-col rounded-lg shadow-xl shadow-black">
          <>
            <Image
              src={skillSelected.icon}
              width={150}
              height={150}
              alt={skillSelected.name}
            />

            <div className="flex flex-col items-center justify-center text-white text-shadow">
              <p className="text-3xl text-center">{skillSelected.name}</p>
              {skillSelected.experience ? (
                <strong className="text-xl">
                  {skillSelected.experience +
                    " " +
                    language.pages.skills.years_skill}
                </strong>
              ) : (
                ""
              )}
              {skillSelected.frameworks ? (
                <p className="text-lg">
                  <span className="font-bold">Frameworks: </span>
                  {skillSelected.frameworks?.map((frame) => frame + " ")}
                </p>
              ) : (
                ""
              )}
            </div>
          </>
        </div>

        <div className="bg-black bg-opacity-50 p-4 rounded-full flex items-center gap-3 overflow-x-auto scrollbar-hide scroll-container shadow-md m-4 shadow-black">
          {skills.map((skill, index) => (
            <div key={index} className="flex-shrink-0 scroll-item">
              <Image
                src={skill.icon}
                width={50}
                height={50}
                alt={skill.name}
                objectFit="contain"
                className="hover:cursor-pointer hover:scale-125 duration-300 m-0 p-0"
                onClick={() => setSkillSelected(skill)}
              />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-around p-4">
          <div>
            <Link
              href="/projects"
              className="bg-black h-12 w-40 flex justify-between items-center p-6 rounded-full shadow-black shadow-md border-2 border-black text-white hover:text-gray-200 duration-300 hover:scale-x-110 hover:scale-y-110"
            >
              <GrLinkPrevious size={25} />
              <strong className="text-white">
                {language.buttons.projects}
              </strong>
            </Link>
          </div>
          <div>
            <Link href="/about">
              <div className="bg-black h-12 w-40 flex justify-between items-center p-6 rounded-full shadow-black shadow-md border-2 border-black text-white hover:text-gray-200 duration-300 hover:scale-x-110 hover:scale-y-110">
                <strong>{language.buttons.about}</strong>
                <GrLinkNext size={25} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsPage;
