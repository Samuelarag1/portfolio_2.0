import React from "react";

function Navigation() {
  return (
    <nav className="w-full h-20 flex justify-around bg-red-500 items-center align-middle">
      <button>CV</button>
      <a href="#">Skill</a>
      <a href="#">Proyectos</a>
      <a href="#">Acerca de mi</a>
    </nav>
  );
}

export default Navigation;
