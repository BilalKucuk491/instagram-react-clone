import Loader from "components/Loader";
import { useRoutes } from "react-router-dom";
import routes from "routes";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const showRoutes = useRoutes(routes);
  const user = useSelector((state) => state.auth.user);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setRedirect(true);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (!user && !redirect) {
    return <Loader />;
  }
  
  return <>{showRoutes}</>;
}
