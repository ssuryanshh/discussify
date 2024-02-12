import React, { useState, useEffect } from 'react';
import "./TalkSphere.css";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { toast } from 'react-toastify';
function TalkSphere() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [editableMessage, setEditableMessage] = useState(null);
  useEffect(() => {
    fetchLast5Messages();
  }, []);

  const fetchLast5Messages = async () => {
    try {
      const response = await axios.get('https://edunity.onrender.com/api/talksphere/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const postMessage = async () => {
    try {
      if (editableMessage) {
        // If editing a message
        await axios.put(`https://edunity.onrender.com/api/talksphere/messages/${editableMessage._id}`, { text: newMessage });
      } else {
        // If posting a new message
        await axios.post('https://edunity.onrender.com/api/talksphere/messages', { text: newMessage });
      }
      fetchLast5Messages(); // Refresh messages after editing or posting
      setNewMessage(''); // Clear the textarea
      setEditableMessage(null); // Clear the editable message
    } catch (error) {
      console.error('Error posting/editing message:', error);
    }
  };
  const deleteMessage = async (messageId) => {
    try {
      await axios.delete(`https://edunity.onrender.com/api/talksphere/messages/${messageId}`);
      toast("message  deleted");
      fetchLast5Messages(); // Refresh messages after deleting
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };
  const handleEdit = (message) => {
    setNewMessage(message.text); // Set the textarea content to the message being edited
    setEditableMessage(message);
  };

  const handleDelete = (messageId) => {
    deleteMessage(messageId);
  };

  const getLastFourUsernames = () => {
    const lastFourUsernames = messages.slice(-4).map(message => message.username);
    return lastFourUsernames.map(username => username.charAt(0).toUpperCase());
  };

  return (
    <div className='talksphere-container'>
      <div className='talk-head'>
        <h3>Global Chat</h3>
        <h1>TalkSphere</h1>
        <div className='talk-online'>
          <AvatarGroup total={10}>
            {getLastFourUsernames().map((initial, index) => (
              <Avatar key={index}>{initial}</Avatar>
            ))}
          </AvatarGroup>
        </div>
      </div>
      <div className='chatbox'>
        {messages.map((message) => (
          <div key={message._id} className="chat-message">
            <div className="avatar">
              <Avatar>{message.username.charAt(0).toUpperCase()}</Avatar>
            </div>
            <div className="message-content">
              <p>{message.username}: {message.text}</p>
              <small>{new Date(message.timestamp).toLocaleString()}</small>
              <div className="message-actions">
                <EditIcon onClick={() => handleEdit(message)} fontSize='medium'></EditIcon>
                <DeleteIcon fontSize='medium' onClick={() => handleDelete(message._id)}></DeleteIcon>
                </div>
            </div>
          </div>
        ))}
      </div>
      <div className='send'>
        <textarea
          className='message'
          placeholder='Type a message'
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className='talk' type='button' onClick={postMessage}>
          {editableMessage ? 'Edit' : 'Send'}
        </button>
      </div>
    </div>
  );
}

export default TalkSphere;
