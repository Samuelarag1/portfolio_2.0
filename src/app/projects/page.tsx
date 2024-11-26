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
    name: "What Eat today",
    stack: ["Nextjs", "Tailwindcss"],
    details: "lorem ipsum",
    urlSite: "https://what-eat-today-two.vercel.app/",
    participation: "Owner",
    image: "/projects/what-eat-today.png",
  },

  {
    id: 1,
    name: "Conversion del Dolar",
    stack: ["React", "Tailwindcss"],
    details: "lorem ipsum",
    urlSite: "https://dolareuro-six.vercel.app/",
    participation: "Owner",
    image: "/projects/dolar-euro.png",
  },
  {
    id: 2,
    name: "Ecommerce",
    stack: ["Postgresql", "NextJs", "Zustand"],
    details: "lorem ipsum",
    urlSite: "https://www.google.com",
    participation: "Owner",
    image: "/projects/ecommerce.png",
  },
  {
    id: 3,
    name: "Sistemas ERP",
    stack: ["NextJS", "Tailwindcss", "Kemi's Components"],
    details: "lorem ipsum",
    urlSite: "https://www.kemis.com.br/",
    participation: "Employee",
    image: "/projects/kemis.png",
  },
  {
    id: 4,
    name: "Harvey Constructor",
    stack: ["NextJS", "Tailwindcss"],
    details: "lorem ipsum",
    urlSite: "https://construtor.mcf.house/",
    participation: "Employee",
    image: "/projects/harvey-4.png",
  },
];

function ProjectsPage() {
  return (
    <>
      <div className="h-full lg:h-screen w-screen background-projects">
        <div>
          <Navigation />
          <h2 className="text-2xl lg:text-4xl text-center font-bold text-white text-shadow lg:mt-10 mt-5 text-wrap">
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
                        <div className="flex w-full justify-start gap-2 mt-0">
                          {project?.stack?.map((stack, index) => (
                            <div key={index}>
                              <strong className="text-sm">{stack}</strong>
                            </div>
                          ))}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="w-full h-full">
                      <a href={project.urlSite} target="_blank">
                        <Image
                          src={project?.image}
                          width={400}
                          height={300}
                          alt={project.name}
                          objectFit="cover"
                          className="rounded-sm shadow hover:scale-110 duration-300 hover:cursor-pointer"
                        />
                      </a>
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
        <div className="w-full flex justify-around p-4 lg:mt-20">
          <div>
            <Link
              href="/"
              className="bg-black h-12 w-40 flex justify-between items-center p-6 rounded-full shadow-black shadow-md border-2 border-black text-white hover:text-gray-200 duration-300 hover:scale-x-110 hover:scale-y-110"
            >
              <GrLinkPrevious size={25} />
              <strong>Home</strong>
            </Link>
          </div>
          <div>
            <a href="/skills">
              <div className="bg-black h-12 w-40 flex justify-between items-center p-6 rounded-full shadow-black shadow-md border-2 border-black text-white hover:text-gray-200 duration-300 hover:scale-x-110 hover:scale-y-110">
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
