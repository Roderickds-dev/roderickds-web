import Image from "next/image";
import React from "react";

const Footer = () => {
  const imageData = [
    {
      id: 1,
      src: "/images/redux.png",
      title: "Redux",
    },
    {
      id: 3,
      src: "/images/daisy.png",
      title: "Daisy",
    },
    {
      id: 4,
      src: "/images/bulma.png",
      title: "Bulma",
    },
    {
      id: 5,
      src: "/images/boostrap2.gif",
      title: "Boostrap",
    },
  ];

  return (
    <div className="flex flex-col justify-center bg-clearPurple items-center p-2">
      <div className="flex w-full justify-center items-center gap-2 p-2">
        {imageData.map((el, index) => (
          <div
            id={el.id}
            key={index}
            className="flex justify-center items-center sm:w-[85px] sm:h-[65px] bg-white rounded-full shadow-md shadow-slate-600 gap-1 w-[75px] h-[55px] sm:animate-scroll-reverse"
          >
            <Image
              src={el.src}
              priority
              width={500}
              height={500}
              alt={`Este es el titulo de los iconos de las librerias ${el.title}`}
              className="object-contain rounded-full w-auto h-auto"
              quality={100}
            />
          </div>
        ))}
      </div>
      <p className="text-white">Derechos de autor © 2024 Roderick Díaz</p>
    </div>
  );
};

export default Footer;
