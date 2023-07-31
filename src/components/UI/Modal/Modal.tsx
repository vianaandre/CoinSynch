import React, { useEffect } from "react";
import { ContainerModal } from "./styles";
import { TypeModal } from "./type";
import { Closed } from "components/UI/icons";
import { theme } from "common/styles/theme";
import { IconButton } from "../IconButton";

export const Modal: React.FC<TypeModal> = ({ children, onClose, open, title }) => {
	useEffect(() => {
		document.addEventListener("keydown", event => {
			if(event.key === "Escape") onClose();
		});
	}, []);

	return (
		<ContainerModal open={open}>
			<div className="container_modal">
				<header>
					{title && (
						title
					)}
					<IconButton type="button" className="closed" onClick={onClose}>
						<Closed
							color={theme.COLORS.SECONDARY[500]}
							size={24}
						/>
					</IconButton>
				</header>
				<div className="content_modal">
					{children}
				</div>
			</div>
		</ContainerModal>
	);
};