/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: {
          green: "#81C88B",
          purple: "#A88EDE",
          yellow: "#F1BE56",
          "yellow-dark": "#FFBE5D",
          "light-yellow": "#FFEBCC",
          pink: "#EA88C3",
          "dark-gray": "#6B6B6B",
          white: "#FFFFFF",
          black: "#0D0D0D",
        },
      },
      backgroundImage: {
        "hero-shape": "url('/images/vectors/hero-shape.svg')",
      },
    },
  },
  plugins: [],
};
