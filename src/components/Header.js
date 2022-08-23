import { Link, NavLink } from "react-router-dom";
import Search from "./Search";
import { logout } from "firebase.js";
import Icon from "./Icon";
import { useSelector } from "react-redux";
export default function Header() {
  const user = useSelector((state) => state.auth.user);

  return (
    <header className="bg-white border-b border-gray-300">
      <div className="flex items-center justify-center h-[60px] ">
        <Link to="/">
          <img
            className="h-[29px] m-40 justify-center items-center"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          />
        </Link>
        <Search />
        <nav className="flex items-center gap-x-3 mr-10 ">
          <NavLink to="/">
            <Icon name="home" size={24} />
          </NavLink>
          <NavLink to="/inbox">
            <Icon name="messenger" size={24} />
          </NavLink>
          <NavLink to="/">
            <Icon name="newPost" size={24} />
          </NavLink>
          <NavLink to="/">
            <Icon name="findPeople" size={24} />
          </NavLink>
          <NavLink to="/">
            <Icon name="activityFeed" size={24} />
          </NavLink>
          <NavLink to={`/${user.username}`}>
            <img
              className="w-6 h-6 rounded-full"
              src="https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9KVgdz&edm=AKBKmG8AAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT8ZPoFh0rG6JQRiWIhnitzrOvRZq65srIwWOJZylyx6zA&oe=630A26CF&_nc_sid=2cfe3e"
              alt=""
            />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
