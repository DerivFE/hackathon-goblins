import React from "react";
import Layout from "components/layout/Layout";
import css from "./AppRegistration.module.css";
import { Box } from "components/Box";
import { Input } from "components/Input";
import DocWrapper from "components/tabs/DocWrapper";
import { Button } from "components/Button";
import { Checkbox, CheckboxItem } from "components/Checkbox";
import { styled } from "stitches.config";

// const FormInput = styled(Input, {
//   marginBottom: "100px",
// });

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
          <div className={css.main_form}>
            <h2 className={css.form_header}>Register your app</h2>
            <Input
              label="Name (Required)"
              placeholder_text="Name (Required)"
              maxWidth="800px"
              type="form"
            />
            <Input
              label="Redirect URL (Required)"
              placeholder_text="Redirect URL (Required)"
              maxWidth="800px"
              type="form"
            />
            <Input
              className={css.form_input}
              label="Verification URL"
              placeholder_text="Verification URL"
              maxWidth="800px"
              type="form"
            />
            <Input
              className={css.form_input}
              label="Homepage URL"
              placeholder_text="Homepage URL"
              maxWidth="800px"
              type="form"
            />
            <Input
              className={css.form_input}
              label="Github URL"
              placeholder_text="Github URL"
              maxWidth="800px"
              type="form"
            />
            <Input
              className={css.form_input}
              label="Appstore URL"
              placeholder_text="Appstore URL"
              maxWidth="800px"
              type="form"
            />
            <Input
              className={css.form_input}
              label="Google Play URL"
              placeholder_text="Google Play URL"
              maxWidth="800px"
              type="form"
            />
            <Input
              className={css.form_input}
              label="Markup percentage"
              placeholder_text="Markup percentage"
              maxWidth="800px"
              type="form"
            />
            <Checkbox>Read: View account activity</Checkbox>
            <Checkbox>Trade: Buy and sell contracts</Checkbox>
            <Checkbox>
              Trading Information: View trading and balance information
            </Checkbox>
            <Checkbox>Payments: Cashier (Deposit, Withdraw)</Checkbox>
            <Checkbox>
              Admin: API token management, application management
            </Checkbox>
            <div className={css.button_wrapper}>
              <Button variant="primary">Register</Button>
            </div>
          </div>
          <div className={css.horizontal_separator}></div>
          <div className={css.request_json}>
            <h3>Request JSON</h3>
            <textarea
              id={css.playground_request}
              placeholder="Request JSON"
            ></textarea>
            <div className={css.json_buttons}>
              <Button variant="secondary">Send Request</Button>
              <Button variant="primary">Reset Connection</Button>
            </div>
          </div>
        </div>
      </DocWrapper>
    </Box>
  </Layout>
);

export default AppRegistration;
