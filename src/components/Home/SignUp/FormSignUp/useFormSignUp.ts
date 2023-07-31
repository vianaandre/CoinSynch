import { useHome } from "common/hooks/useHome";

export function useFormSignUp() {
	const { handleCloseModalSignUp, handleOpenModalSignIn } = useHome();

	const changeFormAuthenticated = () => {
		handleCloseModalSignUp();
		handleOpenModalSignIn();
	};

	return {
		changeFormAuthenticated
	};
}