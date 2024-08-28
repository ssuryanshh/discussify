import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "./TalkSphereScreen.css";
import Chats from "../../Components/TalkSphere/Chats/Chats";
import { Input } from "antd";
import PageHeader from "../../Components/Common/PageHeader/PageHeader";

const { TextArea } = Input;

function TalkSphereScreen({ userInfo }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socket = useRef(io("https://ed-unity-nnpz.onrender.com")).current;

  useEffect(() => {
    socket.on("chatMessage", (msg) => {
      console.log("Received message:", msg);
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const sendMessage = () => {
    if (message.trim()) {
      const msg = { username: userInfo.username, text: message };
      console.log("Sending message:", msg);
      socket.emit("chatMessage", msg);
      setMessage("");
    }
  };

  return (
    <div className="talksphere-screen-container">
      <div className="talksphere-screen-header">
        <PageHeader
          headerText={"TalkSphere"}
          content={"Discuss what's on your mind with the online users"}
          username={userInfo.username}
        />
      </div>
      <div className="talksphere-screen">
        <div className="talksphere-nav">
          <div className="nav-items">
            <h3>Global</h3>
          </div>
        </div>
        <div className="talksphere-container">
          <div className="talk-container">
            <Chats messages={messages} userInfo={userInfo} />
          </div>
          <div className="input-container">
            <TextArea
              rows={2}
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              allowClear
            />
            <button className="chat" onClick={sendMessage}>
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalkSphereScreen;
