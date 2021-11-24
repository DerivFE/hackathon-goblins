import classNames from "classnames";
import Link from "next/link";
import { Button } from "components/Button";
import Image from "next/image";
import { Carousel, CarouselItem } from "components/Carousel";
import { Checkbox, CheckboxItem } from "components/Checkbox";
import { Text } from "components/Text";
import HeroImage from "components/Navigation/HeroImage";
import Layout from "components/Layout/Layout";
import css from "./index.module.css";
import AutomationIcon from "assets/svg/automation.svg";
import JSLibraryIcon from "assets/svg/js-library.svg";
import IntegrationIcon from "assets/svg/integration.svg";
import ExecutionIcon from "assets/svg/execution.svg";
import SignUpIcon from "assets/svg/sign-up.svg";
import RegisterIcon from "assets/svg/register-your-app.svg";
import GuideIcon from "assets/svg/guide.svg";

const Home = () => {
  return (
    <Layout page_name="Home">
      <div className={css.main_container}>
        <HeroImage
          className={css.placeholder}
          src="/image/header.png"
          alt="API banner"
        >
          <div className={classNames(css.hero_container, css.content)}>
            <Text
              as="h1"
              type="heading1"
              css={{ mb: "16px" }}
              className={classNames(css.styled_header_text)}
            >
              Deriv API
            </Text>
            <Text
              type="subtitle1"
              className={classNames(css.styled_small_header_text)}
            >
              Use our powerful, flexible, and free API to build a custom trading
              platform – for yourself or for your business.
            </Text>
          </div>
        </HeroImage>
        <div className={classNames(css.content, css.fold)}>
          <Text
            as="h2"
            type="heading2"
            css={{ color: "#333", mb: "40px" }}
            className={css.benefit_styled_header}
          >
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

          <div className={css.benefit_grid_mobile}>
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
        <div className={classNames(css.earn_container, css.fold)}>
          <div className={css.inner_container}>
            <div className={css.text_container}>
              <Text
                type="heading2"
                css={{ color: "#333", maxWidth: "80%" }}
                className={css.earn_container_header}
              >
                Ways to earn with Deriv API
              </Text>
            </div>
            <div className={css.check_container}>
              <Checkbox>
                <CheckboxItem className={css.check_container_item}>
                  Register your app with Deriv, and add a percentage markup to
                  the contract prices to profit from every contract payout.
                </CheckboxItem>
                <CheckboxItem className={css.check_container_item}>
                  Sign up as an affiliate, build your app, and get commission on
                  every signup and trade completed via your app.
                </CheckboxItem>
                <CheckboxItem className={css.check_container_item}>
                  Sign up as a payment agent , and use our API to build your own
                  custom payment website to earn commission on every payment you
                  process for Deriv’s clients.
                </CheckboxItem>
              </Checkbox>
            </div>
          </div>
        </div>
        <div className={classNames(css.step_container, css.fold)}>
          <div className={css.inner_container}>
            <Text type="heading2" css={{ mb: "40px" }}>
              Get started with our API in 3 simple steps:
            </Text>
            <div className={css.steps}>
              <div className={css.card}>
                <div className={css.header}>
                  <Text
                    type="subtitle1"
                    css={{ fontWeight: "bold", mb: "8px" }}
                  >
                    1. Sign up
                  </Text>
                  <SignUpIcon />
                </div>
                <div className={css.body}>
                  <Text type="paragraph1">
                    Create a free Deriv account to access our API (or use your
                    Binary.com login details).
                  </Text>
                </div>
              </div>
              <div className={css.card}>
                <div className={css.header}>
                  <Text
                    type="subtitle1"
                    css={{ fontWeight: "bold", mb: "8px" }}
                  >
                    2. Register your app
                  </Text>
                  <RegisterIcon />
                </div>
                <div className={css.body}>
                  <Text type="paragraph1">
                    Fill out the registration form to start using Deriv API.
                  </Text>
                </div>
              </div>
              <div className={css.card}>
                <div className={css.header}>
                  <Text
                    type="subtitle1"
                    css={{ fontWeight: "bold", mb: "8px" }}
                  >
                    3. Read our guide
                  </Text>
                  <GuideIcon />
                </div>
                <div className={css.body}>
                  <Text type="paragraph1">
                    Our API quick start guide covers the essentials you need to
                    start building your app right away.
                  </Text>
                </div>
              </div>
            </div>
            <Text type="paragraph2" className={css.steps_small_desc}>
              By using our API, you confirm that you have read and agreed to our
              terms and conditions.
            </Text>
          </div>
        </div>
        <div className={classNames(css.testimonials, css.fold)}>
          <Carousel title="See what our clients say">
            <CarouselItem>
              <div className={css.testimony}>
                <Text type="paragraph1" css={{ mb: "32px" }}>
                  Probably the best API for making your business successful in
                  trading derivatives out there
                </Text>
                <span className={css.underline} />
                <Text type="paragraph1">
                  <strong>Thiago</strong>, Entrepreneur | Brazil
                </Text>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className={css.testimony}></div>
            </CarouselItem>
          </Carousel>
        </div>
        <div className={classNames(css.library, css.fold)}>
          <JSLibraryIcon />
          <Text
            type="heading2"
            css={{ mb: "12px", maxWidth: "735px", textAlign: "center" }}
            className={classNames(css.library_text_mw, css.library_header)}
          >
            Comprehensive all-in-one JavaScript client library
          </Text>
          <Text
            type="subtitle1"
            css={{ mb: "32px", maxWidth: "748px", textAlign: "center" }}
            className={classNames(
              css.library_text_mw,
              css.library_small_header
            )}
          >
            Simplify your development processes and get your app up and running
            faster with our all-in-one client library
          </Text>
          <Button>
            <Text type="paragraph2">Take me to the library</Text>
          </Button>
        </div>
        <div className={classNames(css.community, css.fold)}>
          <div className={css.inner_container}>
            <div className={css.section}>
              <Text
                type="heading3"
                css={{ mb: "8px" }}
                className={css.community_header}
              >
                Get connected
              </Text>
              <Text
                css={{ mb: "16px", fontSize: "16px", lineHeight: "1.5" }}
                className={css.community_small_header}
              >
                Discuss ideas and share solutions with developers worldwide.
              </Text>
              <Button variant="outlined2" className={css.community_join_btn}>
                <Text css={{ color: "$white", fontSize: "14px" }}>
                  Join our community
                </Text>
              </Button>
            </div>
            <div className={css.section}>
              <Text
                type="heading3"
                css={{ mb: "8px" }}
                className={css.community_header}
              >
                We’re here to help
              </Text>
              <Text
                css={{ mb: "16px", fontSize: "16px", lineHeight: "1.5" }}
                className={css.community_small_header}
              >
                Email us at{" "}
                <Link href="mailto:john@example.com">
                  api-support@deriv.com
                </Link>{" "}
                if you have any questions.
              </Text>
            </div>
          </div>
        </div>
        <footer className={css.footer}>
          <div className={css.inner_container}>
            © 2021 Deriv | All rights reserved
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Home;
