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
          "0%": { transform: "rotateY(0deg) rotateZ(0deg)" },
          "85%": { transform: "rotateY(15deg) rotateZ(10deg)" },
          "100%": { transform: "rotateY(5deg) rotateZ(2deg)" },
        },
        dipLeft: {
          "0%": { transform: "rotateY(0deg) rotateZ(0deg)" },
          "85%": { transform: "rotateY(-15deg) rotateZ(-10deg)" },
          "100%": { transform: "rotateY(-5deg) rotateZ(-2deg)" },
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
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(10px, 10px)" },
        },
        planeCircle: {
          // "0%, 100%": { transform: "rotate(0) translate(0,0)" },
          // "25%": { transform: "rotate(-90deg) translate(100px, 100px)" },
          // "50%": { transform: "rotate(-180deg) translate(0px, 200px)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        planeCircleAlt: {
          // "0%, 100%": { transform: "rotate(0) translate(0,0)" },
          // "25%": { transform: "rotate(-90deg) translate(100px, 100px)" },
          // "50%": { transform: "rotate(-180deg) translate(0px, 200px)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        planeTakeOff: {
          "0%": { transform: "scale(0.6) translateY(-30px)" },
          "100%": { transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        planeIdle: "planeIdle 1s ease-in-out infinite",
        planeTakeOff: "planeTakeOff 1s ease-in-out forwards",
        planeCircle: "planeCircle 12s linear infinite",
        planeCircleAlt: "planeCircleAlt 10s linear infinite",
        planeDip: "planeDip 1s ease-in-out",
        planeRise: "planeRise 1s ease-in-out",
        dipRight: "dipRight 6s ease-in-out",
        dipLeft: "dipLeft 6s ease-in-out",
        cloudAnimation: "cloudAnimation 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
