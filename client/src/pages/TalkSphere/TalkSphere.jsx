import React, { useState, useEffect } from 'react';

const TalkSphere = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages(prevMessages => [...prevMessages, { username: 'User', text: 'Hello!' }]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages(prevMessages => [...prevMessages, { username: 'User', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <h1>TalkSphere</h1>
      <div>
        <select>
          <option value="global">Global</option>
          <option value="school">School</option>
          <option value="college">College</option>
          <option value="professional">Professional</option>
        </select>
      </div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.username}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div>
        <input value={newMessage} onChange={e => setNewMessage(e.target.value)} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default TalkSphere;