/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      { 
        yang: {
          "primary": "#000000",
          "secondary": "#000000",
          "accent": "#000000",
          "neutral": "#ffffff",
          "base-100": "#ffffff",
          "base-200":"#f1f1f1",
          "info": "#ffffff",
          "success": "#4ade80",
          "warning": "#fef08a",
          "error": "#f43f5e",
          "--rounded-badge":"2px"
        },
        yin:{
          "primary": "#ffffff",
          "secondary": "#ffffff",
          "accent": "#000000",
          "neutral": "#ffffff",
          "base-100": "#000000",
          "base-200":"#131313",
          "info": "#000000",
          "success": "#4ade80",
          "warning": "#fef08a",
          "error": "#f43f5e",
        }
      },
    ],
  },
};
