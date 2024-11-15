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
import Footer from "@/components/Footer";

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
      <div className="from-[#1E555C] to-black bg-gradient-to-b h-[100%] lg:h-screen w-screen">
        <Navigation />
        <h2 className="text-4xl text-center font-bold text-white text-shadow lg:mt-10 mg-5">
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
      {/* <Footer /> */}
    </>
  );
}

export default ProjectsPage;
