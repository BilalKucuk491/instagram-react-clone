import { useState } from "react";
import Header from "./components/header.js";
import Messages from "./components/messages.js";
import Reply from "./components/reply.js";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      from: {
        id: "CyDQjp5KGfT6N5KgqGGoo9Kzlk22",
        name: "Emma D'Arcy",
        username: "emmadarcy",
        avatar:
          "https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e",
      },
      message: "hi",
    },
    {
      from: {
        id: "fZB0BBCbhPWRtH9lAbgMWcTt3193",
        name: "Bilal Kucuk",
        username: "bilalkucuk",
        avatar:
          "https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e",
      },
      message: "hi",
    },
    {
      from: {
        id: "CyDQjp5KGfT6N5KgqGGoo9Kzlk22",
        name: "Emma D'Arcy",
        username: "emmadarcy",
        avatar:
          "https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e",
      },
      message: "did you watch this serie?",
    },
    {
      from: {
        id: "fZB0BBCbhPWRtH9lAbgMWcTt3193",
        name: "Bilal Kucuk",
        username: "bilalkucuk",
        avatar:
          "https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e",
      },
      message: "yep",
    },
    {
      from: {
        id: "fZB0BBCbhPWRtH9lAbgMWcTt3193",
        name: "Bilal Kucuk",
        username: "bilalkucuk",
        avatar:
          "https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e",
      },
      message:
        "i’m genuinely in tears house of the dragon was so good it not only reminded me how much i love daenerys and game of thrones lore but how much we’ve been in need of REAL tv-series again.",
    },
    {
      from: {
        id: "fZB0BBCbhPWRtH9lAbgMWcTt3193",
        name: "Bilal Kucuk",
        username: "bilalkucuk",
        avatar:
          "https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e",
      },
      message:
        "'I don't want to say #GOT is all the way back....but #GameOfThrones is all the way back,' the tweet added.",
    },
    {
      from: {
        id: "CyDQjp5KGfT6N5KgqGGoo9Kzlk22",
        name: "Emma D'Arcy",
        username: "emmadarcy",
        avatar:
          "https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e",
      },
      message:
        "'hearing the Game of Thrones theme playing had me screaming #HouseOfTheDragon.",
    },
    {
      from: {
        id: "fZB0BBCbhPWRtH9lAbgMWcTt3193",
        name: "Bilal Kucuk",
        username: "bilalkucuk",
        avatar:
          "https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e",
      },
      message: "me too",
    },
    {
      from: {
        id: "fZB0BBCbhPWRtH9lAbgMWcTt3193",
        name: "Bilal Kucuk",
        username: "bilalkucuk",
        avatar:
          "https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e",
      },
      message: "me hearing the Game of thrones theme on #HouseoftheDragon",
    },
  ])

  const user = {
    name: "Emma D'Arcy",
    avatar:
      "https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e",
  };

  return (
    <div className="flex-1">
      <Header user={user} />
      <Messages messages={messages} />
      <Reply setMessages={setMessages} />
    </div>
  );
}
