import TopNavigation from "components/navigation/TopNavigation";
import MainNavigation from "components/navigation/MainNavigation";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={css.main}>
      <TopNavigation />
      <MainNavigation />
      {children}
    </div>
  );
};

export default Layout;
