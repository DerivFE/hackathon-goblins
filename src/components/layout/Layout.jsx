import Head from "next/head";
import TopNavigation from "components/navigation/TopNavigation";
import MainNavigation from "components/navigation/MainNavigation";
import css from "./Layout.module.css";

const default_page_name = "Page";
const default_description =
  "Build your own trading platform, powered by the Deriv API. We use WebSockets for fast, two-way messaging between your apps and our trading services.";

const Layout = ({ children, description, page_name }) => {
  return (
    <>
      <Head>
        <title>Deriv API | {page_name || default_page_name}</title>
        <meta name="description" content={description || default_description} />
        <link href="/deriv.png" rel="icon" sizes="96x96" type="image/png" />
      </Head>
      <div className={css.main}>
        <TopNavigation />
        <MainNavigation />
        {children}
      </div>
    </>
  );
};

export default Layout;
