import Message from "./message";
import ScrollToBottom from 'react-scroll-to-bottom';

export default function Messages({ messages }) {
  return (
    <ScrollToBottom className="h-[calc(100%-144px)] p-4 pb-0 overflow-auto messages-box">
      <div className="mb-auto"/>
      {messages.map((ms, key) => <Message message={ms} key={key} />)}
    </ScrollToBottom>
  );
}
