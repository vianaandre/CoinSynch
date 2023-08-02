import { useState } from "react";

export function useMobile() {
	const [ openMenu, setOpenMenu ] = useState<boolean>(false);

	const handleOpenModal = () => setOpenMenu(true);

	const handleCloseModal = () => setOpenMenu(false);

	return {
		openMenu,
		handleCloseModal,
		handleOpenModal
	};
} 