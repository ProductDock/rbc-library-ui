import { Outlet } from "react-router-dom";

const ProtectedRouter = () => {
  // const { keycloak } = useKeycloak();

  // useEffect(() => {
  //   if (!keycloak?.authenticated) keycloak?.login();
  // }, [keycloak]);

  // return keycloak?.authenticated ? <Outlet /> : null;
  return <Outlet />;
};

export default ProtectedRouter;
