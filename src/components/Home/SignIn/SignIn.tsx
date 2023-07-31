import React from "react";
import { Modal } from "components/UI/Modal";
import { ContainerSignIn, TitleContainerSigIn } from "./styles";
import { useHome } from "common/hooks/useHome";
import { FormSignIn } from "./FormSignIn";

export const SignIn: React.FC = () => {
	const { openModalSignIn, handleCloseModalSignIn } = useHome();

	return (
		<Modal
			onClose={handleCloseModalSignIn}
			open={openModalSignIn}
			title={
				<TitleContainerSigIn className="header text_base">
                    Sign in to
					{" "}
					<strong className="bold">
						<b className="bold">Coin</b>
                        Synch
					</strong>
				</TitleContainerSigIn>
			}
		>
			<ContainerSignIn>
				<FormSignIn />
			</ContainerSignIn>
		</Modal>
	);
};