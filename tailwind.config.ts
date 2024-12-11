import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			sm: '100%',
  			md: '640px',
  			lg: '768px',
  			xl: '1024px',
  			'2xl': '1280px'
  		}
  	},
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary':"#FFFFFF",
        'primary1':"#363738",
        'secondary':"#F5F5F5",
        'secondary1':"#FEFAF1",
        'BG':"#FFFFFF",
        'Text':"#FAFAFA",
        'Text1':"#7D8184",
        "Text2":"#000000",
        "Button":"#000000",
        "Secondary2":"#DB4444",
        "Button1":"#00FF66",
        "Button2":"#DB4444",
        "hoverbtn":"#E07575",
        "hoverbtn2":"#A0BCE0"
      },
    },
  },
  plugins: [],
} satisfies Config;
