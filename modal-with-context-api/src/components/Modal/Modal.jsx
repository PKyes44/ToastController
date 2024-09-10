import React from "react";

function Modal({ children }) {
	return (
		<div className="w-96 p-10 bg-white rounded-lg shadow-xl">
			{children}
		</div>
	);
}

export default Modal;
