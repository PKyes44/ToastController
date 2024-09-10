import { useContext, useRef } from "react";
import { AuthContext } from "../../contexts/auth.context";
import { useNavigate } from "react-router-dom";

function LoginPage() {
	const { checkIsExistMember } = useContext(AuthContext);
	const navigate = useNavigate();
	// 리렌더링 X but, 저장할 필요가 있는 값
	const idInputRef = useRef(null);
	const passwordInputRef = useRef(null);

	const handleSubmitLoginForm = (event) => {
		event.preventDefault();
		const id = idInputRef.current.value;
		const password = passwordInputRef.current.value;
		const loginInputData = {
			id,
			password,
		};
		const isExistMember = checkIsExistMember(loginInputData);
		if (!isExistMember) {
			alert("잘못된 정보입니다");
			return;
		}
		navigate("/");
	};
	return (
		<form
			onSubmit={handleSubmitLoginForm}
			className="w-[600px] h-[700px] m-auto mt-8 bg-white shadow-lg shadow-gray-300 rounded-lg p-10"
		>
			<h1 className="text-center font-extrabold text-3xl mb-8">로그인</h1>
			<fieldset className="flex flex-col gap-y-20">
				<legend className="-ml-[9999px]">로그인양식</legend>

				<div className="flex flex-col gap-y-4">
					<label className="font-medium text-xl" htmlFor="id">
						아이디
					</label>
					<input
						className="border-b-2 border-black outline-none text-lg pb-1"
						ref={idInputRef}
						id="id"
						type="text"
						placeholder="아이디를 입력하세요"
						autoComplete="off"
					/>
				</div>
				<div className="flex flex-col gap-y-4">
					<label className="font-medium text-xl" htmlFor="password">
						비밀번호
					</label>
					<input
						className="border-b-2 border-black outline-none text-lg pb-1"
						ref={passwordInputRef}
						id="password"
						type="password"
						placeholder="비밀번호를 입력하세요"
						autoComplete="off"
					/>
				</div>
				<div className="flex flex-row justify-between mt-[158px]">
					<button className="border-2 border-black w-[250px] h-12 text-lg hover:bg-red-400 hover:border-red-400 hover:text-gray-200">
						취소
					</button>
					<button className="border-2 border-black w-[250px] h-12 text-lg hover:bg-red-400 hover:border-red-400 hover:text-gray-200">
						로그인
					</button>
				</div>
			</fieldset>
		</form>
	);
}

export default LoginPage;
