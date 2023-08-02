import React from "react";

import { ContainerMobile } from "./styles";
import { Container } from "components/UI/Container";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import { Cryptos } from "../Cryptos";
import { ButtonSignInSignUp } from "../ButtonSignInSignUp";
import { IconButton } from "components/UI/IconButton";
import { ArrowRight, Menu as MenuIcon } from "components/UI/icons";
import { theme } from "common/styles/theme";
import { useMobile } from "./useMobile";

export const Mobile: React.FC = () => {
	const { openMenu, handleCloseModal, handleOpenModal } = useMobile();
	
	return (
		<ContainerMobile>
			<Container>
				<Logo />
				<IconButton
					onClick={handleOpenModal}
				>
					<MenuIcon 
						size={24}
						color={theme.COLORS.SECONDARY[500]}
					/>
				</IconButton>
			</Container>
			<div className="container_cryptos">
				<Cryptos />
			</div>
			<div className={`menu_mobile ${openMenu ? "open" : ""}`}>
				<div className="logo">
					<Logo />
				</div>
				<button
					type="button"
					className="back"
					onClick={handleCloseModal}
				>
					<ArrowRight 
						size={24}
						color={theme.COLORS.SECONDARY[500]}
					/>
					<p className="regular text text_base">Back</p>
				</button>
				<Menu />
				<ButtonSignInSignUp />
			</div>
		</ContainerMobile>
	);
};