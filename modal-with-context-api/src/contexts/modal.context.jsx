import React, { createContext, useContext, useState } from "react";
import Backdrop from "../components/Backdrop/backdrop";
import Modal from "../components/Modal/Modal";

const initalValue = {
	open: () => {},
	close: () => {},
};
const ModalContext = createContext(initalValue);
export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
	const [modalElement, setModalElement] = useState(null);

	const open = (modalElement) => {
		setModalElement(modalElement);
	};
	const close = () => {
		setModalElement(null);
	};

	const value = {
		open,
		close,
	};

	return (
		<ModalContext.Provider value={value}>
			{children}
			{modalElement && <Backdrop>{modalElement}</Backdrop>}
		</ModalContext.Provider>
	);
}
