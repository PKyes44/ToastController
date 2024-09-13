import { useToast } from "../../contexts/toast.context";
import Toast from "../Toast/Toast";

function ToastList() {
	const { toastList, removeToast } = useToast();

	return (
		<ul className="fixed bottom-5 right-5">
			{toastList.map((toast, index) => {
				if (toast.status === "over") {
					removeToast(toast.id);
					return null;
				}
				return (
					<li
						key={index}
						className={`mt-5 transition-all duration-300  ${
							toast.status === "start" || toast.status === "end"
								? "translate-x-[430px]"
								: "translate-x-0 "
						}`}
					>
						<Toast
							id={toast.id}
							title={toast.title}
							content={toast.content}
						/>
					</li>
				);
			})}
		</ul>
	);
}

export default ToastList;
