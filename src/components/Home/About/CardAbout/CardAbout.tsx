import React from "react";

import { ContainerCardAbout } from "./styles";
import { TypeCardAbout } from "./Type";

export const CardAbout: React.FC<TypeCardAbout> = ({ icon, subtitle, text, title }) => {
	return (
		<ContainerCardAbout>
			{icon}
			<span>{subtitle}</span>
			<h4 className="header">{title}</h4>
			<p>{text}</p>
		</ContainerCardAbout>
	);
};