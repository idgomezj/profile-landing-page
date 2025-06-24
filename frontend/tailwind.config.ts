import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'xs': ['0.7rem', { lineHeight: '0.8rem' }],
        'sm': ['0.8rem', { lineHeight: '1.2rem' }],
        'md': ['0.9rem', { lineHeight: '1.5rem' }],

        // Add other sizes if needed
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
