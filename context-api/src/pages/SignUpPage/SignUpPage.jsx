import { useContext, useRef } from "react";
import { AuthContext } from "../../contexts/auth.context";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
	const { processOnSignUp } = useContext(AuthContext);
	const navigate = useNavigate();
	const idInputRef = useRef(null);
	const passwordInputRef = useRef(null);
	const nicknameInputRef = useRef(null);

	const handleSubmitSignUpForm = (event) => {
		event.preventDefault();
		const id = idInputRef.current.value;
		const password = passwordInputRef.current.value;
		const nickname = nicknameInputRef.current.value;
		const newMemberData = {
			id,
			password,
			nickname,
		};
		processOnSignUp(newMemberData);
		navigate("/log-in");
	};

	return (
		<form
			onSubmit={handleSubmitSignUpForm}
			className="w-[600px] h-[700px] m-auto mt-8 bg-white shadow-lg shadow-gray-300 rounded-lg p-10"
		>
			<h1 className="text-center font-bold text-3xl mb-8">회원가입</h1>
			<fieldset className="flex flex-col gap-y-20">
				<legend className="-ml-[9999px]">회원가입양식</legend>

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
				<div className="flex flex-col gap-y-4">
					<label className="font-medium text-xl" htmlFor="nickname">
						닉네임
					</label>
					<input
						className="border-b-2 border-black outline-none text-lg pb-1"
						ref={nicknameInputRef}
						id="nickname"
						type="text"
						placeholder="닉네임을 입력하세요"
						autoComplete="off"
					/>
				</div>
				<div className="flex flex-row justify-between">
					<button className="border-2 border-black w-[250px] h-12 text-lg hover:bg-red-400 hover:border-red-400 hover:text-gray-200">
						취소
					</button>
					<button className="border-2 border-black w-[250px] h-12 text-lg hover:bg-red-400 hover:border-red-400 hover:text-gray-200">
						회원가입
					</button>
				</div>
			</fieldset>
		</form>
	);
}

export default SignUpPage;
