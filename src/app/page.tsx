"use client";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div className="lg:h-screen h-full w-screen">
        <Navigation />
        <div className="flex flex-col justify-around items-center lg:flex-row lg:items-center lg:justify-around lg:flex-wrap lg:h-[70vh]">
          <Header />
          <div className="h-56 w-80 lg:w-[50%] lg:h-fit mt-10">
            <div className="bg-black bg-opacity-50 p-4 h-56 w-80 rounded-lg lg:w-full lg:h-36">
              <p className="text-white font-semibold text-wrap lg:text-xl text-center">
                Desarrollador de software con más de 2 años de experiencia,
                especializado en frontend/backend y optimización de aplicaciones
                web escalables. Trabajo con tecnologías como NestJS, y React,
                aplicando prácticas modernas para ofrecer soluciones robustas y
                de alto rendimiento.
              </p>
            </div>

            <div className="flex flex-col items-center mt-20">
              <h4 className="font-bold text-white text-2xl">Redes sociales</h4>
              <div className="h-20 w-80 bg-black bg-opacity-50 rounded-full  shadow-black shadow-lg m-2">
                <div className="flex w-full justify-around align-middle items-center h-full">
                  <a
                    href="https://www.linkedin.com/in/samuelarag1/"
                    target="_blank"
                    className="hover:scale-110 duration-300"
                  >
                    <FaLinkedin size={50} color="#0072b1" />
                  </a>
                  <a
                    href="https://www.github.com/samuelarag1/"
                    target="_blank"
                    className="hover:scale-110 duration-300"
                  >
                    <FaGithubSquare size={50} color="#FC573B" />
                  </a>
                  <a
                    href="https://wa.me/3834934797"
                    target="_blank"
                    className="hover:scale-110 duration-300"
                  >
                    <IoLogoWhatsapp size={50} color="#00B569" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex items-end justify-end mt-5 mb-5 absolute bottom-0">
          <a
            href="/projects"
            className="bg-black mr-4 h-12 w-40 flex justify-between items-center p-6 rounded-full shadow-black shadow-md border-2 border-black text-white hover:text-gray-200 duration-300 hover:scale-x-110 hover:scale-y-110"
          >
            <strong>Proyectos</strong>
            <GrLinkNext size={25} />
          </a>
        </div>
      </div>
    </>
  );
}
