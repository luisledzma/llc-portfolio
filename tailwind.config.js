/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React and TypeScript files in `src`
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark1: "#101010", // Light gray for light mode
          dark2: "#151515",
          dark3: "#202020",
          dark4: "#252525",
          dark5: "#303030",
          dark6: "#353535",
        },
        primary: {
          1: "#2862A1",
          2: "#3F73AE",
          3: "#5685BB",
        },
        secondary: {
          1: "#f3b229",
          2: "#f4bb43",
          3: "#f6c661",
        },
        danger: {
          1: "#A13128",
          2: "#B2473F",
          3: "#C05E57",
        },
        tertiary: "#070a42",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #102740",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "tech-pattern": "url('/public/layered-peaks-haikei.svg')",
      },
      fontFamily: {
        code: ["Source Code Pro", "monospace"], // Custom font family
        fira: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
