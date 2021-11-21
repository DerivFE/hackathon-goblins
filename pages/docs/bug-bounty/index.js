import Layout from "components/layout/Layout";
import css from "./BugBounty.module.css";
import { Box } from "components/Box";
import DocWrapper from "components/tabs/DocWrapper";

const BugBounty = () => (
  <Layout>
    <Box col>
      <DocWrapper value='/docs/bug-bounty'>
        <div className={css.page_content}>
          <h1 className={css.page_title}>Bug bounty</h1>
          <div className={css.text_block}>
            <h3 className={css.subtitle}>Want to help us enhance our security?</h3>
            <p>
              Test our products and services for security vulnerabilities and earn a
              monetary reward for any verifiable issues that you find, courtesy of
              our bug bounty programme.
            </p>
          </div>
          <div className={css.cta}>
            <div className={css.cta_grid}>
              <div className={css.cta_grid_box}>
                <h2>Explore our bounty programme</h2>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://hackerone.com/binary"
                >
                  <div className={css.cta_button}>Go to Hackerone</div>
                </a>
              </div>
              <div className={css.cta_grid_box}>
                <h2 className={css.margin_button_8}>Got questions?</h2>
                <p className={css.margin_button_16}>
                  Email us at
                  <a href="mailto:security@deriv.com"> security@deriv.com</a> for
                  more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DocWrapper>
    </Box>
  </Layout>
);

export default BugBounty;
