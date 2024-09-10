import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";

function Header() {
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<header className="w-screen h-20 m-auto border-b-2 shadow-md">
			<div className="w-10/12 h-full m-auto flex flex-row justify-between items-center ">
				<Link className="text-2xl" to="/">
					HOME
				</Link>
				<div className="flex gap-x-6 ">
					{isLoggedIn ? (
						<>
							<Link className="text-xl" to="/my-page">
								마이페이지
							</Link>
							<Link className="text-xl" to="/log-out">
								로그아웃
							</Link>
						</>
					) : (
						<>
							<Link className="text-xl" to="/sign-up">
								회원가입
							</Link>
							<Link className="text-xl" to="/log-in">
								로그인
							</Link>
						</>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
