import React from "react";

function Footer() {
  return (
    <div className="w-full absolute bottom-0 bg-black p-2">
      <div className="p-2 text-white w-full flex flex-col gap-5">
        <p className="text-2xl text-center">Redes de contacto</p>
        <nav className="flex w-full justify-around">
          <div>
            <a href="#">Instagram</a>
          </div>
          <div>
            <a href="#">Whatsapp</a>
          </div>
          <div>
            <a href="#">LinkedIn</a>
          </div>
        </nav>
      </div>
      <p className="font-bold text-white text-center bg-slate-950">
        Samuel Aragon | 2024
      </p>
    </div>
  );
}

export default Footer;
