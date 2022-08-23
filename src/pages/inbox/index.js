import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";

export default function InboxLayout() {
  return (
    <div className="border border-gray-300 bg-white rounded h-[calc(100vh-97px)] flex">
      <Helmet>
        <title>Instagram &#8226; Chats</title>
      </Helmet>
      <Sidebar />
      <Outlet />
    </div>
  );
}
