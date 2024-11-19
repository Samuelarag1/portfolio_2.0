import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="flex flex-col items-center mt-5 gap-2 lg:flex-col-reverse lg:gap-10">
      <h1 className="text-center text-3xl font-bold text-white">
        Software Developer
      </h1>

      <div className="flex flex-col items-center align-middle justify-center">
        <Image
          src="/profile.jpg"
          width={200}
          height={200}
          alt="profile picture"
          style={{ objectFit: "contain" }}
          className=" bg-black h-72 w-72 lg:h-80 lg:w-80 rounded-full border-solid border-black border-8 shadow-2xl shadow-[#3A2E39] profilePicture"
        />
      </div>
    </header>
  );
}

export default Header;
