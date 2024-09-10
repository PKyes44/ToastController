/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialAuthValue = {
	isLoggedIn: false,
	currentMember: null,
	checkIsExistMember: () => {},
	processOnSignUp: () => {},
};

export const AuthContext = createContext(initialAuthValue);

export function AuthProvider({ children }) {
	const [members, setMembers] = useState([]);
	const [currentMember, setCurrentMember] = useState(
		initialAuthValue.currentMember
	);
	const isLoggedIn = !!currentMember;

	const processOnSignUp = (newMemberData) => {
		console.log(newMemberData);
		setMembers((prevMembers) => [...prevMembers, newMemberData]);
		// navigate("/log-in");
	};
	const checkIsExistMember = (credential) => {
		const { id, password } = credential;
		const member = members.find((member) => member.id === id);
		if (!member) {
			return false;
		}

		if (member.password !== password) {
			return false;
		}

		processOnLogIn(credential);
		return true;
	};
	const processOnLogIn = (credential) => {
		setCurrentMember(credential);

		alert("로그인 성공");
	};

	const value = {
		isLoggedIn,
		currentMember,
		checkIsExistMember,
		processOnSignUp,
	};

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
}
