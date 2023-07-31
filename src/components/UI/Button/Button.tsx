import React from "react";
import { ContainerButton } from "./styles";
import { TypeButton } from "./type";

export const Button: React.FC<TypeButton> = ({ children, variant, ...rest }) => {
	return (
		<ContainerButton variant={variant} {...rest}>
			{children}
		</ContainerButton>
	);
};