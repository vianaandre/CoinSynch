import React, { PropsWithChildren } from "react";
import { Container as ContainerStyles } from "./styles";

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<ContainerStyles className="container">
			{children}
		</ContainerStyles>
	);
};