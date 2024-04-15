/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        custom: "0px 20px 35px rgba(241,165,1,0.15)",
      },
      height: {
        "fill-available": "-webkit-fill-available",
      },
    },
    fontFamily: {
      Volkhov: ["Volkhov"],
    },
  },
  plugins: [],
};
