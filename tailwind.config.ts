import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|navbar|divider).js"
  ],
  theme: {
  	extend: {
		screens: {
			xs: "320px",
			sm: "375px",
			sml: "500px",
			md: "667px",
			mdl: "768px",
			lg: "980px",
			lgl: "1024x",
			xl: "1280px",
		  },
  		colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			purpleLeft: '#6B46C1', 
        	purpleRight: '#D6BCFA',
			blueLeft: '#351EE0', 
			blueRight: '#3F74EF',
			commonBlack:"#05092B",
			commonBlackDark:"#1D2142",
			yellowColor:"#F8BC26",
			textColor:"#737373",
			borderColor:"#CCCCCC",
			grayColor:"#F9F9F9",
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		boxShadow: {
			cardShadow: '0px 5px 60px rgba(0, 0, 0, 0.05)', // Custom reusable shadow
		},
  	}
  },
  plugins: [require("tailwindcss-animate"),nextui()],
} satisfies Config;
