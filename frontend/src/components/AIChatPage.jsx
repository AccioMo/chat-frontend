import { useState } from "react";
import { useParams } from "react-router";
import ChatInput from "./Chat/ChatInput";
import Message from "./Chat/Message";
import MessagesContainer from "./Chat/MessagesContainer.jsx";
import { api, refreshToken } from "./Auth/Auth.tsx";
import "../styles/AIChatPage.css";
import { getCookie, validCookie } from "./Auth/Cookies";

function AIChatPage() {
	const { chat_id } = useParams();
	const user = getCookie("user");
	const uuid = user ? JSON.parse(user).uuid : null;
	const [messages, setMessages] = useState([]);
	const [lastMessage, setLastMessage] = useState([]);
	const handleSendMessage = async (message) => {
		let access_token = getCookie("access_token");
		if (validCookie(access_token) === false) {
			access_token = await refreshToken();
		}
		const headers = {
			Authorization: `Bearer ${access_token}`,
		};
		const response = await api
			.post("/api/send_to_ai", { content: message }, { headers: headers })
			.then((e) => {
				setMessages([...messages, e.data]);
				setLastMessage(e.data);
			})
			.catch((e) => {
				console.error(e);
			});
	};
	return (
		<div className="conversation-box">
			<div className="conversation">
				<MessagesContainer
					uuid={uuid}
					chat_id={chat_id}
					lastMessage={lastMessage}
				/>
			</div>
			<ChatInput onSend={handleSendMessage} />
		</div>
	);
}

export default AIChatPage;