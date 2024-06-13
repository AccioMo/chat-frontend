import React from "react";
import { getCookie } from "../Auth/Cookies";
import "../../styles/Message.css";

function Message({ sender, content, seen }) {
	const user = getCookie("user");
	const username = user ? JSON.parse(user).username : null;
	const isUser = (sender) => {
		if (sender === username) {
			return true;
		} else {
			return false;
		}
	};
	return (
		<div
			className={`${isUser(sender) ? "right" : "left"} message-outer-box`}
		>
			<div
				className={`border ${
					isUser(sender) ? "sender-me" : "sender-other"
				} message-inner-box`}
			>
				<div className="message-content-box">
					<div className="message-content">{content}</div>
				</div>
				<div className="message-meta">
					<div className="message-sender">
						{sender}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Message;