import React from "react";

import { ContainerInfos } from "./styles";
import { Button } from "components/UI/Button";
import { ArrowRight } from "components/UI/icons";
import { theme } from "common/styles/theme";

export const Infos: React.FC = () => {
	return (
		<ContainerInfos>
			<h1 className="header bold">
                Lorem ipsum dolor sit amet, consectetur
			</h1>
			<h5 className="header regular text_base">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</h5>
			<Button variant="primary" type="button" className="signup">
                SIGN UP NOW
				<ArrowRight 
					size={12}
					color={theme.COLORS.WHITE}
				/>
			</Button>
			<div className="badges">
				<p>Cryptos</p>
				<p>NFTs</p>
				<p>Games</p>
			</div>
		</ContainerInfos>
	);
};