import Navigation from "@/components/Navigation";
import React from "react";
import Image from "next/image";

function AboutPage() {
  return (
    <>
      <div className="h-screen w-screen">
        <Navigation />
        <div>
          <h4 className="text-center text-xl text-white text-shadow">
            Un poco mas sobre mi y mi experiencia laboral
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

          <div className="bg-black bg-opacity-50 m-5 p-2 rounded-lg font-semibold flex flex-col gap-5">
            <p className="text-white text-center">
              Cuento con mas de una año de experiencia laboral desarrollando
              interfaces y sistemas dinamicos en los cuales distintos clientes
              referidos a Kemi&apos Software solicitaban un servicio en
              particular con el cual habia que cumplir, siguiendo distintas
              tecnicas y abarcando siempre datos ya implementados para poder
              tener una mejor gestion tanto del backend como del frontend
            </p>

            <p className="text-center text-white">
              a su vez, cuento con experiencias personales desarrollando
              aplicaciones fulsltack con la implementacion de proteccion de
              rutas, manejo de buckets en AWS y el poder consumir datos cargados
              tanto en la nube como en local.
            </p>
          </div>
          <div className="bg-gray-200 bg-opacity-50 m-5 p-2 rounded-lg flex flex-col gap-5 text-center text-black">
            <strong>
              Este camino ha sido largo y estoy en constante aprendizaje, por
              eso todo el tiempo estoy intentando conocer un poco mas de las
              tecnologias que uno puede llegar a utilizar, sin mas, aqui abajo
              hay un boton que te lleva a mi WhatsApp personal en el que podras
              comunicarte de manera directa!
            </strong>
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
          <h5 className="text-xl font-bold text-white">Contactame!</h5>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
