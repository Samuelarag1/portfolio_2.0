import Navigation from "@/components/Navigation";
import React from "react";
import { IProjects } from "../../../Models/Projects";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import "./styles.css";
import Link from "next/link";
const projects: IProjects[] = [
  {
    id: 0,
    name: "Ecommerce",
    stack: ["Postgresql", "NextJs", "Zustand"],
    details: "lorem ipsum",
    urlSite: "www.google.com",
    participation: "Owner",
    image: "",
  },
  {
    id: 1,
    name: "Conversion del Dolar",
    stack: ["React", "Tailwindcss"],
    details: "lorem ipsum",
    urlSite: "www.google.com",
    participation: "Owner",
    image: "",
  },
  {
    id: 2,
    name: "Sistemas ERP",
    stack: ["NextJS", "Tailwindcss", "Kemi's Components"],
    details: "",
    urlSite: "",
    participation: "",
    image: "",
  },
  {
    id: 3,
    name: "Harvey Constructor",
    stack: ["NextJS", "Tailwindcss"],
    details: "",
    urlSite: "",
    participation: "",
    image: "",
  },
];

function ProjectsPage() {
  return (
    <>
      <div className="h-full w-screen background-projects">
        <div>
          <Navigation />
          <h2 className="text-2xl lg:text-4xl text-center font-bold text-white text-shadow lg:mt-10 mt-5">
            Proyectos creados y/o participados
          </h2>
          <div className="flex flex-wrap w-full justify-center mt-20 gap-2 lg:mt-44">
            {projects.map((project, index) => (
              <>
                <div key={index}>
                  <Card
                    className="w-[350px] flex flex-col h-[400px] justify-around"
                    key={project.id}
                  >
                    <CardHeader>
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription>{project.participation}</CardDescription>
                      <CardDescription>
                        {" "}
                        <div className="flex w-full justify-start gap-2 mt-0">
                          {project?.stack?.map((stack, index) => (
                            <div key={index}>
                              <strong className="text-sm">{stack}</strong>
                            </div>
                          ))}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={project.image}
                        width={100}
                        height={100}
                        alt={project.name}
                      />
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant={"destructive"}>Repositorio</Button>
                      <Button>Visit</Button>
                    </CardFooter>
                  </Card>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-around p-4">
          <div>
            <Link
              href="/"
              className="bg-[#163D42] h-10 w-40 flex justify-around items-center p-2 rounded-full mr-2 shadow-black shadow-md border-2 border-black text-white hover:text-gray-200  duration-300 hover:scale-x-110 hover:scale-y-110"
            >
              <GrLinkPrevious size={25} />
              <strong>Home</strong>
            </Link>
          </div>
          <div>
            <a href="/skills">
              <div className="bg-[#163D42] h-10 w-40 flex justify-around items-center p-2 rounded-full mr-2 shadow-black shadow-md border-2 border-black text-white hover:text-gray-200  duration-300 hover:scale-x-110 hover:scale-y-110">
                <strong>Skills</strong>
                <GrLinkNext size={25} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
