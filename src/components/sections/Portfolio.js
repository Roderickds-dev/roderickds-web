import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <div className="grid grid-rows-4 grid-cols-1 place-items-stretch p-4 h-full">
      <h1 className="text-4xl text-reactBlack dark:text-white font-medium inline-block relative after:content[''] after:inline-block md:after:w-[450px] after:w-[130px] after:flex-wrap after:h-[2px] after:bg-clearBlue md:after:ml-[70px] after:ml-12 [vertical-align:middle] after:shadow-sm after:shadow-reactBlack/45 after:dark:bg-reactBlack after:dark:shadow-white/45 mt-5">
        Portafolio
      </h1>
      <div className="grid place-content-center w-[250px] h-[300px] bg-clearBlue dark:bg-reactBlack gap-4 justify-self-center rounded-md">
        <h1 className="font-barlow text-2xl text-reactBlack  dark:text-white">
          Eccomerce
        </h1>
        <Link href="/eccomerce">
          <Image
            src="/images/eccomerce_2.jpg"
            width={500}
            height={500}
            alt={"Esta es una imagen del link a eccomerce"}
            className="w-52 h-36 hover:scale-110 rounded-md shadow-md shadow-reactBlack transition-all "
          />
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
