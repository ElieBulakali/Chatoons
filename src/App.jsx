
import { useState } from "react";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";

const getTimeString = () => {
  const now = new Date();
  return now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
};

export default function App() {
  const [chats, setChats] = useState([
    { id: 1, name: "Shane Martinez", message: "On my way home...", messages: [
      { type: "sent", text: "Je suis en route.", timestamp: "14:35" },
      { type: "received", text: "On my way home...", timestamp: "14:38" }
    ]},
    { id: 2, name: "Katie Keller", message: "I'm watching Friends...", messages: [
      { type: "sent", text: "Salut !", timestamp: "15:20" },
      { type: "received", text: "I'm watching Friends...", timestamp: "15:22" }
    ]}
  ]);
  const [selectedChat, setSelectedChat] = useState(chats[0]);

  const addChat = (name, message) => {
    const newChat = { id: Date.now(), name, message, messages: [{ type: "received", text: message, timestamp: getTimeString() }] };
    setChats([...chats, newChat]);
  };

  const sendMessage = (chatId, messageText) => {
    const timestamp = getTimeString();
    setChats(chats.map(chat => 
      chat.id === chatId 
        ? { ...chat, messages: [...chat.messages, { type: "sent", text: messageText, timestamp }] }
        : chat
    ));
    setSelectedChat({
      ...selectedChat,
      messages: [...selectedChat.messages, { type: "sent", text: messageText, timestamp }]
    });
  };

  return (
    <div className="app">
      <ChatList chats={chats} onAddChat={addChat} selectedChat={selectedChat} onSelectChat={setSelectedChat} />
      <ChatWindow selectedChat={selectedChat} onSendMessage={sendMessage} />
    </div>
  );
}
