import React, { useRef } from "react";

const MenuMobile = () => {
  const divRef = useRef(),
    iconRef = useRef();

  const handleClick = (e) => {
    if (divRef.current) {
      divRef.current.classList.toggle("-translate-x-[100%]");
      divRef.current.classList.toggle("translate-x-0");
    }
    if (iconRef.current) {
      iconRef.current.classList.toggle("bi-x");
      iconRef.current.classList.toggle("bi-three-dots-vertical");
    }
  };
  return (
    <>
      <div
        ref={divRef}
        className="bottom-0 flex justify-center items-center h-[1350px] min-w-max bg-reactBlack bg-opacity-70 transform -translate-x-[100%] translate-y-0 transition ease-in-out duration-300"
      >
        <aside>
          <nav className="flex flex-col text-white items-center justify-center w-screen gap-4 m-4 ">
            <a
              href="#dark_mode"
              onClick={handleClick}
              className="hover:bg-reactBlue hover:text-reactBlack transition-all w-60 h-10 flex justify-center items-center border-b hover:border-b-0 hover:rounded-md"
            >
              Inicio
            </a>
            <a
              href="#nav_bar"
              onClick={handleClick}
              className="hover:bg-reactBlue hover:text-reactBlack transition-all w-60 h-10 flex justify-center items-center border-b hover:border-b-0 hover:rounded-md"
            >
              Barra de Navegación
            </a>
            <a
              href="#side_bar"
              onClick={handleClick}
              className="hover:bg-reactBlue hover:text-reactBlack transition-all w-60 h-10 flex justify-center items-center border-b hover:border-b-0 hover:rounded-md"
            >
              Side Bar
            </a>
            <a
              href="#main_content"
              onClick={handleClick}
              className="hover:bg-reactBlue hover:text-reactBlack transition-all w-60 h-10 flex justify-center items-center border-b hover:border-b-0 hover:rounded-md"
            >
              Contenido Principal
            </a>
          </nav>
        </aside>
      </div>
      <button
        onClick={handleClick}
        className="flex justify-center items-center fixed bottom-5 left-0 p-4 bg-mediumBlue text-reactBlack w-12 h-12 m-4 rounded-md hover:bg-clearBlue "
      >
        <i ref={iconRef} className="bi bi-three-dots-vertical text-[22px]"></i>
      </button>
    </>
  );
};

export default MenuMobile;
