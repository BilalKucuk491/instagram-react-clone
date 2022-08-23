import classNames from "classnames";
import { useSelector } from "react-redux";

export default function Message({ message }) {
  const user = useSelector((state) => state.auth.user);
  const isUser = user.uid === message.from.id;
  return (
    <div
      className={classNames({
        "flex gap-x-2 max-w-[45%]": true,
        "self-end": isUser,
      })}
    >
      {!isUser && (
        <img
          src={message.from.avatar}
          className="w-6 h-6 rounded-full self-end mb-1"
        />
      )}
      <p
      style={{hyphens:"auto"}}
        className={classNames({
          "min-h-[44px] rounded-3xl inline-flex items-center py-3 px-4 text-start": true,
          "border border-gray-200": !isUser,
          "bg-[#efefef]": isUser,
        })}
      >
        {message.message}
      </p>
    </div>
  );
}
