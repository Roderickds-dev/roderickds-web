"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <div className="flex flex-col justify-center items-center dark:bg-reactBlack dark:text-white font-barlow font-light p-2 gap-4 w-full h-full">
      <h1 className="text-4xl p-2 border-b-4 border-clearPurple">Portafolio</h1>
      <div className="flex flex-col justify-center items-center p-2 gap-2">
        <h1 className="font-barlow text-2xl text-reactBlack dark:text-white p-2">
          Proyecto Personal (Eccomerce)
        </h1>
        <Link href="/eccomerce" target="_blank">
          <Image
            src="/images/eccomerce_2.jpg"
            width={500}
            height={500}
            alt={"Esta es una imagen del link a eccomerce"}
            className="w-52 h-36 hover:scale-110 rounded-md shadow-md shadow-reactBlack transition-all"
          />
        </Link>
        <h1 className="font-barlow text-2xl text-reactBlack dark:text-white p-2">
          Tecnologías: NextJs, JavaScript, Tailwind CSS.
        </h1>
      </div>
    </div>
  );
};

export default Portfolio;
