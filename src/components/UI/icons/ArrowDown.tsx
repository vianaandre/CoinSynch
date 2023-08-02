import React from "react";
import { TypeIcon } from "./type";

export const ArrowDown: React.FC<TypeIcon> = ({ color, size }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M0.36997 3.70615C0.863264 3.20912 1.66305 3.20912 2.15635 3.70615L8 9.59407L13.8437 3.70615C14.3369 3.20912 15.1367 3.20912 15.63 3.70615C16.1233 4.20318 16.1233 5.00902 15.63 5.50606L8.89319 12.2939C8.39989 12.791 7.60011 12.791 7.10681 12.2939L0.36997 5.50606C-0.123323 5.00902 -0.123323 4.20318 0.36997 3.70615Z" fill={color} />
		</svg>
	);
};