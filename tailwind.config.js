const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        clearBlue: "#ABF7F9",
        reactBlue: "#61DAFB",
        reactBlack: "#1F2D40",
        mediumBlue: "#49B5FD",
        clearGray: "#E5EAEE",
        clearPurple: "#B48EAE",
        frenchGray: "#C9C5CB",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        ruluko: ["Ruluko", "sans-serif"],
        bubbler: ["Bubbler One", "sans-serif"],
        tulpenOne: ["Tulpen One", "sans-serif"],
        inter: ["Inter Tight", "sans-serif"],
        barlow: ["Barlow Condensed", "sans-serif"],
      },
      keyframes: {
        slide: {
          "50%": { left: "10%", top: "-40%" },
          "100%": { left: "15%", top: "15%" },
        },
        "scroll-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "50%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(50%)" },
        },
        "scroll-front": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-40%)" },
        },
        "scroll-back": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(40%)" },
        },
      },
      animation: {
        slide: "slide 0.7s forwards",
        "scroll-reverse": "scroll-reverse 3s linear infinite alternate",
        "scroll-back": "scroll-back 3s linear infinite alternate",
        "scroll-front": "scroll-front 3s linear infinite alternate",
      },
      transform: {
        "rotate-x-180": "rotateX(180deg)",
        "rotate-x-200": "rotateY(180deg)",
        "perspective-600-rotate-y-180": "perspective(600px) rotateY(180deg)",
      },
    },
  },
  plugins: [require("daisyui")],
};
