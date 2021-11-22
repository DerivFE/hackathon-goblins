import classNames from "classnames";
import Image from "next/image";
import { Text } from "components/Text";
import HeroImage from "components/Navigation/HeroImage";
import Layout from "components/Layout/Layout";
import css from "./index.module.css";
import AutomationIcon from "assets/svg/automation.svg";
import IntegrationIcon from "assets/svg/integration.svg";
import ExecutionIcon from "assets/svg/execution.svg";

const Home = () => {
  return (
    <Layout page_name="Home">
      <div className={css.main_container}>
        <HeroImage className={css.placeholder} src="/image/header.png">
          <div className={classNames(css.hero_container, css.content)}>
            <Text as="h1" type="heading1" css={{ mb: "16px" }}>
              Deriv API
            </Text>
            <Text type="subtitle1">
              Use our powerful, flexible, and free API to build a custom trading
              <br />
              platform – for yourself or for your business.
            </Text>
          </div>
        </HeroImage>
        <div className={classNames(css.content, css.fold)}>
          <Text as="h2" type="heading2" css={{ color: "#333", mb: "10px" }}>
            Benefits of using Deriv API
          </Text>
          <div className={css.benefit_icon_container}>
            <div className={css.item_container}>
              <AutomationIcon className={css.icon} />
              <Text type="subtitle1">Automation</Text>
            </div>
            <div className={css.item_container}>
              <IntegrationIcon className={css.icon} />
              <Text type="subtitle1">Easy Integration</Text>
            </div>
            <div className={css.item_container}>
              <ExecutionIcon className={css.icon} />
              <Text type="subtitle1">Fast Execution</Text>
            </div>
          </div>
          <div className={css.benefit_grid}>
            <div className={css.item_container}>
              <Text type="heading3" css={{ mb: "10px" }}>
                Personalisation
              </Text>
              <Text type="subtitle1" css={{ lineHeight: "2rem" }}>
                Personalise your trading applications to match your needs.
                Create charts and views just the way you like them. Develop your
                trading applications using any common programming language and
                extend your trading opportunity.
              </Text>
            </div>
            <div className={css.item_container}>
              <Image
                className={css.image}
                src="/image/personalisation.png"
                alt="personalisation"
                width={486}
                height={260}
              />
            </div>
            <div className={css.item_container}>
              <Image
                src="/image/build-business.png"
                alt="personalisation"
                width={486}
                height={260}
              />
            </div>
            <div className={css.item_container}>
              <Text type="heading3" css={{ mb: "10px" }}>
                Build a business and earn more
              </Text>
              <Text type="subtitle1" css={{ lineHeight: "2rem" }}>
                Create your own trading apps by taking advantage of the power of
                {` Deriv's`} trading services. Share your apps with fellow
                traders or customers, and have a chance to earn more or build
                your own business.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
