import Navbar from "./components/Navbar";
import { auth } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";

function App() {
	const style = {
		appContainer: `max-w-[728px] mx-auto text-center`,
		sectiontContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
	};

	const [user] = useAuthState(auth);

	// console.log(user);

	return (
		<div className={style.appContainer}>
			<section className={style.sectiontContainer}>
				{/* navbar */}
				<Navbar />
				{/* chat component */}
				{user ? <Chat /> : null}
			</section>
		</div>
	);
}

export default App;
