import React from "react";
import { Cotnainer } from "./styles";
import { Desktop } from "./Desktop";
import { Tablet } from "./Tablet";
import { Mobile } from "./Mobile";

export const Header: React.FC = () => {
	return (
		<Cotnainer>
			<Desktop />
			<Tablet />
			<Mobile />
		</Cotnainer>
	);
};