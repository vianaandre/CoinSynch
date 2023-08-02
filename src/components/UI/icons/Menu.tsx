import React from "react";
import { TypeIcon } from "./type";

export const Menu: React.FC<TypeIcon> = ({ color, size }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M7.25 12H16.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M7.25 15.25H16.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M7.25 8.75H16.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	);
};