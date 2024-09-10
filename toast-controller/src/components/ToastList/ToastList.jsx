import { useToast } from "../../contexts/toast.context";
import Toast from "../Toast/Toast";

function ToastList() {
	const { toastList } = useToast();
	return (
		<ul className="fixed bottom-5 right-5">
			{toastList.map((toast, index) => {
				return (
					<li
						key={index}
						className={`mt-5 transition-all duration-500 ${
							toast.status === "start" || toast.status === "end"
								? "translate-x-[430px]"
								: "translate-x-0"
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
			{/* <li>
				<Toast />
			</li> */}
		</ul>
	);
}

export default ToastList;
