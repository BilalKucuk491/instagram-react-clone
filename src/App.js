import Loader from "components/Loader";
import { useRoutes } from "react-router-dom";
import routes from "routes";
import { useSelector } from "react-redux";

export default function App() {
  const showRoutes = useRoutes(routes);
  const user = useSelector((state) => state.auth.user);

  if (user === null) {
    return <Loader />;
  }
  return( 
  <>
  {showRoutes}
  </>);
}
