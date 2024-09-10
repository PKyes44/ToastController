import ToastForm from "./components/ToastForm/ToastForm";
import ToastList from "./components/ToastList/ToastList";

function App() {
	return (
		<main>
			<ToastList />
			<section className="w-96 h-96 bg-white m-auto mt-56">
				<ToastForm />
			</section>
		</main>
	);
}

export default App;
