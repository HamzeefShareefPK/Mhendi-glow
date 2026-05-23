import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        henna: {
          50:  "#FDF8F2",
          100: "#F5E6D8",
          200: "#E8D5C0",
          300: "#D4B896",
          400: "#C8946A",
          500: "#B07848",
          600: "#8B5C32",
          700: "#6B4020",
          800: "#4A2810",
          900: "#2E1A0E",
          950: "#120A04",
        },
        rose: {
          mehndi: "#8B2252",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans:  ["var(--font-lato)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem" }],
      },
      borderWidth: {
        "1.5": "1.5px",
      },
      boxShadow: {
        "henna-sm":  "0 1px 3px rgba(200,148,106,0.12), 0 1px 2px rgba(200,148,106,0.07)",
        "henna-md":  "0 4px 14px rgba(200,148,106,0.20), 0 2px 6px rgba(200,148,106,0.10)",
        "henna-lg":  "0 10px 30px rgba(200,148,106,0.25), 0 4px 10px rgba(200,148,106,0.12)",
        "henna-xl":  "0 20px 50px rgba(200,148,106,0.30), 0 8px 16px rgba(200,148,106,0.15)",
      },
      animation: {
        "fade-in":    "fadeIn 0.3s ease-out both",
        "scale-in":   "scaleIn 0.25s ease-out both",
        "slide-up":   "slideUp 0.45s ease-out both",
        "slide-down": "slideDown 0.28s ease-out both",
        "float":      "float 3s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn:     { "0%": { opacity: "0" },                                       "100%": { opacity: "1" } },
        scaleIn:    { "0%": { opacity: "0", transform: "scale(0.94)" },             "100%": { opacity: "1", transform: "scale(1)" } },
        slideUp:    { "0%": { opacity: "0", transform: "translateY(22px)" },        "100%": { opacity: "1", transform: "translateY(0)" } },
        slideDown:  { "0%": { opacity: "0", transform: "translateY(-10px)" },       "100%": { opacity: "1", transform: "translateY(0)" } },
        float:      { "0%,100%": { transform: "translateY(0)" },                    "50%":  { transform: "translateY(-8px)" } },
        pulseSoft:  { "0%,100%": { opacity: "1" },                                  "50%":  { opacity: "0.6" } },
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      backgroundImage: {
        "henna-gradient":   "linear-gradient(135deg, #C8946A 0%, #9A6838 100%)",
        "henna-gradient-r": "linear-gradient(135deg, #D4A07A 0%, #C8946A 100%)",
        "dark-gradient":    "linear-gradient(135deg, #2E1A0E 0%, #4A2810 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
