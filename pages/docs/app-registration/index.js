import Layout from "components/layout/Layout";
import css from "./AppRegistration.module.css";
import { Box } from "components/Box";
import { BUtton } from "components/Button";
import { Input } from "components/Input";
import DocWrapper from "components/tabs/DocWrapper";
import { Button } from "components/Button";

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
          <div className={css.api_token_wrapper}>
            <Input
              label="API Token"
              placeholder_text="Api Token"
              maxWidth="600px"
            />
            <Button variant="primary">Authenticate</Button>
          </div>
          <div className={css.horizontal_separator}></div>
        </div>
      </DocWrapper>
    </Box>
  </Layout>
);

export default AppRegistration;
