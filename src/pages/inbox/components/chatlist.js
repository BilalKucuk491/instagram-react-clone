import classNames from "classnames";
import { NavLink, useParams } from "react-router-dom";

export default function Chatlist() {
  const { conversationId } = useParams();
  const chats = [
    {
      id: 1,
      user: {
        avatar:
          "https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e",
        name: "Matt Smith",
      },
      unRead: true,
      lastMessage: "hello , I'm 'daunting' Doctor",
    },
    {
      id: 2,
      user: {
        avatar:
          "https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e",
        name: "Emma D'Arcy",
      },
      lastMessage: "hi there!",
    },
    {
      id: 3,
      user: {
        avatar:
          "https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e",
        name: "Graham McTavish",
      },
      lastMessage: "Hola!",
    },
    {
      id: 4,
      user: {
        avatar:
          "https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e",
        name: "Eve Best",
      },
      lastMessage: "Hallo!",
    },
    ,
    {
      id: 5,
      user: {
        avatar:
          "https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e",
        name: "Olivia Cooke",
      },
      lastMessage: "hi there!",
    },
    ,
    {
      id: 6,
      user: {
        avatar:
          "https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e",
        name: "Savannah Steyn",
      },
      lastMessage: "hi there!",
    },
    ,
    {
      id: 7,
      user: {
        avatar:
          "https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e",
        name: "Milly Alcock",
      },
      lastMessage: "hi there!",
    },
    ,
    {
      id: 8,
      user: {
        avatar:
          "https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e",
        name: "Bill Peterson",
      },
      lastMessage: "hi there!",
    },
  ];
  return (
    <div className="h-[calc(100%-60px)] overflow-auto py-3">
      <header className="flex items-center justify-between px-5 mb-1">
        <h6 className="text-base font-semibold">Messages</h6>
        <button className="text-brand text-sm font-semibold">
          10 requests
        </button>
      </header>
      {chats.map((chat) => (
        <NavLink
          className={classNames({
            "h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5": true,
            "font-semibold": chat?.unRead,
            "!bg-[#efefef]": +conversationId === chat.id,
          })}
          key={chat.id}
          to={`/inbox/${chat.id}`}
        >
          <img
            src={chat.user.avatar}
            className="w-14 h-14 rounded-full"
            alt=""
          />

          <div>
            <h6 className="text-sm">{chat.user.name}</h6>
            <p className={`text-sm ${!chat?.unRead && "text-instagram_gray"}`}>
              {chat.lastMessage}
            </p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
