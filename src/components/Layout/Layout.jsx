import Head from "next/head";
import classNames from "classnames";
import TopNavigation from "components/Navigation/TopNavigation";
import MainNavigation from "components/Navigation/MainNavigation";
import css from "./Layout.module.css";

const default_page_name = "Page";
const default_description =
  "Build your own trading platform, powered by the Deriv API. We use WebSockets for fast, two-way messaging between your apps and our trading services.";

const Layout = ({ className, children, description, page_name }) => {
  return (
    <>
      <Head>
        <title>Deriv API | {page_name || default_page_name}</title>
        <meta name="description" content={description || default_description} />
        <link href="/deriv.png" rel="icon" sizes="96x96" type="image/png" />
        <link
          rel="preload"
          href="/fonts/IBMPlexSansVar-Roman.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/IBMPlexSansVar-Italic.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>
      <TopNavigation />
      <MainNavigation />
      <div className={classNames(className, css.main)}>{children}</div>
    </>
  );
};

export default Layout;
