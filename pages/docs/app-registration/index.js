import Layout from "components/layout/Layout";
import css from "./AppRegistration.module.css";
import { Box } from "components/Box";
import DocWrapper from "components/tabs/DocWrapper";

const AppRegistration = () => (
  <Layout>
    <Box col>
      <DocWrapper value="/docs/app-registration">
        <div className={css.page_content}>
          <h1 className={css.page_title}>App registration</h1>
          <h3 className={css.subtitle}>
            Authenticate your API token before using it in your app.
          </h3>
          <div className={css.cta}>
            <h3>Looking for your API token?</h3>
            <div className={css.cta_button}>Get your API token</div>
          </div>
        </div>
      </DocWrapper>
    </Box>
  </Layout>
);

export default AppRegistration;
