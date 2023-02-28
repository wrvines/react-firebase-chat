import React from "react";
import { auth } from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import Logout from "./Logout";

function Navbar() {
	const style = {
		nav: `bg-gray-800 h-20 flex justify-between items center p-4`,
		heading: `text-white text-3xl`,
	};

	const [user] = useAuthState(auth);
	console.log(user);

	return (
		<div className={style.nav}>
			<h1 className={style.heading}>Let's Keep In Touch</h1>
			{user ? <Logout /> : <SignIn />}
		</div>
	);
}

export default Navbar;
