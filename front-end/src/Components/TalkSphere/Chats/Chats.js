import React from "react";
import "./Chats.css";

function Chats({ messages, userInfo }) {
  return (
    <div className="chat-container">
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.username === userInfo.username ? 'sent' : 'received'}`}
          >
            <p><strong className="chat-user">{msg.username}: </strong>{msg.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chats;
