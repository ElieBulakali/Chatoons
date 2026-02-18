
export default function ChatWindow({ selectedChat }) {
  if (!selectedChat) {
    return (
      <div className="chat-window">
        <div className="chat-header">Sélectionnez un chat</div>
        <div className="messages"></div>
        <input className="input" placeholder="Message..." />
      </div>
    );
  }

  return (
    <div className="chat-window">
      <div className="chat-header">{selectedChat.name}</div>
      <div className="messages">
        <div className="bubble sent">Je suis en route.</div>
        <div className="bubble received">{selectedChat.message}</div>
      </div>
      <input className="input" placeholder="Message..." />
    </div>
  );
}
