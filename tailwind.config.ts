import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "1.25": "0.313rem"
      },
      colors: {
        "50": "#FAFAFA", 
        "100": "#EFEFEF", 
        "200": "#DCDCDC", 
        "300": "#BDBDBD", 
        "400": "#989898", 
        "500": "#7C7C7C", 
        "600": "#656565", 
        "700": "#525252", 
        "800": "#464646", 
        "900": "#3D3D3D", 
        "950": "#292929", 
      },
      backgroundImage: {
        'gradientWhite': 'linear-gradient(90deg, #EFEFEF 0%, #DCDCDC 100%)',
        'gradientBlack': 'linear-gradient(90deg, #3D3D3D 0%, #464646 100%)',
        'gradientMenu': 'linear-gradient(90deg, rgba(41, 41, 41, 0.80) 0%, rgba(61, 61, 61, 0.80) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
