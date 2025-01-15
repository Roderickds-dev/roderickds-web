"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useHeaderContext } from "@/context/HeaderContext";

const About = () => {
  const { isMobile } = useHeaderContext();
  const cards = useRef([]);

  const cardsData = [
    {
      id: 1,
      src: "/images/nextjs.jpg",
      title: "NextJS",
      description:
        "Familiarizado con la creación de aplicaciones web utilizando Next.js. Enfocado en el aprendizaje del renderizado de componentes en el lado del cliente.",
    },
    {
      id: 2,
      src: "/images/tailwind_3.png",
      title: "TailwindCSS",
      description:
        "Utilizo Tailwind CSS para crear interfaces personalizadas de forma rápida y eficiente. En cada proyecto busco mejorar mis habilidades de diseño para asegurar una experiencia visual limpia y responsiva.",
    },
    {
      id: 3,
      src: "/images/reactjs.png",
      title: "ReactJS",
      description:
        "En constante mejora de mis capacidades para el desarrollo de componentes reutilizables con React.js.",
    },
    {
      id: 4,
      src: "/images/github.png",
      title: "GitHub",
      description:
        "Estoy mejorando mi destreza en Git y GitHub para llevar control de versiones de mis proyectos, lo que me permite mantener un flujo de trabajo organizado y profersional.",
    },
    {
      id: 5,
      src: "/images/javascript.jpg",
      title: "JS, CSS & HTML",
      description:
        "Tengo buen manejo de JavaScript. Creo sitios web accesibles y semánticos con HTML, mientras desarrollo estilos responsivos y adaptables con CCS, flexbox y CSS Grid.",
    },
  ];

  useEffect(() => {
    if (!cards.current) return;

    const cb = (entries) => {
      entries.forEach((el) => {
        const card = el.target;

        if (el.isIntersecting && isMobile) {
          card.classList.add(
            "[transform:rotateY(180deg)]",
            "transition-transform",
            "duration-[1500ms]",
            "[transform-style:preserve-3d]"
          );
        } else {
          card.classList.remove("[transform:rotateY(180deg)]");
        }
      });
    };
    const observer = new IntersectionObserver(cb, { threshold: [0.75, 1] });

    cards.current.forEach((el) => observer.observe(el));
  }, [isMobile]);

  return (
    <div className="flex flex-col items-center justify-center dark:bg-reactBlack dark:text-white font-barlow font-light gap-4 p-6 w-full h-full">
      <div className="flex flex-col items-center justify-center flex-wrap">
        <h1 className="text-4xl border-b-4 border-clearPurple p-2">Acerca</h1>
        <p className="text-xl text-center text-reactBlack dark:text-white dark:bg-reactBlack p-2">
          Hola, Soy desarrollador frontend con experiencia en JavaScript, HTML,
          CSS y especializado en frameworks y bibliotecas modernas como Next.js
          y React.js. Mi visión es desarrollar interfaces eficientes, accesibles
          y estéticamente agradables para los usuarios. Además estoy en
          constante aprendizaje para mantenerme al día con las últimas
          tendencias en el desarrollo web.
        </p>
      </div>
      {/* RENDERIZADO VERSION MOBILE */}
      {isMobile ? (
        <div id="contenedor-principal" className="flex p-2 h-full w-full">
          <div
            id="container"
            className="w-full h-auto flex gap-4 justify-center flex-wrap group"
          >
            {cardsData.map((card, index) => (
              <div
                ref={(el) => (cards.current[index] = el)}
                key={card.id}
                id={`card-${index}`}
                className="relative w-[212px] h-[182px] m-2 flex justify-center rounded-lg"
              >
                {/* PARTE DELANTERA DE LAS CARDS */}
                <div
                  id={`front-${index}`}
                  className="absolute w-full h-full [backface-visibility:hidden] rounded-lg"
                >
                  <Image
                    src={card.src}
                    priority
                    width={500}
                    height={500}
                    alt={`Este es el titulo de las tarjetas de presentación ${card.title}`}
                    className={
                      card.id === 5
                        ? "rounded-lg object-fill w-full h-full"
                        : "rounded-lg object-cover w-full h-full"
                    }
                    quality={100}
                  />
                </div>
                {/**PARTE TRASERA DE LAS CARDS*/}
                <div
                  id={`back-${index}`}
                  className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] flex justify-center items-center rounded-md border-2 border-clearPurple bg-white text-reactBlack dark:bg-reactBlack dark:text-white"
                >
                  <p className="text-md text-center">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // /** ESTA ES EL RENDERIZADO VENTANA COMPLETA **/
        <div
          id="contenedor-principal"
          className="flex flex-wrap p-2 items-center justify-center"
        >
          {cardsData.map((card, index) => (
            <div
              ref={(el) => (cards.current[index] = el)}
              key={card.id}
              id="container"
              className="w-[212px] h-[182px] [perspective:500px] group m-2 "
            >
              {/**DIV CONTIENE LAS CARDS INTERNAMENTE */}
              <div
                id={`card-${index}`}
                className="relative w-full h-full transition-transform duration-[1500ms] [transform-style:preserve-3d] hover:cursor-pointer group-hover:[transform:rotateY(180deg)]"
              >
                {/* PARTE DELANTERA DE LAS CARDS VERSION MOBILE */}
                <div
                  id={`front-${index}`}
                  className="absolute w-full h-full [backface-visibility:hidden] rounded-lg"
                >
                  <Image
                    src={card.src}
                    priority
                    width={500}
                    height={500}
                    alt={`Este es el titulo de las tarjetas de presentación ${card.title}`}
                    className={
                      card.id === 5
                        ? "rounded-lg object-fill w-full h-full"
                        : "rounded-lg object-cover w-full h-full"
                    }
                    quality={100}
                  />
                </div>
                {/* PARTE TRASERAS DE LAS CARDS EN VERSION PANTALLA COMPLETA */}
                <div
                  id={`back-${index}`}
                  className="flex justify-center items-center absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-md border-2 border-clearPurple bg-white text-reactBlack dark:bg-reactBlack dark:text-white"
                >
                  <p className="text-md text-center">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default About;
