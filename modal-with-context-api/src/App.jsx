import Backdrop from "./components/Backdrop/backdrop";
import LoginModal from "./components/LoginModal/LoginModal";
import Modal from "./components/Modal/Modal";
import SignUpModal from "./components/SignUpModal/SignUpModal";
import { ModalProvider, useModal } from "./contexts/modal.context";
import { useTheme } from "./contexts/theme.context";

function App() {
	const modal = useModal();
	const { theme, toggleDarkTheme } = useTheme();

	return (
		<div id="app">
			<header
				className={`px-20 shadow-lg h-20 flex items-center justify-between ${
					theme === "dark"
						? "bg-black text-white"
						: "bg-white text-black"
				}`}
			>
				<h1 className="text-4xl">Modal With ContextAPI</h1>
				<div className="flex flex-row gap-x-5 text-lg">
					<button
						onClick={() => modal.open(<LoginModal />)}
						className={`border-2 border-red-400  px-5 py-1 rounded-md bg-red-400 ${
							theme === "dark" ? "text-black" : "text-gray-100"
						}`}
					>
						로그인
					</button>
					<button
						onClick={() => modal.open(<SignUpModal />)}
						className={`border-2 border-red-400  px-5 py-1 rounded-md bg-red-400 ${
							theme === "dark" ? "text-black" : "text-gray-100"
						}`}
					>
						회원가입
					</button>
				</div>
			</header>

			<main className="w-screen min-h-screen grid grid-cols-2 grid-rows-2">
				<section className="bg-yellow-300">
					<button
						onClick={toggleDarkTheme}
						className="px-10 py-2 border-2 bg-white m-10 rounded-lg"
					>
						toggle Theme
					</button>
				</section>
				<section className="w-auto row-span-5 bg-red-500"></section>
				<section className="bg-blue-300"></section>
			</main>
		</div>
	);
}

export default App;
