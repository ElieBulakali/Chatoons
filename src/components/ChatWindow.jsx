
import { useState, useRef } from "react";

export default function ChatWindow({ selectedChat, onSendMessage }) {
  const [messageText, setMessageText] = useState("");

  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  const getAvatarColor = (id) => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'];
    return colors[id % colors.length];
  };

  const handleSendMessage = () => {
    if (messageText.trim() && selectedChat) {
      onSendMessage(selectedChat.id, messageText);
      setMessageText("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const imageInputRef = useRef(null);
  const handleImageClick = () => imageInputRef.current?.click();
  const handleImageSelected = (e) => {
    const file = e.target.files?.[0];
    if (!file || !selectedChat) return;
    // For now we send a placeholder text for the image
    onSendMessage(selectedChat.id, '[image]');
    e.target.value = null;
  };
  const fileInputRef = useRef(null);
  const handleFileClick = () => fileInputRef.current?.click();
  const handleFileSelected = (e) => {
    const file = e.target.files?.[0];
    if (!file || !selectedChat) return;
    onSendMessage(selectedChat.id, `[file] ${file.name}`);
    e.target.value = null;
  };

  if (!selectedChat) {
    return (
      <div className="chat-window">
        <div className="chat-header">Sélectionnez un chat</div>
        <div className="messages"></div>
        <input className="input" placeholder="Message..." disabled />
      </div>
    );
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="header-avatar" style={{ backgroundColor: getAvatarColor(selectedChat.id) }}>
          {getInitials(selectedChat.name)}
        </div>
        <span>{selectedChat.name}</span>
      </div>
      <div className="messages">
        {selectedChat.messages?.map((msg, index) => (
          <div key={index} className={`bubble ${msg.type}`}>
            <div className="message-text">{msg.text}</div>
            <div className="message-time">{msg.timestamp}</div>
          </div>
        ))}
      </div>
      <div className="input-row">
        <div className="input-toolbar">
          <button className="tool-btn" title="Insérer un fichier" onClick={handleFileClick}>📎</button>
          <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileSelected} />
          <button className="tool-btn" title="Emoji">😊</button>
          <button className="tool-btn" title="Image" onClick={handleImageClick}>🖼️</button>
          <input type="file" accept="image/*" ref={imageInputRef} style={{ display: 'none' }} onChange={handleImageSelected} />
        </div>

        <input
          className="input"
          placeholder="Message..."
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
}
