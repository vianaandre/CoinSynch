import React from "react";
import { ContainerIconButton } from "./styles";
import { TypeIconButton } from "./type";

export const IconButton: React.FC<TypeIconButton> = ({ children, ...rest }) => {
	return (
		<ContainerIconButton {...rest}>
			{children}
		</ContainerIconButton>
	);
};