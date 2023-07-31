import React from "react";

import { ContainerAbout } from "./styles";
import { CardAbout } from "./CardAbout";
import { Container } from "components/UI/Container";
import { Chart, Computer, Crypto, Currency } from "components/UI/icons";
import { theme } from "common/styles/theme";

export const About: React.FC = () => {
	return (
		<ContainerAbout>
			<Container>
				<ul>
					<CardAbout 
						icon={<Currency size={64} color={theme.COLORS.PRIMARY[500]} />}
						subtitle="For your company"
						title="Crypto Solutions"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
					/>
					<CardAbout 
						icon={<Crypto size={64} color={theme.COLORS.PRIMARY[500]} />}
						subtitle="For your company"
						title="Crypto Solutions"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
					/>
					<CardAbout 
						icon={<Chart size={64} color={theme.COLORS.PRIMARY[500]} />}
						subtitle="For your company"
						title="Crypto Solutions"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
					/>
					<CardAbout 
						icon={<Computer size={64} color={theme.COLORS.PRIMARY[500]} />}
						subtitle="For your company"
						title="Crypto Solutions"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
					/>
				</ul>
			</Container>
		</ContainerAbout>
	);
};