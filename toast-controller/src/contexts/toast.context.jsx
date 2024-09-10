/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const initalToastValue = {
	toastList: [],
	addToastAtList: () => {},
	removeToastAtList: () => {},
};
const ToastContext = createContext(initalToastValue);

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }) {
	const [toastList, setToastList] = useState([]);

	const processOnToast = (targetToast) => {
		activeToast(targetToast);
		deactiveToast(targetToast.id, targetToast.showTime);
	};

	const activeToast = (targetToast) => {
		setTimeout(() => {
			setToastList((prevToastList) => {
				const newToastList = prevToastList.map((toast) => {
					if (toast.status === "end") return toast;
					if (
						toast.id === targetToast.id &&
						toast.status === "start"
					) {
						return {
							...targetToast,
							status: "running",
						};
					}

					return toast;
				});
				return newToastList;
			});
		}, 1);
		setToastList((prevToastList) => [...prevToastList, targetToast]);
	};

	const deactiveToast = async (targetToastId, showTime) => {
		await new Promise((resolve) =>
			setTimeout(() => {
				setToastList((prevToastList) => {
					return prevToastList.map((toast) => {
						if (toast.id === targetToastId) {
							return {
								...toast,
								status: "end",
							};
						}
						return toast;
					});
				});
				resolve();
			}, showTime)
		);
		removeToast(targetToastId);
	};

	const removeToast = (targetToastId) => {
		setTimeout(() => {
			setToastList((prevToastList) => {
				console.log(prevToastList);
				const newToastList = prevToastList.filter((toast) => {
					return toast.id !== targetToastId && toast.status !== "end";
				});
				console.log(newToastList);
				return newToastList;
			});
		}, 1000);
	};

	const value = {
		toastList,
		processOnToast,
		deactiveToast,
	};

	return (
		<ToastContext.Provider value={value}>{children}</ToastContext.Provider>
	);
}
