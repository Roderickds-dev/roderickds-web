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
      src: "/images/js_css_html.png",
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
    <div className="flex flex-col items-center content-center h-full my-6 mx-4">
      <div className="flex flex-col w-full items-center justify-center mx-4">
        <h1 className="text-4xl text-reactBlack dark:text-white font-medium inline-block relative after:content[''] after:inline-block md:after:w-[450px] after:w-[150px] after:flex-wrap after:h-[2px] after:bg-clearBlue md:after:ml-[100px] after:ml-12 [vertical-align:middle] after:shadow-sm after:shadow-reactBlack/45 after:dark:bg-reactBlack after:dark:shadow-white/45 mt-5">
          Acerca
        </h1>
        <p className="my-4 text-xl text-center text-reactBlack dark:text-white font-normal bg-clearBlue dark:bg-reactBlack m-2 p-2 rounded-md">
          Hola, Soy desarrollador frontend con experiencia en JavaScript, HTML,
          CSS y especializado en frameworks y bibliotecas modernas como Next.js
          y React.js. Mi visión es desarrollar interfaces eficientes, accesibles
          y estéticamente agradables para los usuarios. Además estoy en
          constante aprendizaje para mantenerme al día con las últimas
          tendencias en el desarrollo web.
        </p>
      </div>

      {isMobile ? (
        <div
          id="contenedor-principal"
          className="flex flex-wrap gap-4 m-4 p-4 justify-center"
        >
          <div id="container" className="w-[232px] h-[202px] group">
            {cardsData.map((card, index) => (
              <div
                ref={(el) => (cards.current[index] = el)}
                key={card.id}
                id={`card-${index}`}
                className="relative w-full h-full gap-6 mb-20 mx-2 flex justify-center shadow-xl shadow-reactBlack rounded-lg"
              >
                <div
                  id={`front-${index}`}
                  className="absolute w-full h-full bg-white [backface-visibility:hidden] rounded-lg"
                >
                  <Image
                    src={card.src}
                    priority
                    width={500}
                    height={500}
                    alt={`Este es el titulo de las tarjetas de presentación ${card.title}`}
                    className={
                      card.id === 5
                        ? "rounded-lg object-contain w-full h-full"
                        : "rounded-lg object-cover w-full h-full"
                    }
                    quality={100}
                  />
                </div>
                <div
                  id={`back-${index}`}
                  className="absolute w-full h-full bg-clearBlue [transform:rotateY(180deg)]  [backface-visibility:hidden]  text-reactBlack flex flex-col justify-center items-center rounded-md border-none dark:bg-reactBlack dark:text-white"
                >
                  <p className="text-sm text-center">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          id="contenedor-principal"
          className="flex flex-wrap gap-4 m-4 p-4 justify-evenly"
        >
          {cardsData.map((card, index) => (
            <div
              ref={(el) => (cards.current[index] = el)}
              key={card.id}
              id="container"
              className="w-[232px] h-[202px] [perspective:500px] group m-2 "
            >
              <div
                id={`card-${index}`}
                className="relative w-full h-full transition-transform duration-[1500ms] [transform-style:preserve-3d] hover:cursor-pointer group-hover:[transform:rotateY(180deg)] shadow-xl shadow-reactBlack rounded-lg "
              >
                <div
                  id={`front-${index}`}
                  className="absolute w-full h-full bg-white [backface-visibility:hidden] rounded-lg"
                >
                  <Image
                    src={card.src}
                    priority
                    width={500}
                    height={500}
                    alt={`Este es el titulo de las tarjetas de presentación ${card.title}`}
                    className={
                      card.id === 5
                        ? "rounded-lg object-contain w-full h-full"
                        : "rounded-lg object-cover w-full h-full"
                    }
                    quality={100}
                  />
                </div>
                <div
                  id={`back-${index}`}
                  className="absolute w-full h-full dark:bg-reactBlack [transform:rotateY(180deg)]  [backface-visibility:hidden]  dark:text-white flex flex-col justify-center items-center rounded-md border-none content-center bg-clearBlue text-reactBlack"
                >
                  <p className="text-sm text-center">{card.description}</p>
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
