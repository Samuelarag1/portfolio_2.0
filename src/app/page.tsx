import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div className="bg-[#1E555C] h-screen w-screen">
        <Navigation />
        <div className=" flex flex-col justify-around items-center">
          <Header />
          <div className="bg-black bg-opacity-50 m-10 rounded-lg text-center p-4 h-56 w-80">
            <p className="text-white font-semibold text-wrap">
              Desarrollador de software con más de 2 años de experiencia,
              especializado en backend y optimización de aplicaciones web
              escalables. Trabajo con tecnologías como NestJS, y React,
              aplicando prácticas modernas para ofrecer soluciones robustas y de
              alto rendimiento.
            </p>
          </div>

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
        <div className="w-full flex items-end justify-end mt-5">
          <a href="/projects">
            <div className="bg-[#F15152] h-10 w-40 flex justify-around items-center p-2 rounded-full mr-2 shadow-black shadow-md border-2 border-black text-white hover:text-black  duration-300">
              <strong className="">Proyectos</strong>
              <GrLinkNext size={25} className=" " />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
