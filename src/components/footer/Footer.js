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
      id: 2,
      src: "/images/framer.png",
      title: "Framer",
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
    <div className="overflow-hidden flex bg-mediumBlue rounded-md ">
      <div className="flex rounded-md sm:w-[800px] justify-center sm:h-[150px] bg-mediumBlue items-center w-auto gap-2 sm:m-4 sm:ml-8 p-3">
        {imageData.map((el, index) => (
          <div
            id={el.id}
            key={index}
            className="flex justify-center items-center sm:w-[115px] sm:h-[95px] bg-white rounded-full shadow-md shadow-slate-600 gap-1 my-3 w-[75px] h-[55px] sm:animate-scroll-reverse"
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
    </div>
  );
};

export default Footer;
