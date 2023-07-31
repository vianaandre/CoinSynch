import React from "react";
import { TypeIcon } from "./type";

export const Checked: React.FC<TypeIcon> = ({ color, size }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M9.42387 20.9387L3.21387 14.7287L6.04387 11.8987L9.42387 15.2887L19.3039 5.39874L22.1339 8.22874L9.42387 20.9387Z" fill={color} />
		</svg>
	);
};