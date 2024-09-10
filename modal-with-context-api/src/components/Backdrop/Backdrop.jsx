import { useRef } from "react";
import { useModal } from "../../contexts/modal.context";

function Backdrop({ children }) {
	const closeZoneRef = useRef(null);
	const { close } = useModal();

	const handleClickBackdrop = (e) => {
		const closeZoneDOM = closeZoneRef.current;
		console.log(closeZoneDOM === e.target);
		if (closeZoneDOM === e.target) close();
	};

	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 bg-black/80">
			<div
				ref={closeZoneRef}
				onClick={handleClickBackdrop}
				className="h-screen flex flex-col items-center justify-center mx-auto"
			>
				{children}
			</div>
		</div>
	);
}

export default Backdrop;
