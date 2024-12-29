import React from "react";
import Image from "next/image";

const Short = () => {
  const cardsEducation = [
      {
        id: 1,
        date: 2024,
        title: "Next Js",
        location: "Online",
      },
      {
        id: 2,
        date: 2024,
        title: "Tailwind CSS",
        location: "Online",
      },
      {
        id: 3,
        date: 2024,
        title: "Git & GitHub",
        location: "Online",
      },
      {
        id: 4,
        date: 2023,
        title: "Redux Toolkit",
        location: "Online",
      },
      {
        id: 5,
        date: 2023,
        title: "React Js",
        location: "Udemy Academy",
      },
      {
        id: 6,
        date: 2023,
        title: "Flexbox CSS - Grid CSS",
        location: "Online",
      },
      {
        id: 7,
        date: 2022,
        title: "FronEnd Web Developer",
        location: "Udemy Acadmy",
      },
    ],
    cardSkill = [
      {
        id: 1,
        name: "Next Js",
        percentage: 80,
        value: 80,
        color: "progress progress-success",
      },
      {
        id: 2,
        name: "Tailwind CSS",
        percentage: 85,
        value: 85,
        color: "progress progress-primary",
      },
      {
        id: 3,
        name: "Git & GitHub",
        percentage: 70,
        value: 70,
        color: "progress progress-success",
      },
      {
        id: 4,
        name: "JavaScript",
        percentage: 85,
        value: 85,
        color: "progress progress-warning",
      },
      {
        id: 5,
        name: "Responsive Designe",
        percentage: 80,
        value: 80,
        color: "progress progress-error",
      },
    ];

  return (
    <div
      id="principal"
      className="flex flex-col justify-center mx-4 my-6 md:mx-8 gap-3 w-full"
    >
      <h1 className="text-4xl text-reactBlack dark:text-white font-medium inline-block relative after:content[''] after:inline-block md:after:w-[450px] after:w-[130px] after:flex-wrap after:h-[2px] after:bg-clearBlue md:after:ml-[70px] after:ml-12 [vertical-align:middle] after:shadow-sm after:shadow-reactBlack/45 after:dark:bg-reactBlack after:dark:shadow-white/45 mt-5">
        Resumen
      </h1>
      <div id="educacion" className="flex m-4">
        <h1 className="flex gap-4 text-reactBlack dark:text-white text-2xl">
          <Image
            src="/images/sombrero-de-graduado.png"
            width={35}
            height={35}
            alt="study"
            className="object-contain"
            quality={100}
          />
          Educación
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly items-center">
        {cardsEducation.map((el, index) => (
          <div
            key={index}
            id="tarjetas"
            className="flex flex-col flex-nowrap  bg-clearBlue text-reactBlack dark:bg-reactBlack dark:text-white w-[280px] gap-2 m-2 px-8 py-4 rounded-md h-[120px] justify-center"
          >
            <h1 className="font-ruluko text-lg">{el.date}</h1>
            <h2 className="font-bold -mx-2 [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)] text-lg dark:[text-shadow:_2px_2px_4px_rgba(255,255,255,0.3)]">
              {el.title}
            </h2>
            <i className="bi bi-circle-fill text-[6px] flex  items-center content-center gap-2">
              <p className="font-ruluko font-light text-lg ">{el.location}</p>
            </i>
          </div>
        ))}
      </div>
      <div id="skilles" className="flex justify-evenly items-center flex-wrap">
        <div id="skiles izquierda" className="flex flex-col gap-2 m-4">
          <h1 className="flex gap-4 text-reactBlack dark:text-white text-2xl">
            <Image
              src="/images/notebook.png"
              width={35}
              height={35}
              alt="study"
              className="object-contain"
              quality={100}
            />
            Skills
          </h1>
          {cardSkill.map((el, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-3 bg-clearBlue  text-reactBlack dark:bg-reactBlack dark:text-white  rounded-2xl"
            >
              <ul className="flex justify-around w-[280px]">
                <li className="m-2 font-bold -mx-2 [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)] text-lg dark:[text-shadow:_2px_2px_4px_rgba(255,255,255,0.3)]">
                  {el.name}
                </li>
                <li className="m-2 font-ruluko font-thin">{el.percentage}%</li>
              </ul>
              <progress
                className={`${el.color} w-56 dark:bg-white`}
                value={el.value}
                max="100"
              ></progress>
            </div>
          ))}
        </div>
        <div
          id="skilles derecha"
          className="flex justify-center items-center w-[330px]"
        >
          <ul className="flex items-center justify-center flex-col p-4 m-2 gap-4">
            <li className="bg-clearBlue  text-reactBlack dark:bg-reactBlack dark:text-white  rounded-2xl w-48 h-8 flex justify-center items-center animate-scroll-front">
              Responsabilidad
            </li>
            <li className="bg-clearBlue  text-reactBlack dark:bg-reactBlack dark:text-white rounded-2xl w-48 h-8 flex justify-center items-center animate-scroll-back">
              Trabajo en Equipo
            </li>
            <li className="bg-clearBlue  text-reactBlack dark:bg-reactBlack dark:text-white  rounded-2xl w-48 h-8 flex justify-center items-center animate-scroll-front">
              Puntualidad
            </li>
            <li className="bg-clearBlue  text-reactBlack dark:bg-reactBlack dark:text-white  rounded-2xl w-48 h-8 flex justify-center items-center animate-scroll-back">
              Aprendizaje Continuo
            </li>
            <li className="bg-clearBlue  text-reactBlack dark:bg-reactBlack dark:text-white  rounded-2xl w-48 h-8 flex justify-center items-center animate-scroll-front">
              Gestión del Tiempo
            </li>
            <li className="bg-clearBlue  text-reactBlack dark:bg-reactBlack dark:text-white  rounded-2xl w-48 h-8 flex justify-center items-center animate-scroll-back">
              Detallista
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Short;
