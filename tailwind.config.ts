import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
      backgroundColor : {
        foreground : '#1C1D22',
        'foreground-light': "#2B2C30",
        button: '#292B32',
        blue: "#4B68FE",
        input: '#292B32',
        salmon: "#EE8281",
        gold: "#FEA149",
        green: "#7F3946",
        pinkButton: 'rgba(255,67,105,100)',
        grayButton: 'rgba(38,40,47,18)'
      },
      textColor: {
        white : '#FFFFFF',
        stone: "#F8F8F8",
        gray: "#707073",
        slate : 'rgba(157,180,199,78)',
        'gray-dark': 'rgba(92,106,151,49)',
        pink: 'rgba(255,67,105,100)',
        salmon: "#EE8281",
        gold: "#FEA149",
        green: "#7F3946",
        blue: "#4B68FE"
      },
      borderColor: {
        salmon: "#EE8281",
        gold: "#FEA149",
        green: "#7F3946",
        blue: "#4B68FE"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns : {
         category: "repeat(auto-fill,185px)",
         trailers: "repeat(auto-fill,395px)"
      },
      gridAutoColumns: {
        '2fr' : 'minmax(0,2fr)'
      },
      gridTemplateRows: {
        trailers: "repeat(auto-fill,395px)"
      },
      animation: {
        onLoadZoom: "onLoadZoom .4s",
        toolTipZoom: "onLoadZoom .3s",
        buttonGrow: "buttonGrow .2s"
      },
      keyframes: {
        onLoadZoom : {
          "0%": {transform: "scale(0)"},
          "100%": {transform: "scale(1)"}
        },
        buttonGrow : {
          "0%": {transform: "translateY(0)"},
          "100%": {transform:"translateY(-1px)"}
        },
        extend : {
          "0%": {transform: "width"}
        }
      }
    },
  },
  plugins: [],
}
export default config
