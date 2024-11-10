import React from "react";

function Header() {
  return (
    <header className="flex flex-col items-center mt-2 gap-2">
      <h1 className="text-center text-2xl">Software Developer</h1>

      <div className="bg-black h-40 w-40 rounded-full border-solid border-white border-4"></div>
    </header>
  );
}

export default Header;
