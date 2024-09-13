/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const initalToastValue = {
	toastList: [],
	processOnToast: () => {},
	deactiveToastList: () => {},
	removeToast: () => {},
};
const ToastContext = createContext(initalToastValue);

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }) {
	const [toastList, setToastList] = useState([]);

	// 전체적인 토스트의 프로세스 담당 (생성 버튼 클릭시 실행됨)
	const processOnToast = (targetToast) => {
		const targetToastId = Date.now();

		// 새로운 토스트 추가
		initalToast(targetToastId, targetToast);

		// 상태변경으로 인한 애니메이션 유도
		setTimeout(() => {
			// 새롭게 추가된 토스트 활성화
			activeToast(targetToastId);
		}, 1);

		// 사용자가 입력한 시간만큼 대기
		setTimeout(() => {
			// 입력한 시간이 지나면 토스트 비활성화
			deactiveToast(targetToastId);
		}, targetToast.showTime);
	};

	// 새로운 토스트 추가
	const initalToast = (targetToastId, targetToast) => {
		setToastList((prevToastList) => {
			return [
				...prevToastList,
				{ id: targetToastId, ...targetToast, status: "start" },
			];
		});
	};

	// 새롭게 추가된 토스트 활성화 (화먄에 보이도록 하기)
	const activeToast = (targetToastId) => {
		setToastList((prevToastList) => {
			const newToastList = prevToastList.map((toast) => {
				if (toast.id === targetToastId) {
					return { ...toast, id: targetToastId, status: "running" };
				}

				return toast;
			});
			console.log("activatedToast : ", newToastList);
			return newToastList;
		});
	};

	// 토스트 비활성화
	const deactiveToast = (targetToastId) => {
		// 애니메이션이 진행되는 (화면에서 사라지는) 시간이 지나면 상태 변경
		setTimeout(() => {
			setToastList((prevToastList) => {
				const changeOveredToastList = prevToastList.map((toast) => {
					if (toast.id === targetToastId) {
						return {
							...toast,
							status: "over",
						};
					}
					return toast;
				});

				console.log("overedToast : ", changeOveredToastList);
				return changeOveredToastList;
			});
		}, 301);

		// 토스트 비활성화 (화면에서 사라지게 하기)
		setToastList((prevToastList) => {
			const deactivatedToastList = prevToastList.map((toast) => {
				if (toast.id === targetToastId) {
					return {
						...toast,
						status: "end",
					};
				}
				return toast;
			});

			console.log("deactivatedToast : ", deactivatedToastList);
			return deactivatedToastList;
		});
	};

	// 토스트 삭제
	const removeToast = (targetToastId) => {
		setToastList((prevToastList) => {
			const removedToastList = prevToastList.filter(
				(toast) => toast.id !== targetToastId
			);
			console.log(removedToastList);
			return removedToastList;
		});
	};

	const value = {
		toastList,
		processOnToast,
		deactiveToast,
		removeToast,
	};

	return (
		<ToastContext.Provider value={value}>{children}</ToastContext.Provider>
	);
}
