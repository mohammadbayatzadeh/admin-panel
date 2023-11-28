/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color-primary": "var(--bg-color-primary)",
        "bg-color-secondary": "var(--bg-color-secondary)",
        "bg-color-tertiary": "var(--bg-color-tertiary)",
        "text-color-primary": "var(--text-color-primary)",
        "text-color-secondary": "var(--text-color-secondary)",
        "text-color-tertiary": "var(--text-color-tertiary)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
