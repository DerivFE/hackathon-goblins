import HeroImage from "components/Navigation/HeroImage";
import Layout from "components/Layout/Layout";
import css from "./index.module.css";

const Home = () => {
  return (
    <Layout page_name="Home">
      <HeroImage src="/image/header.png">
        <div className={css.hero_container}>
          <div className={css.hero_header}>Deriv API</div>
          <div className={css.hero_text}>
            Use our powerful, flexible, and free API to build a custom trading
            <br />
            platform – for yourself or for your business.
          </div>
        </div>
      </HeroImage>
      <div className={css.main_container}>Hello World</div>
      <div className={css.container}></div>
    </Layout>
  );
};

export default Home;
