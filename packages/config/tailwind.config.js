module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      strong: "0rem 1.2rem 1.2rem rgba(0, 0, 0, 0.4)",
      medium: "0rem 0.6rem 0.8rem rgba(0, 0, 0, 0.4)",
      weak: "0rem 0.4rem 0.6rem rgba(0, 0, 0, 0.4)",
    },
    extend: {
      colors: {
        primary: {
          light: "#C7BCF6",
          dark: "#6c68a9",
        },
        error: {
          light: "#FF5B52",
          dark: "#D73A49",
        },
        warning: {
          light: "#F1C64D",
          dark: "#B7953D",
        },
        info: {
          light: "#95EEF1",
          dark: "#5AC8C8",
        },
        success: {
          light: "#8CEA94",
          dark: "#4CCA4C",
        },
        background: {
          darkish: "#2E3247",
          dark: "#22253A",
          darker: "#0D0E16",
        },
      },
      screens: {
        sm: "600px",
        md: "720px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
