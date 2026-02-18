
export default function ChatList() {
  return (
    <div className="chat-list">
      <h2>Messages</h2>
      <a href="#">
        <div className="chat-item active">
          <strong>Shane Martinez</strong>
          <p>On my way home...</p>
        </div>
      </a>
      <a href="#">
        <div className="chat-item">
          <strong>Katie Keller</strong>
          <p>I'm watching Friends...</p>
        </div>
      </a>
    </div>
  );
}
