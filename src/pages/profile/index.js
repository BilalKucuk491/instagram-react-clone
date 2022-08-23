import { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink, Outlet } from "react-router-dom";
import { getUserInfo } from "firebase.js";
import Header from "./components/header";
import Icon from "components/Icon";
import classNames from "classnames";
import NotFoundPage from "components/NotFoundPage";
import { Helmet } from "react-helmet";

export function ProfileLayout() {
  const [loading, setLoading] = useState(true);
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo(username)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        setUser(false);
      });
  }, [loading]);

  if (user === false) {
    return <NotFoundPage/>
  }
  if (user===null) {
    return(
      <div>
        Loading...
      </div>
    )
  }
  return (
    user && (
      <div>
        <Helmet>
          <title>{user.fullName} (@{user.username}) &#8226; Instagram photos and videos</title>
        </Helmet>
        <Header user={user} />
        <nav className="border-t-2 flex gap-x-16 justify-center items-center">
          <NavLink
            to={`/${username}`}
            end={true}
            className={({ isActive }) =>
              classNames({
                "text-xs flex py-5 border-t tracking-widest -mt-px items-center gap-x-1.5 font-semibold": true,
                "text-instagram_gray border-transparent": !isActive,
                "text-black border-black": isActive,
              })
            }
          >
            <Icon size={12} name="posts" />
            POSTS
          </NavLink>
          <NavLink
            to={`/${username}/tagged`}
            end={true}
            className={({ isActive }) =>
              classNames({
                "text-xs flex py-5 border-t tracking-widest -mt-px items-center gap-x-1.5 font-semibold": true,
                "text-instagram_gray border-transparent": !isActive,
                "text-black border-black": isActive,
              })
            }
          >
            <Icon size={12} name="tagged" />
            TAGGED
          </NavLink>
        </nav>
        <Outlet />
      </div>
    )
  );
}
