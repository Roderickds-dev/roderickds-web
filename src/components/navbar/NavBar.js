"use client";
import { useHeaderContext } from "@/context/HeaderContext";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const { setShowContent, isMobile, setDarkMode, darkMode } =
    useHeaderContext();
  const [checked, setChecked] = useState(false);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 2);
      //console.log(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setDarkMode((prev) => !prev);
    setChecked((prev) => !prev);
  };

  const divRef = useRef(),
    iconRef = useRef();

  const mostrarMenu = () => {
    if (divRef.current) {
      divRef.current.classList.toggle("-translate-y-[150%]");
    }
    if (iconRef.current) {
      iconRef.current.classList.toggle("bi-three-dots-vertical");
      iconRef.current.classList.toggle("bi-x");
    }
  };

  const handleBtn = (e) => {
    mostrarMenu();
  };

  const handleClick = (e, id_number, id_link) => {
    e.preventDefault();

    const target = document.getElementById(id_link);
    const headerHeight = document.getElementById("header").offsetHeight;

    if (target) {
      const targetPosition = target.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    setShowContent(id_number);
    mostrarMenu();
  };

  return (
    <nav
      id="navBar"
      className={`${
        scroll && "shadow-md dark:shadow-white"
      } flex flex-col fixed justify-center items-center w-full z-20 [background:linear-gradient(360deg,_#ffffff,_#c9c5cb)] dark:[background:linear-gradient(360deg,_#1F2D40,_#c9c5cb)] transition-all`}
    >
      {/*SEGUNDO DIV QUE LLEVA EL MENU, BOTON DARKMODE Y BOTON DERECHO MENU */}

      <div
        id="navbar-header"
        className="flex justify-between items-center p-4 z-10 w-full"
      >
        {/*MODO OSCURO*/}
        <div>
          <label className="flex cursor-pointer gap-2 text-clearPurple ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller text-clearPurple dark:text-clearPurple bg-clearPurple hover:bg-frenchGray"
              onChange={toggleDarkMode}
              checked={checked}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
        {/*MENU DE NAVEGACION*/}
        <div
          className={`${
            isMobile ? "hidden" : "flex"
          } justify-end items-center gap-4 w-full font-barlow font-light text-xl`}
        >
          <a
            href="#home"
            onClick={(e) => handleClick(e, 1, "home")}
            className={`${
              scroll ? "flex" : "hidden"
            } flex flex-col justify-center items-center text-reactBlack hover:text-clearPurple dark:text-white dark:hover:text-clearPurple rounded-md p-2.5 transition-all`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-house-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
            </svg>
            Inicio
          </a>
          <a
            href="#about"
            onClick={(e) => handleClick(e, 1, "about")}
            className="flex flex-col justify-center items-center text-reactBlack hover:text-clearPurple dark:text-white dark:hover:text-clearPurple rounded-md p-2.5 transition-all"
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
          </a>
          <a
            href="#short"
            onClick={(e) => handleClick(e, 2, "short")}
            className="flex flex-col justify-center items-center text-reactBlack hover:text-clearPurple dark:text-white dark:hover:text-clearPurple rounded-md p-2.5 transition-all"
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
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleClick(e, 3, "portfolio")}
            className="flex flex-col justify-center items-center text-reactBlack hover:text-clearPurple dark:text-white dark:hover:text-clearPurple rounded-md p-2.5 transition-all"
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
          </a>
          <a
            href="#contact"
            onClick={(e) => handleClick(e, 4, "contact")}
            className="flex flex-col justify-center items-center text-reactBlack hover:text-clearPurple dark:text-white dark:hover:text-clearPurple rounded-md p-2.5 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
            >
              <path d="M12,9a1,1,0,0,1,2,0A1,1,0,0,1,12,9ZM23,5V19a5.006,5.006,0,0,1-5,5H8a5,5,0,0,1-4.576-3H2a1,1,0,0,1,0-2H3V17H2a1,1,0,0,1,0-2H3V13H2a1,1,0,0,1,0-2H3V9H2A1,1,0,0,1,2,7H3V5H2A1,1,0,0,1,2,3H3.424A5,5,0,0,1,8,0H18A5.006,5.006,0,0,1,23,5ZM10,9a3,3,0,0,0,6,0A3,3,0,0,0,10,9Zm8,9c-.211-6.608-9.791-6.606-10,0a1,1,0,0,0,2,0,3,3,0,0,1,6,0A1,1,0,0,0,18,18Z" />
            </svg>
            Contacto
          </a>
          <Link
            className="flex justify-center items-center text-white bg-clearPurple gap-2 rounded-md p-2.5 transition-all"
            href="https://drive.google.com/file/d/11pyH41lXr09Ssu4qoq2ZFgM6mOXm_ggz/view?usp=sharing"
            target="_blank"
          >
            <i className="bi bi-download flex gap-2 justify-center items-center">
              <p>Curriculum</p>
            </i>
          </Link>
        </div>
        {/*BUTTON DE MENU*/}

        <button
          id="nav-button"
          onClick={handleBtn}
          className={`${
            isMobile ? "flex" : "hidden"
          } justify-center items-center m-2 text-clearPurple hover:bg-white w-12 h-12 rounded-full`}
        >
          <i
            ref={iconRef}
            className="bi bi-three-dots-vertical text-[22px]"
          ></i>
        </button>
      </div>
      {/*MENU COLLAPSE*/}
      <div id="menu-collapse" className={`${!isMobile && "hidden"} w-full`}>
        <div className="flex flex-col h-0">
          <div
            ref={divRef}
            className="flex justify-center items-center transform -translate-y-[150%] transition ease-in-out duration-300 bg-white dark:bg-reactBlack"
          >
            <nav className="flex flex-col text-reactBlack items-center justify-center gap-4 m-4">
              <a
                href="#home"
                onClick={(e) => handleClick(e, 1, "home")}
                className="flex transition-all border-reactBlack hover:text-clearPurple hover:border-clearPurple dark:border-white dark:hover:border-clearPurple dark:text-white dark:hover:text-clearPurple justify-center items-center border-b p-2 w-full font-barlow font-light text-2xl"
              >
                Inicio
              </a>
              <a
                href="#main-content"
                onClick={(e) => handleClick(e, 1, "main-content")}
                className="flex transition-all border-reactBlack hover:text-clearPurple hover:border-clearPurple dark:border-white dark:hover:border-clearPurple dark:text-white dark:hover:text-clearPurple justify-center items-center border-b p-2 w-full font-barlow font-light text-2xl"
              >
                Acerca
              </a>
              <a
                href="#main-content"
                onClick={(e) => handleClick(e, 2, "main-content")}
                className="flex transition-all border-reactBlack hover:text-clearPurple hover:border-clearPurple dark:border-white dark:hover:border-clearPurple dark:text-white dark:hover:text-clearPurple justify-center items-center border-b p-2 w-full font-barlow font-light text-2xl"
              >
                Resumen
              </a>
              <a
                href="#main-content"
                onClick={(e) => handleClick(e, 3, "main-content")}
                className="flex transition-all border-reactBlack hover:text-clearPurple hover:border-clearPurple dark:border-white dark:hover:border-clearPurple dark:text-white dark:hover:text-clearPurple justify-center items-center border-b p-2 w-full font-barlow font-light text-2xl"
              >
                Portafolio
              </a>
              <a
                href="#main-content"
                onClick={(e) => handleClick(e, 4, "main-content")}
                className="flex transition-all border-reactBlack hover:text-clearPurple hover:border-clearPurple dark:border-white dark:hover:border-clearPurple dark:text-white dark:hover:text-clearPurple justify-center items-center border-b p-2 w-full font-barlow font-light text-2xl"
              >
                Contacto
              </a>
              <Link
                className="flex justify-center items-center text-white bg-clearPurple gap-2 rounded-md p-2.5"
                href="https://drive.google.com/file/d/11pyH41lXr09Ssu4qoq2ZFgM6mOXm_ggz/view?usp=sharing"
                target="_blank"
              >
                <i className="bi bi-download flex gap-2 justify-center items-center">
                  <p>Curriculum</p>
                </i>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
