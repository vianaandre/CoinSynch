import React from "react";
import { Cotnainer } from "./styles";
import { Desktop } from "./Desktop";

export const Header: React.FC = () => {
	return (
		<Cotnainer>
			<Desktop />
		</Cotnainer>
	);
};