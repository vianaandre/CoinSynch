import React from "react";

import { ContainerCopyRight } from "./styles";
import { Container } from "components/UI/Container";
import { LogoSecondary } from "components/UI/icons";

export const CopyRight: React.FC = () => {
	return (
		<ContainerCopyRight>
			<Container>
				<p className="text_base label regular">Copyright © 2022 -  All rights reserved</p>

				<LogoSecondary 
					width={94}
					height={16}
				/>
			</Container>
		</ContainerCopyRight>
	);
};