import { Outlet } from "react-router-dom";
import AppHeader from "../organisms/AppHeader";
import AppFooter from "../organisms/AppFooter";

const AppRoot: React.FC = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  );
}


export default AppRoot