/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        orange: {
          500: "#ff6a00",
          600: "#e65c00",
        },
      },
      keyframes: {
        cardDrop: {
          "0%": { opacity: 0, transform: "translateY(100px) scale(0.95)" },
          "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
        },
        overlayFade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        typing: {
          "0%": { width: "0ch" },
          "40%": { width: "13ch" },
          "80%": { width: "13ch" },
          "100%": { width: "0ch" },
        },
        typingSlogan: {
          "0%": { width: "0ch" },
          "40%": { width: "23ch" },
          "80%": { width: "23ch" },
          "100%": { width: "0ch" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#ff6a00" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        cardDrop: "cardDrop 0.5s ease-in-out forwards",
        overlayFade: "overlayFade 0.4s ease-out forwards",
        fadeUp: "fadeUp 1s ease-out forwards",
        typewriter: "typing 6s steps(12) infinite",
        "typewriter-slogan": "typingSlogan 6s steps(22) infinite",
        cursor: "blink 0.8s step-end infinite",
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
