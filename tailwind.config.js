/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "pt-serif": '"PT Serif", serif',
        doto: '"Doto", sans-serif',
        rubik: '"Rubik", sans-serif',
      },
      colors: {
        background: "hsl(var(--background))",
        backgroundAlt: "has(var(--background-alt))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          hover: "hsl(var(--card-hover))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
