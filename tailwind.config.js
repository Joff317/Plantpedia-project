import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pt: ["PT", "sans-serif"],
        playpenSans: ["'Playpen Sans'", "sans-serif"],
        rubikDoodleShadow: ["'Rubik Doodle Shadow'", "sans-serif"], // Ajout de la police Rubik Doodle Shadow
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
