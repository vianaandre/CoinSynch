import React from "react";
import { ContainerButtonSignInSignUp } from "./styles";
import { Button } from "components/UI/Button";
import { useHome } from "common/hooks/useHome";

export const ButtonSignInSignUp: React.FC = () => {
	const { handleOpenModalSignIn, handleOpenModalSignUp } = useHome();
	
	return (
		<ContainerButtonSignInSignUp>
			<Button variant="secondary" type="button" onClick={handleOpenModalSignIn}>
                Sign in
			</Button>
			<Button variant="primary" type="button" onClick={handleOpenModalSignUp}>
                Sign up
			</Button>
		</ContainerButtonSignInSignUp>
	);
};