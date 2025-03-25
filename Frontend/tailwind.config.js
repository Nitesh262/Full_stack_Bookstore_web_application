/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ Ensure Tailwind uses class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // ✅ Scan all components for Tailwind classes
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"), // ✅ Include DaisyUI properly
  ],
};
