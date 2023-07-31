import React from "react";
import { ContainerDesktop } from "./styles";
import { Container } from "components/UI/Container";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { Cryptos } from "../Cryptos";
import { ButtonSignInSignUp } from "../ButtonSignInSignUp";

export const Desktop: React.FC = () => {
	return (
		<ContainerDesktop>
			<Container>
				<Logo />
				<Menu />
				<Cryptos />
				<ButtonSignInSignUp />
			</Container>
		</ContainerDesktop>
	);
};