import React from "react";

import { ContainerFooter } from "./styles";
import { Newsletter } from "./Newsletter";
import { CopyRight } from "./CopyRight";

export const Footer: React.FC = () => {
	return (
		<ContainerFooter>
			<Newsletter />
			<CopyRight />
		</ContainerFooter>
	);
};