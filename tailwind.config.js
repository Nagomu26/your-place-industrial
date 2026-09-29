/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        paper: "#EDE8E0",
        mist: "#E3DCD1",
        cardbg: "#F5F1EA",
        ink: "#17150F",
        stone: "#6A6156",
        line: "#CFC6B8",
        accent: "#C94B2A",
        steel: "#3A3F45",
        brass: "#A8894C",
        smoke: "#2A3A45",
        deep: "#1F242A",
        limon: "#C94B2A",
      },
      fontFamily: {
        display: ['"Oswald"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ['"Archivo"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px -30px rgba(23,21,15,.28)",
        cardhover: "0 30px 70px -30px rgba(23,21,15,.38)",
        accentglow: "0 0 0 1px rgba(201,75,42,.18), 0 16px 45px -18px rgba(201,75,42,.4)",
      },
      borderRadius: {
        lg: "0.4rem",
        md: "0.3rem",
        sm: "0.2rem",
      },
    },
  },
  plugins: [],
}