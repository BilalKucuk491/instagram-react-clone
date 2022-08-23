import Icon from "components/Icon";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function Reply({ setMessages }) {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages((messages) => [
      ...messages,
      {
        from: {
          id: "fZB0BBCbhPWRtH9lAbgMWcTt3193",
          name: "Bilal Kucuk",
          username: "bilalkucuk",
          avatar:
            "https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e",
        },
        message,
      },
    ]);
    setMessage("");
  };

  return (
    <footer className="h-[84px] flex items-center justify-center px-6">
      <form
        onSubmit={sendMessage}
        className="h-[44px] border rounded-full flex items-center w-full pl-[11px] pr-[8px]"
      >
        <button
          type="button"
          className="w-[40px] h-[42px] flex items-center justify-center"
        >
          <Icon name="smile-emoji" size={24} />
        </button>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 outline-none h-[40px] placeholder:text-gray-500 focus:placeholder:text-gray-300 text-sm px-[9px]"
          placeholder="Message.."
        />
        {!message && (
          <>
            <button
              type="button"
              className="w-[40px] h-[42px] flex items-center justify-center"
            >
              <Icon name="picture" size={24} />
            </button>
            <button
              type="button"
              className="w-[40px] h-[42px] flex items-center justify-center"
            >
              <Icon name="heart" size={24} />
            </button>
          </>
        )}
        {message && (
          <button
            type="submit"
            className="text-brand font-semibold text-sm px-3"
          >
            Send
          </button>
        )}
      </form>
    </footer>
  );
}
