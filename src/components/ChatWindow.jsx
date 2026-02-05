
export default function ChatWindow() {
  return (
    <div className="chat-window">
      <div className="chat-header">Shane Martinez</div>
      <div className="messages">
        <div className="bubble sent">I'm meeting a friend here for dinner.</div>
        <div className="bubble received">On my way home but I needed to stop by the book store.</div>
      </div>
      <input className="input" placeholder="Message..." />
    </div>
  );
}
