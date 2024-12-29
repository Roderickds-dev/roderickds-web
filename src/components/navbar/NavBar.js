"use client";
import { useHeaderContext } from "@/context/HeaderContext";
import React from "react";

const NavBar = () => {
  const { setShowContent } = useHeaderContext();
  const handleBtn = (e, id) => {
    let id_btn = id;
    setShowContent(id_btn);
  };

  return (
    <div className="flex gap-4 bg-mediumBlue w-[400px] h-[120px] justify-center items-center rounded-md">
      <button
        onClick={(e) => handleBtn(e, 1)}
        className="flex btn p-4 w-55 rounded-md bg-clearBlue text-reactBlack hover:bg-reactBlue dark:bg-reactBlack dark:text-white dark:hover:bg-white dark:hover:text-reactBlack  w-20 h-20 border-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="20"
          height="20"
          fill="currentColor"
        >
          <g>
            <circle cx="256" cy="128" r="128" />
            <path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z" />
          </g>
        </svg>
        Acerca
      </button>
      <button
        onClick={(e) => handleBtn(e, 2)}
        className="flex btn p-4 w-55 rounded-md bg-clearBlue text-reactBlack hover:bg-reactBlue dark:bg-reactBlack dark:text-white dark:hover:bg-white dark:hover:text-reactBlack  w-20 h-20 border-none"
      >
        <svg
          height="20"
          viewBox="0 0 24 24"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="m21.414 5h-4.414v-4.414zm.586 2v17h-20v-21a3 3 0 0 1 3-3h10v7zm-15 9h7v-2h-7zm10 2h-10v2h10zm0-8h-10v2h10z " />
        </svg>
        Resumen
      </button>
      <button
        onClick={(e) => handleBtn(e, 3)}
        className="flex btn p-4 w-55 rounded-md bg-clearBlue text-reactBlack hover:bg-reactBlue dark:bg-reactBlack dark:text-white dark:hover:bg-white dark:hover:text-reactBlack  w-20 h-20 border-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
        >
          <path d="M19,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H5A5.006,5.006,0,0,0,0,9v3H24V9A5.006,5.006,0,0,0,19,4ZM8.184,4A3,3,0,0,1,11,2h2a3,3,0,0,1,2.816,2Z" />
          <path d="M13,15a1,1,0,0,1-2,0V14H0v5a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V14H13Z" />
        </svg>
        Portafolio
      </button>
      <button
        onClick={(e) => handleBtn(e, 4)}
        className="flex btn p-4 w-55 rounded-md bg-clearBlue text-reactBlack hover:bg-reactBlue dark:bg-reactBlack dark:text-white dark:hover:bg-white dark:hover:text-reactBlack  w-20 h-20 border-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="200"
          height="20"
          fill="currentColor"
        >
          <path d="M12,9a1,1,0,0,1,2,0A1,1,0,0,1,12,9ZM23,5V19a5.006,5.006,0,0,1-5,5H8a5,5,0,0,1-4.576-3H2a1,1,0,0,1,0-2H3V17H2a1,1,0,0,1,0-2H3V13H2a1,1,0,0,1,0-2H3V9H2A1,1,0,0,1,2,7H3V5H2A1,1,0,0,1,2,3H3.424A5,5,0,0,1,8,0H18A5.006,5.006,0,0,1,23,5ZM10,9a3,3,0,0,0,6,0A3,3,0,0,0,10,9Zm8,9c-.211-6.608-9.791-6.606-10,0a1,1,0,0,0,2,0,3,3,0,0,1,6,0A1,1,0,0,0,18,18Z" />
        </svg>
        Contacto
      </button>
    </div>
  );
};

export default NavBar;
