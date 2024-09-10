import Header from "../../component/Header/Header";
import { Outlet } from "react-router-dom";
import Page from "../../component/Page/Page";

function RootLayout() {
	return (
		<>
			<Header />
			<Page>
				<Outlet />
			</Page>
		</>
	);
}

export default RootLayout;
