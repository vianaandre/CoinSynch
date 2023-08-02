import React from "react";

import { ContainerTablet } from "./styles";
import { Container } from "components/UI/Container";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { Cryptos } from "../Cryptos";
import { ButtonSignInSignUp } from "../ButtonSignInSignUp";

export const Tablet: React.FC = () => {
	return (
		<ContainerTablet>
			<Container>
				<Logo />
				<Menu />
				<ButtonSignInSignUp />
			</Container>
			<div className="container_cryptos">
				<Container>
					<Cryptos />
				</Container>
			</div>
		</ContainerTablet>
	);
};