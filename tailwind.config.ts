import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "white-pattern": "url('/background-1.png')"
      },
      colors: {
        primary: '#441151',
        secondary: '#EE85B5',
        violet: '#883677',
        cc: '##FF958C',
        success: '#5FC790',
        warning: '#FFA600',
        danger: '#FF5630',
        dark: '#2E3A44',
        info: '#1CA7EC',
        black: '#000000',
        grey1: '#A0AABF',
        grey2: '#C0C6D4',
        grey3: '#E3E8F1',
        grey4: '#e8e1d1',
        grey5: '#EAEAEA',
        light: '#F9FBFC',
        white: '#FFF',
        menubg: '#fbf5ed',
        pink1: '#de1f88',
        
      }
    },
  },
  plugins: [],
};
export default config;
