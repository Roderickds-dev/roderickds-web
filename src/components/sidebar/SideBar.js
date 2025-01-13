"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useHeaderContext } from "@/context/HeaderContext";

const SideBar = () => {
  const { isMobile } = useHeaderContext();
  return (
    <div
      className={`${
        isMobile && "shadow-md dark:shadow-white"
      } flex h-full justify-center items-center lg:items-start gap-2 p-4 dark:bg-reactBlack`}
    >
      <div className="flex flex-col justify-center items-center">
        {/**DIV QUE CONTIENE LA IMAGEN */}
        <div className="flex justify-center items-center rounded-md">
          <Image
            src={`/images/profile-pic-web.jpg`}
            width={500}
            height={500}
            alt={`Este es la imagen de perfil`}
            priority
            className="h-40 w-44 rounded-md"
            quality={100}
          />
        </div>

        <div className="flex flex-col justify-center items-center font-barlow font-light text-xl text-reactBlack dark:text-white">
          <h1 className="font-bubbler text-5xl p-3">Roderick Díaz</h1>
          <p>Frontend Developer</p>
          <p>React.js, Next.js, Tailwind CSS, Javascript, CSS, HTML</p>
          <div className="flex flex-col justify-center items-center transition-all ">
            {/*AQUI ESTAN LOS ICONOS DE CONTACTO*/}
            <div
              id="social-icons"
              className="md:mt-20 p-2 flex justify-center items-center"
            >
              <div
                id="wrapper"
                className="inline-flex gap-4 justify-center items-center"
              >
                <div
                  id="icon mail"
                  className="flex items-center justify-center cursor-pointer relative z-[2] flex-col group"
                >
                  <div
                    id="tooltip"
                    className=" shadow-md z-[1] shadow-slate-600 text-2xl py-[10px] px-[18px] rounded-3xl absolute top-[0px] before:content-[''] before:absolute before:h-[15px] before:w-[15px] before:bg-clearPurple before:bottom-[-8px] before:left-[40%] before:translate-x-[50%] before:rotate-45 opacity-0 pointer-events-none [transition:_all_0.4s_cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:pointer-events-auto group-hover:opacity-100 group-hover:top-[-70px] group-hover:bg-clearPurple dark:text-white"
                  >
                    Contáctame!
                  </div>
                  <span className="h-[60px] w-[60px] block text-center content-center relative z-[2]">
                    <a href="mailto:roderickds.dev@gmail.com" target="_blank">
                      <i className="bi bi-envelope text-reactBlack hover:text-clearPurple dark:hover:text-clearPurple dark:text-white text-3xl flex justify-center items-center rounded-full"></i>
                    </a>
                  </span>
                </div>
                <div
                  id="icon github"
                  className="flex items-center justify-center cursor-pointer flex-col relative z-[2] group"
                >
                  <div
                    id="tooltip"
                    className="shadow-md z-[1] shadow-slate-600 text-2xl py-[10px] px-[18px] rounded-3xl absolute top-[0px] before:content-[''] before:absolute before:h-[15px] before:w-[15px] before:bg-clearPurple before:bottom-[-8px] before:left-[40%] before:translate-x-[50%] before:rotate-45 opacity-0 pointer-events-none [transition:_all_0.4s_cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:pointer-events-auto group-hover:opacity-100 group-hover:top-[-70px] group-hover:bg-clearPurple dark:text-white"
                  >
                    GitHub
                  </div>
                  <span className="h-[60px] w-[60px] block text-center content-center relative z-[2]">
                    <Link
                      href="https://github.com/Roderickds-dev"
                      target="_blank"
                    >
                      <i className="bi bi-github text-reactBlack hover:text-clearPurple dark:hover:text-clearPurple  dark:text-white text-3xl flex justify-center items-center rounded-full"></i>
                    </Link>
                  </span>
                </div>
                <div
                  id="icon linkedin"
                  className="flex items-center justify-center cursor-pointer flex-col relative z-[2] group"
                >
                  <div
                    id="tooltip"
                    className="shadow-md z-[1] shadow-slate-600 text-2xl py-[10px] px-[18px] rounded-3xl absolute top-[0px] before:content-[''] before:absolute before:h-[15px] before:w-[15px] before:bg-clearPurple before:bottom-[-8px] before:left-[40%] before:translate-x-[50%] before:rotate-45 opacity-0 pointer-events-none [transition:_all_0.4s_cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:pointer-events-auto group-hover:opacity-100 group-hover:top-[-70px] group-hover:bg-clearPurple dark:text-white"
                  >
                    LinkedIn
                  </div>
                  <span className="h-[60px] w-[60px] block text-center content-center relative z-[2]">
                    <Link
                      href="https://www.linkedin.com/in/roderickds-dev/"
                      target="_blank"
                    >
                      <i className="bi bi-linkedin text-reactBlack hover:text-clearPurple dark:hover:text-clearPurple  dark:text-white text-3xl flex justify-center items-center rounded-full"></i>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            {/** AQUI ESTA LA LISTA CON LA UBICACION CORREO Y NACIMIENTO **/}
            <div className="flex flex-col gap-4 text-reactBlack dark:text-white w-full">
              <ul className="flex flex-col justify-center items center w-full">
                <li className="flex justify-center items-center gap-2 w-full m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    height="25"
                    width="25"
                  >
                    <g id="inbox-open--mail-envelope-email-message-open-letter-text-document">
                      <path
                        id="Union"
                        fill="url(#paint0_linear_9371_12622)"
                        d="M10.0372.339362c-2.05376-.119475-4.02028-.119475-6.074 0C2.71554.411945 1.70456 1.38265 1.62839 2.62523c-.03715.60599-.06291 1.37118-.07743 2.10705 1.38322 1.1839 2.81124 2.27128 4.35769 3.23421.65425.40739 1.52903.40738 2.18328-.00001 1.54637-.9629 2.97437-2.05022 4.35747-3.23405-.0145-.73599-.0403-1.50096-.0774-2.1072-.0762-1.24258-1.0872-2.213284-2.3348-2.285868ZM4.45918 8.4759l.00313.00223c.25721.17088.51766.3386.78169.503C3.57416 7.94137 2.04716 6.76879.58215 5.50463c-.042391.12125-.073377.24527-.09239.37116C.36016 6.75928.25 7.66506.25 8.58983c0 .92477.11016 1.83137.23976 2.71407.087695.5806.430122 1.1215.97144 1.5343.54133.4128 1.24961.6732 2.00936.7388 1.14804.0941 2.3274.1734 3.52944.1734 1.20204 0 2.3814-.0793 3.5305-.1734.7598-.0656 1.4681-.326 2.0094-.7388.5413-.4128.8837-.9536.9714-1.5343.1275-.8835.2387-1.7893.2387-2.71407 0-.92477-.1102-1.83137-.2398-2.71403-.019-.1258-.0499-.24972-.0922-.37088-1.2347 1.06534-2.5132 2.06562-3.88429 2.9762l.0027-.00192c-.25658.17045-.5164.33775-.77977.50175-1.05957.65977-2.45307.65995-3.51264.00018-.26509-.16506-.52662-.33364-.78482-.50523Zm1.03973-3.69112c-.34518 0-.625.27983-.625.625 0 .34518.27982.625.625.625h3.00286c.34518 0 .625-.27982.625-.625 0-.34517-.27982-.625-.625-.625H5.49891Zm-.625-1.81445c0-.34518.27982-.625.625-.625h3.00286c.34518 0 .625.27982.625.625 0 .34517-.27982.625-.625.625H5.49891c-.34518 0-.625-.27983-.625-.625Z"
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_9371_12622"
                        x1="13.704"
                        x2="-2.283"
                        y1="13.753"
                        y2="4.76"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FF51E3"></stop>
                        <stop offset="1" stopColor="#1B4DFF"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex flex-col w-full justify-center">
                    <p>Correo Elecntrónico</p>
                    <p className=" border-b-[1px] border-b-reactBlack">
                      roderickds.dev@gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex justify-center items-center gap-2 m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    height="25"
                    width="25"
                  >
                    <desc>
                      Location Pin 3 Streamline Icon: https://streamlinehq.com
                    </desc>
                    <g id="location-pin-3--navigation-map-maps-pin-gps-location">
                      <path
                        id="Union"
                        fill="url(#paint0_linear_9371_10900)"
                        fillRule="evenodd"
                        d="M6.94898 0C4.37297 0 2.23493 1.99077 2.05139 4.56023c-.08514 1.19209.17941 2.46015.96029 3.48553.86406 1.1346 1.74692 1.91278 3.09174 2.80824.5427.3613 1.25004.3613 1.79274 0 1.34482-.89546 2.22764-1.67364 3.09174-2.80824.7809-1.02538 1.0454-2.29344.9603-3.48553C11.7647 1.99077 9.62661 0 7.0506 0h-.10162Zm.05109 3.3291c-.48784 0-.90426.13798-1.19848.4322-.29423.29423-.43221.71065-.43221 1.19848 0 .48784.13798.90426.43221 1.19849.29422.29422.71064.4322 1.19848.4322.48783 0 .90425-.13798 1.19848-.4322.29422-.29423.4322-.71065.4322-1.19849 0-.48783-.13798-.90425-.4322-1.19848-.29423-.29422-.71065-.4322-1.19848-.4322Zm-1.58952 8.5653c-1.24091-.8262-2.15395-1.589-3.00513-2.60485-.24243.1091-.45235.28948-.60033.52509-.53772.85616-.953324 1.75046-1.262017 2.73466-.181973.5801.198116 1.2363.847537 1.2765 3.74651.2321 7.4723.2322 11.21879.0004.653-.0405 1.0326-.7028.8452-1.2842-.3174-.9848-.7409-1.8793-1.2858-2.7346-.1447-.22718-.3472-.40228-.5807-.51079-.8495 1.01239-1.76121 1.77349-2.99925 2.59779-.96229.6408-2.216.6408-3.1783 0Z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_9371_10900"
                        x1="14.63"
                        x2="-3.758"
                        y1="16.965"
                        y2="4.832"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFD600"></stop>
                        <stop offset="1" stopColor="#FF007A"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex flex-col w-full justify-center">
                    <p>Ubicación</p>
                    <p className=" border-b-[1px] border-b-reactBlack">
                      C.A.B.A, Buenos Aires, Argentina
                    </p>
                  </div>
                </li>
                <li className="flex justify-center items-center gap-2 m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    height="25"
                    width="25"
                  >
                    <g id="calendar-mark--calendar-date-day-month-mark">
                      <path
                        id="Subtract"
                        fill="url(#paint0_linear_9371_4994)"
                        fillRule="evenodd"
                        d="M5.00195 1c0-.414214-.33578-.75-.75-.75-.41421 0-.75.335786-.75.75v.80236C1.89107 1.99311.611241 3.25991.426226 4.8489c-.234968 2.018-.234968 3.74258 0 5.7606.194686 1.672 1.601624 2.9873 3.330934 3.0675 1.03652.048 2.09494.073 3.24274.073 1.14781 0 2.20623-.025 3.2427-.073 1.7294-.0802 3.1363-1.3955 3.331-3.0675.2349-2.01802.2349-3.7426 0-5.7606-.185-1.58892-1.4648-2.85569-3.0756-3.04651V1c0-.414214-.3357-.75-.74995-.75-.41422 0-.75.335786-.75.75v.73531c-.64333-.01782-1.30441-.02694-1.99815-.02694-.69366 0-1.35468.00912-1.99795.02694V1Zm-.74857 5.78395V6.7828h.0023v.0023h-.0023v-.00115Zm.00115-.86c-.21683 0-.44686.06231-.62227.23773-.17542.17541-.23773.40544-.23773.62227 0 .21683.06231.44686.23773.62228.17541.17541.40544.23772.62227.23772.21683 0 .44686-.06231.62228-.23772.17541-.17542.23772-.40545.23772-.62228 0-.21683-.06231-.44686-.23772-.62227-.17542-.17542-.40545-.23773-.62228-.23773Zm-.00115 3.86V9.7828h.0023v.0023h-.0023v-.00115Zm.00115-.86c-.21683 0-.44686.06231-.62227.23773-.17542.17541-.23773.40544-.23773.62227 0 .21685.06231.44685.23773.62225.17541.1754.40544.2378.62227.2378.21683 0 .44686-.0624.62228-.2378.17541-.1754.23772-.4054.23772-.62225 0-.21683-.06231-.44686-.23772-.62227-.17542-.17542-.40545-.23773-.62228-.23773Zm2.74397.85885v.0023h.0023v-.0023h-.0023Zm-.62113-.62112c.17542-.17542.40545-.23773.62228-.23773.21683 0 .44686.06231.62227.23773.17542.17541.23773.40544.23773.62227 0 .21685-.06231.44685-.23773.62225-.17541.1754-.40544.2378-.62227.2378-.21683 0-.44686-.0624-.62228-.2378-.17541-.1754-.23772-.4054-.23772-.62225 0-.21683.06231-.44686.23772-.62227Zm.62503-2.37773V6.7828h.00231v.0023H7.0024v-.00115Zm.00115-.86c-.21682 0-.44686.06231-.62227.23773-.17541.17541-.23773.40544-.23773.62227 0 .21683.06232.44686.23773.62228.17541.17541.40545.23772.62227.23772.21683 0 .44687-.06231.62228-.23772.17541-.17542.23772-.40545.23772-.62228 0-.21683-.06231-.44686-.23772-.62227-.17541-.17542-.40545-.23773-.62228-.23773Zm2.74202.85885v.0023h.0023v-.0023h-.0023Zm-.62113-.62112c.17542-.17542.40545-.23773.62228-.23773.21683 0 .44688.06231.62228.23773.1754.17541.2377.40544.2377.62227 0 .21683-.0623.44686-.2377.62228-.1754.17541-.40545.23772-.62228.23772-.21683 0-.44686-.06231-.62228-.23772-.17541-.17542-.23772-.40545-.23772-.62228 0-.21683.06231-.44686.23772-.62227Z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_9371_4994"
                        x1="14.92"
                        x2="-3.29"
                        y1="16.609"
                        y2="3.675"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFD600"></stop>
                        <stop offset="1" stopColor="#FF007A"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex flex-col w-full justify-center">
                    <p>Nacimiento</p>
                    <p className=" border-b-[1px] border-b-reactBlack">
                      Abril 26, 1994
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
