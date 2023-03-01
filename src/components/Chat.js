import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../Firebase";
import React from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";

function Chat() {
	const scroll = React.useRef();
	const [messages, setMessages] = React.useState([]);

	React.useEffect(() => {
		const q = query(collection(db, "messages"), orderBy("timestamp"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			let messages = [];
			querySnapshot.forEach((doc) => {
				messages.push({ ...doc.data(), id: doc.id });
			});
			setMessages(messages);
		});
		return () => unsubscribe();
	}, []);

	return (
		<>
			<main className="flex flex-col p-[10px] relative">
				{/* chat message component */}
				{messages &&
					messages.map((message) => (
						<Message key={message.id} message={message} />
					))}
			</main>
			{/* send message component */}
			<SendMessage scroll={scroll} />
			<span ref={scroll}> </span>
		</>
	);
}

export default Chat;
