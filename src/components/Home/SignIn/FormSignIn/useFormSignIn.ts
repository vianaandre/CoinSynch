import { useHome } from "common/hooks/useHome";

export function useFormSignIn() {
	const { handleOpenModalSignUp, handleCloseModalSignIn } = useHome();

	const changeFormAuthenticated = () => {
		handleCloseModalSignIn();
		handleOpenModalSignUp();
	};

	return {
		changeFormAuthenticated
	};
}