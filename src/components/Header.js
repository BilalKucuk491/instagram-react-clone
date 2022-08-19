import { Link } from "react-router-dom";
import Search from "./Search";
import { logout } from "firebase.js";
export default function Header() {
  return (
    <header className="bg-white border-b border-gray-300">
      <div className="flex items-center justify-between h-[60px] container mx-auto">
        <Link to="/">
          <img
            className="h-[29px] m-40"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          />
        </Link>
        <Search/>
        <nav>
          <button onClick={logout}>Logout</button>
        </nav>
      </div>
    </header>
  );
}