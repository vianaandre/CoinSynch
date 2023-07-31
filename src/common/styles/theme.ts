import { Roboto } from "next/font/google";

const ROBOTO = Roboto({ 
	weight: ["400", "700",],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
}); 

export const theme = {
	COLORS: {
		PRIMARY: {
			100: "#FFF6E8",
			200: "#FFE1B5",
			300: "#FFCD82",
			400: "#FFB94F",
			500: "#FBAB34",
			600: "#E09422",
			700: "#AD721A",
			800: "#7A4E0C",
			900: "#472C04"
		},
		SECONDARY: {
			100: "#F6F6F6",
			200: "#F4F3F8",
			300: "#E0DEEA",
			400: "#ACABB7",
			500: "#8C8A97",
			600: "#716F7A",
			700: "#5F5C6B",
			800: "#4E4B59",
			900: "#33303E"
		},
		TERTIARY: {
			100: "#E8FAF1",
			200: "#D1F6E3",
			300: "#A4EDC6",
			400: "#8DE8B8",
			500: "#1BD171",
			600: "#18B863",
			700: "#149E55",
			800: "#0E6B3A",
			900: "#07381E"
		},
		QUARTENARY: {
			100: "#FFF2F3",
			200: "#FFCFD0", 
			300: "#FF9497",
			400: "#FA7D80",
			500: "#EC3237", 
			600: "#D42D31",
			700: "#A12226", 
			800: "#6E171A",
			900: "#3B0C0E"
		},
		WHITE: "#FFFFFF",
		BLACK: "#000000", 
		TEXT_BASE: "#5D6670",
		FILTER_BG: "rgba(93, 102, 112, 0.9)"
	},
	TYPOGRAPHY: {
		FONT: ROBOTO.style.fontFamily,
		WEIGHT: {
			REGULAR: 400,
			BOLD: 700,
		},
		SIZE: {
			12: "0.75rem",
			14: "0.875rem",
			16: "1rem", 
			20: "1.25rem",
			24: "1.5rem",
			32: "2rem",
			40: "2.5rem",
			48: "3rem"
		},
		HEIGHT:  {
			12: "116.66%",
			14: "114.28%",
			16: "150%",
			20 : "120%",
			24: "133.33%",
			32: "125%",
			40: "120%",
			48: "116.66%"
		}
	},
	BREAKPOINTS: {
		DESKTOP: "1216px",
		TABLET: "672px",
		MOBILE: "272"
	},
	TRANSITIONS: {
		MEDIUM: "300ms",
	},
	SPACING: (size: number) => {
		return `${size * 0.25}rem`;
	}, 
};
