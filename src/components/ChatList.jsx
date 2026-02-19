
export default function ChatList({ chats = [], onAddChat, selectedChat, onSelectChat }) {
  const handleAddChat = () => {
    const name = prompt("Nom du contact:");
    const message = prompt("Message:");
    if (name && message) {
      onAddChat(name, message);
    }
  };

  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  const getAvatarColor = (index) => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'];
    return colors[index % colors.length];
  };

  return (
    <div className="chat-list">
      <h2>Messages</h2>
      {chats.map((chat, index) => (
        <a href="#" key={chat.id} onClick={(e) => { e.preventDefault(); onSelectChat(chat); }}>
          <div className={`chat-item ${selectedChat?.id === chat.id ? "active" : ""}`}>
            <div className="chat-item-content">
              <div className="avatar" style={{ backgroundColor: getAvatarColor(index) }}>
                {getInitials(chat.name)}
              </div>
              <div className="chat-info">
                <strong>{chat.name}</strong>
                <p>{chat.message}</p>
              </div>
            </div>
          </div>
        </a>
      ))}
      <button onClick={handleAddChat} style={{ marginTop: "10px", padding: "10px" }}>
        + Ajouter un chat
      </button>
    </div>
  );
}
