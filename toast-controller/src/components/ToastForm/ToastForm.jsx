import { useState } from "react";
import { useToast } from "../../contexts/toast.context";

function ToastForm() {
	const { processOnToast } = useToast();
	const [title, setTitle] = useState("Scheduled: Catch up");
	const [content, setContent] = useState(
		"Friday, February 10, 2023 at 5:57 PM"
	);
	const [showTime, setShowTime] = useState("2000");

	const handleChangeTitle = (event) => {
		setTitle(event.target.value);
	};

	const handleChangeContent = (event) => {
		setContent(event.target.value);
	};

	const handleChangeShowTime = (event) => {
		setShowTime(event.target.value);
	};
	const handleSubmitToastController = (event) => {
		event.preventDefault();
		const toast = {
			title,
			content,
			showTime: Number(showTime),
			status: "running",
		};
		processOnToast(toast);
	};

	return (
		<form onSubmit={handleSubmitToastController}>
			<h1 className="text-center text-3xl font-semibold">
				토스트 컨트롤러
			</h1>
			<fieldset className="flex flex-col justify-start text-xl">
				<legend className="-ml-[9999px]">토스트 컨트롤러 양식</legend>
				<label htmlFor="title" className="text-base font-semibold mb-2">
					제목(필수)
				</label>
				<input
					id="title"
					type="text"
					value={title}
					onChange={handleChangeTitle}
					className="border rounded-lg mb-7 py-3 px-6 border-gray-400"
				/>
				<label
					htmlFor="content"
					className="text-base font-semibold mb-2"
				>
					내용(필수)
				</label>
				<input
					id="content"
					type="text"
					value={content}
					onChange={handleChangeContent}
					className="border rounded-lg mb-7 py-3 px-6 border-gray-400"
				/>
				<label
					htmlFor="show-time"
					className="text-base font-semibold mb-2"
				>
					노출시간(ms) (선택)
				</label>
				<input
					id="show-time"
					type="number"
					value={showTime}
					onChange={handleChangeShowTime}
					className="border rounded-lg mb-7 py-3 px-6 border-gray-400"
				/>
				<button className="border rounded-lg mb-7 py-4 px-6 border-gray-400 bg-black text-white font-semibold text-lg">
					토스트 띄우기
				</button>
			</fieldset>
		</form>
	);
}

export default ToastForm;
