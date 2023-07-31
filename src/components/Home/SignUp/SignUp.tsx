import React from "react";

import { ContainerSignUp, TitleContainerSigIn } from "./styles";
import { Modal } from "components/UI/Modal";
import { useHome } from "common/hooks/useHome";
import { FormSignUp } from "./FormSignUp";

export const SignUp: React.FC = () => {
	const { openModalSignUp, handleCloseModalSignUp } = useHome();

	return (
		<Modal
			open={openModalSignUp}
			onClose={handleCloseModalSignUp}
			title={
				<TitleContainerSigIn className="header text_base">
                    Sign up to
					{" "}
					<strong className="bold">
						<b className="bold">Coin</b>
                        Synch
					</strong>
				</TitleContainerSigIn>
			}
		>
			<ContainerSignUp>
				<FormSignUp />
			</ContainerSignUp>
		</Modal>
	);
};