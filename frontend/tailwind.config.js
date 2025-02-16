/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        'aaa': 'calc(100vh - 7rem)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: '#FF4400',
        Oxford: "#263238",
        ligvio: "#F0F2FF",
        gray: "#C9C9C9",
        white: "#FFFFFF",
        darkgray:"#717171",
        darkblack:"#0E1021",
        head:"#F3F3F3",
        para:"#F5F7F8",
        num:"#F0F0F0",
        testi:"#181A2A",
        hero:"#0E1021",
      },
      screens: {
        'ag': '200px', // Custom breakpoint for very small screens
        'af': '350px', // Custom breakpoint
        'aa': '420px', // Custom breakpoint
        'xs': '480px', // Extra small
        'sm': '640px', // Small
        'md': '778px', // Medium
        'lg': '1026px', // Large
        'xl': '1280px', // Extra-large
        '2xl': '1500px', // 2XL
      },
    },
  },
  plugins: [],
};
