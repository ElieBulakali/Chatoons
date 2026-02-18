
import { useState } from "react";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";

export default function App() {
  const [chats, setChats] = useState([
    { id: 1, name: "Shane Martinez", message: "On my way home..." },
    { id: 2, name: "Katie Keller", message: "I'm watching Friends..." }
  ]);
  const [selectedChat, setSelectedChat] = useState(chats[0]);

  const addChat = (name, message) => {
    setChats([...chats, { id: Date.now(), name, message }]);
  };

  return (
    <div className="app">
      <ChatList chats={chats} onAddChat={addChat} selectedChat={selectedChat} onSelectChat={setSelectedChat} />
      <ChatWindow selectedChat={selectedChat} />
    </div>
  );
}
