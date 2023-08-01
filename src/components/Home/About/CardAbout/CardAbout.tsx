import React from "react";

import { ContainerCardAbout } from "./styles";
import { TypeCardAbout } from "./Type";

export const CardAbout: React.FC<TypeCardAbout> = ({ icon, subtitle, text, title }) => {
	return (
		<ContainerCardAbout>
			<div className="icon">
				{icon}
			</div>
			<span className="text bold text_primary">{subtitle}</span>
			<h4 className="header bold text_base">{title}</h4>
			<p className="label regular text_base">{text}</p>
		</ContainerCardAbout>
	);
};