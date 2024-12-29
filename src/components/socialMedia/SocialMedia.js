"use client";

import Link from "next/link";

const SocialMedia = () => {
  return (
    <div id="wrapper" className="inline-flex gap-4 justify-center">
      <div
        id="icon facebook"
        className="flex items-center justify-center cursor-pointer flex-col relative z-[2] group"
      >
        <div
          id="tooltip"
          className="bg-white shadow-md z-[1] shadow-slate-600 text-2xl py-[10px] px-[18px] rounded-3xl absolute top-[0px] before:content-[''] before:absolute before:h-[15px] before:w-[15px] before:bg-[#3B5999] before:bottom-[-8px] before:left-[40%] before:translate-x-[50%] before:rotate-45 opacity-0 pointer-events-none [transition:_all_0.4s_cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:pointer-events-auto group-hover:opacity-100 group-hover:top-[-70px] group-hover:bg-[#3B5999] text-white"
        >
          Facebook
        </div>
        <span className="h-[60px] w-[60px] block bg-clearBlue dark:bg-reactBlack shadow-md shadow-slate-600 text-center rounded-full content-center relative z-[2] group-hover:bg-[#3b5999] hover:text-white">
          <Link
            href="https://www.facebook.com/roderick.bro?mibextid=ZbWKwL"
            target="_blank"
          >
            <i className="bi bi-facebook bg-clearBlue dark:bg-reactBlack dark:text-white text-3xl text-reactBlack group-hover:bg-[#3b5999] group-hover:text-white"></i>
          </Link>
        </span>
      </div>
      <div
        id="icon instagram"
        className="flex items-center justify-center cursor-pointer flex-col relative z-[2] group"
      >
        <div
          id="tooltip"
          className="bg-white shadow-md z-[1] shadow-slate-600 text-2xl py-[10px] px-[18px] rounded-3xl absolute top-[0px] before:content-[''] before:absolute before:h-[15px] before:w-[15px] before:bg-[#E1306C] before:bottom-[-8px] before:left-[40%] before:translate-x-[50%] before:rotate-45 opacity-0 pointer-events-none [transition:_all_0.4s_cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:pointer-events-auto group-hover:opacity-100 group-hover:top-[-70px] group-hover:bg-[#E1306C] text-white"
        >
          Instagram
        </div>
        <span className="h-[60px] w-[60px] block bg-clearBlue dark:bg-reactBlack shadow-md shadow-slate-600 text-center rounded-full content-center relative z-[2] group-hover:bg-[#E1306C] hover:text-white">
          <Link
            href="https://www.instagram.com/roderickds/?igsh=MTA3bzlpazY2amtzNw%3D%3D"
            target="_blank"
          >
            <i className="bi bi-instagram bg-clearBlue dark:bg-reactBlack dark:text-white text-3xl text-reactBlack group-hover:bg-[#E1306C] group-hover:text-white"></i>
          </Link>
        </span>
      </div>
      <div
        id="icon github"
        className="flex items-center justify-center cursor-pointer flex-col relative z-[2] group"
      >
        <div
          id="tooltip"
          className="bg-white shadow-md z-[1] shadow-slate-600 text-2xl py-[10px] px-[18px] rounded-3xl absolute top-[0px] before:content-[''] before:absolute before:h-[15px] before:w-[15px] before:bg-[#333] before:bottom-[-8px] before:left-[40%] before:translate-x-[50%] before:rotate-45 opacity-0 pointer-events-none [transition:_all_0.4s_cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:pointer-events-auto group-hover:opacity-100 group-hover:top-[-70px] group-hover:bg-[#333] text-white"
        >
          GitHub
        </div>
        <span className="h-[60px] w-[60px] block bg-clearBlue dark:bg-reactBlack shadow-md shadow-slate-600 text-center rounded-full content-center relative z-[2] group-hover:bg-[#333] hover:text-white">
          <Link href="https://github.com/Roderickds-dev" target="_blank">
            <i className="bi bi-github bg-clearBlue dark:bg-reactBlack dark:text-white text-3xl text-reactBlack group-hover:bg-[#333] group-hover:text-white"></i>
          </Link>
        </span>
      </div>
      <div
        id="icon linkedin"
        className="flex items-center justify-center cursor-pointer flex-col relative z-[2] group"
      >
        <div
          id="tooltip"
          className="bg-white shadow-md z-[1] shadow-slate-600 text-2xl py-[10px] px-[18px] rounded-3xl absolute top-[0px] before:content-[''] before:absolute before:h-[15px] before:w-[15px] before:bg-[#0a66c2] before:bottom-[-8px] before:left-[40%] before:translate-x-[50%] before:rotate-45 opacity-0 pointer-events-none [transition:_all_0.4s_cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:pointer-events-auto group-hover:opacity-100 group-hover:top-[-70px] group-hover:bg-[#0a66c2] text-white"
        >
          LinkedIn
        </div>
        <span className="h-[60px] w-[60px] block bg-clearBlue dark:bg-reactBlack shadow-md shadow-slate-600 text-center rounded-full content-center relative z-[2] group-hover:bg-[#0a66c2] hover:text-white">
          <Link
            href="https://www.linkedin.com/in/roderickds-dev/"
            target="_blank"
          >
            <i className="bi bi-linkedin bg-clearBlue dark:bg-reactBlack dark:text-white text-3xl text-reactBlack group-hover:bg-[#0a66c2] group-hover:text-white"></i>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SocialMedia;
