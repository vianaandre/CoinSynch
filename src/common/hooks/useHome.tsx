import React, { PropsWithChildren, createContext, useContext, useState } from "react";

type TypeHomeContext = {
    openModalSignIn: boolean;
    openModalSignUp: boolean;
    handleOpenModalSignIn: () => void;
    handleCloseModalSignIn: () => void;
    handleOpenModalSignUp: () => void;
    handleCloseModalSignUp: () => void;
}

const HomeContext = createContext({} as TypeHomeContext);

export function HomeProvider({ children }: PropsWithChildren) {
	const [ openModalSignIn, setOpenModalSignIn ] = useState<boolean>(false);
	const [ openModalSignUp, setOpenModalSignUp ] = useState<boolean>(false);

	const handleOpenModalSignIn = () => setOpenModalSignIn(true);
	const handleCloseModalSignIn = () => setOpenModalSignIn(false);

	const handleOpenModalSignUp = () => setOpenModalSignUp(true);
	const handleCloseModalSignUp = () => setOpenModalSignUp(false);
    
	return (
		<HomeContext.Provider value={{ openModalSignIn, openModalSignUp, handleOpenModalSignIn, handleCloseModalSignIn, handleOpenModalSignUp, handleCloseModalSignUp }}>
			{children}
		</HomeContext.Provider>
	);
}

export function useHome(): TypeHomeContext {
	const context = useContext(HomeContext);

	return context;
}