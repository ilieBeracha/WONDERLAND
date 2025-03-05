/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightYellow: "#FBBF24", // Bright yellow
        brightOrange: "#FF8C00", // Bright orange
        brightGreen: "#4ADE80", // Bright green
        brightBlue: "#3B82F6", // Bright blue
        brightRed: "#EF4444", // Bright red
        brightGray: "#F9FAFB", // Light gray
        brightTeal: "#2DD4BF", // Bright teal
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Add Poppins as the default sans font
        serif: ["Merriweather", "serif"], // Example for serif font
      },
    },
  },
  plugins: [],
};
