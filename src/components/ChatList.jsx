
export default function ChatList({ chats = [], onAddChat }) {
  const handleAddChat = () => {
    const name = prompt("Nom du contact:");
    const message = prompt("Message:");
    if (name && message) {
      onAddChat(name, message);
    }
  };

  return (
    <div className="chat-list">
      <h2>Messages</h2>
      {chats.map((chat, index) => (
        <a href="#" key={chat.id}>
          <div className={`chat-item ${index === 0 ? "active" : ""}`}>
            <strong>{chat.name}</strong>
            <p>{chat.message}</p>
          </div>
        </a>
      ))}
      <button onClick={handleAddChat} style={{ marginTop: "10px", padding: "10px" }}>
        + Ajouter un chat
      </button>
    </div>
  );
}
