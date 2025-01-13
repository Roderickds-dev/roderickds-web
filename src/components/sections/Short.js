"use client";
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
        percentage: 90,
        value: 90,
        color: "progress progress-error",
      },
    ];

  return (
    <div
      id="principal"
      className="flex flex-col items-center justify-center dark:bg-reactBlack dark:text-white font-barlow font-light p-2 w-full h-full"
    >
      <div id="educacion" className="flex flex-col w-full gap-2">
        <h1 className="text-4xl">Resumen</h1>
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
      <div className="flex flex-wrap justify-evenly items-center gap-2">
        {cardsEducation.map((el, index) => (
          <div
            key={index}
            id="tarjetas"
            className="flex flex-col m-2 flex-nowrap items-center justify-center rounded-md border-2 border-clearPurple bg-white text-reactBlack dark:bg-reactBlack dark:text-white gap-2"
          >
            <div className="flex flex-col min-w-36 justify-center items-center m-4">
              <h1 className="font-ruluko text-lg">{el.date}</h1>
              <h2 className="font-bold [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)] text-lg dark:[text-shadow:_2px_2px_4px_rgba(255,255,255,0.3)]">
                {el.title}
              </h2>
              <i className="bi bi-circle-fill text-[6px] flex  items-center content-center gap-2">
                <p className="font-ruluko font-light text-lg ">{el.location}</p>
              </i>
            </div>
          </div>
        ))}
      </div>
      {/* SKILLES */}
      <div id="skilles" className="flex  w-full items-center">
        <div className="flex flex-col w-[60%] items-center">
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
          <div
            id="skiles izquierda"
            className="flex justify-around items-center flex-wrap gap-2 m-4"
          >
            {cardSkill.map((el, index) => (
              <div
                id="skiles"
                key={index}
                className="flex flex-col items-center gap-2 p-2 bg-clearPurple text-white dark:text-white rounded-2xl"
              >
                <ul className="flex justify-around w-full">
                  <li className="p-2 font-medium xl:font-semibold [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)] text-sm xl:text-xl dark:[text-shadow:_2px_2px_4px_rgba(255,255,255,0.3)] w-full">
                    {el.name}
                  </li>
                  <li className="p-2 font-ruluko font-thin content-center">
                    {el.percentage}%
                  </li>
                </ul>
                <progress
                  className={`${el.color} w-44 bg-white`}
                  value={el.value}
                  max="100"
                ></progress>
              </div>
            ))}
          </div>
        </div>
        <div
          id="skilles derecha"
          className="flex justify-center items-center w-[40%]"
        >
          <ul className="flex items-center justify-center text-xl flex-col p-4 m-2 gap-4">
            <li className="bg-clearPurple text-white rounded-2xl p-2 flex text-center lg:animate-scroll-front">
              Responsabilidad
            </li>
            <li className="bg-clearPurple text-white rounded-2xl p-2 flex text-center lg:animate-scroll-back">
              Trabajo en Equipo
            </li>
            <li className="bg-clearPurple text-white rounded-2xl p-2 flex text-center lg:animate-scroll-back">
              Puntualidad
            </li>
            <li className="bg-clearPurple text-white rounded-2xl  p-2 flex text-center lg:animate-scroll-front">
              Aprendizaje Continuo
            </li>
            <li className="bg-clearPurple text-white rounded-2xl p-2 flex text-center lg:animate-scroll-back">
              Gestión del Tiempo
            </li>
            <li className="bg-clearPurple text-white rounded-2xl p-2 flex text-center lg:animate-scroll-back">
              Detallista
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Short;
