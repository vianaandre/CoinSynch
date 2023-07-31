import React from "react";
import Link from "next/link";
import { Container } from "./styles";
import { Logo as LogoIcon } from "components/UI/icons";

export const Logo: React.FC = () => {
	return (
		<Container>
			<Link href="#home">
				<LogoIcon
					width={124}
					height={21}
				/>
			</Link>
		</Container>
	);
};