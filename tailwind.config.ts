import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        planeIdle: {
          "0%, 100%": { transform: "rotate(-0.2deg) translateX(-1px)" },
          "50%": { transform: "rotate(0.2deg) translateX(1px)" },
        },
        dipRight: {
          // "0%, 100%": { transform: "rotateY(0deg) rotateZ(0deg)" },
          // "5%": { transform: "rotateY(15deg) rotateZ(10deg)" },
          "0%, 85%, 100%": { transform: "rotateY(0deg) rotateZ(0deg)" },
          "5%": { transform: "rotateY(15deg) rotateZ(10deg)" },
          "35%": { transform: "rotateY(5deg) rotateZ(2deg)" },
        },
        dipLeft: {
          "0%, 85%, 100%": { transform: "rotateY(0deg) rotateZ(0deg)" },
          "5%": { transform: "rotateY(-15deg) rotateZ(-10deg)" },
          "35%": { transform: "rotateY(-5deg) rotateZ(-2deg)" },
        },
        planeDip: {
          "0%": { transform: "scale(1) rotateX(0deg)" },
          "25%": { transform: "scale(1) rotateX(5deg)" },
          "50%": { transform: "scale(0.95) rotateX(10deg)" },
          "75%": { transform: "scale(0.9) rotateX(5deg)" },
          "100%": { transform: "scale(0.9) rotateX(0deg)" },
        },
        planeRise: {
          "0%": { transform: "scale(0.9) rotateX(0deg)" },
          "25%": { transform: "scale(0.9) rotateX(-5deg)" },
          "50%": { transform: "scale(0.95) rotateX(-10deg)" },
          "75%": { transform: "scale(1) rotateX(-5deg)" },
          "100%": { transform: "scale(1) rotateX(0deg)" },
        },
        cloudAnimation: {
          "0%": { top: "calc(-500px)" },
          "100%": { top: "calc(100% + 500px)" },
        },
      },
      animation: {
        planeIdle: "planeIdle 1s ease-in-out infinite",
        planeDip: "planeDip 1s ease-in-out",
        planeRise: "planeRise 1s ease-in-out",
        dipRight: "dipRight 6s ease-in-out",
        dipLeft: "dipLeft 6s ease-in-out",
        cloudAnimation: "cloudAnimation 8s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
