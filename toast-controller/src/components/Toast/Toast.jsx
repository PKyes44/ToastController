import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useToast } from "../../contexts/toast.context";

/* eslint-disable react/prop-types */
function Toast({ id, title = "TITLE", content = "CONTENT" }) {
	const { deactiveToast } = useToast();
	const [isShowCloseButton, setIsShowCloseButton] = useState(false);
	const handleToggleShowCloseButton = () => {
		setIsShowCloseButton((prevIsShow) => !prevIsShow);
	};
	const handleClickClose = () => {
		deactiveToast(id, 0);
	};
	return (
		<div
			className="w-96 bg-white border border-gray-300 rounded-lg px-8 py-7 shadow-xl"
			onMouseOver={handleToggleShowCloseButton}
			onMouseOut={handleToggleShowCloseButton}
		>
			{isShowCloseButton ? (
				<div
					onClick={handleClickClose}
					className="absolute -top-1 -right-1 bg-white border-2 border-gray-300 rounded-full"
				>
					<IoIosClose />
				</div>
			) : null}
			<span className="font-bold text-xl">{title}</span>
			<p className="text-base">{content}</p>
		</div>
	);
}

export default Toast;
