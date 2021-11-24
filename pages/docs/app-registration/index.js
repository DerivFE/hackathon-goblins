import React from "react";
import { useForm, Controller } from "react-hook-form";
import Layout from "components/layout/Layout";
import css from "./AppRegistration.module.css";
import { Box } from "components/Box";
import { Input } from "components/Input";
import DocWrapper from "components/tabs/DocWrapper";
import { Button } from "components/Button";
import { Checkbox, CheckboxItem } from "components/Checkbox";
import { styled } from "stitches.config";

const inputFields = [
  {
    label: "Name (Required)",
    placeholder_text: "Name (Required)",
    name: "name",
    required: true,
  },
  {
    label: "Redirect URL (Required)",
    placeholder_text: "Redirect URL (Required)",
    name: "redirectURL",
    required: true,
  },
  {
    label: "Verification URL",
    placeholder_text: "Verification URL",
    name: "verificationURL",
  },
  {
    label: "Homepage URL",
    placeholder_text: "Homepage URL",
    name: "homepageURL",
  },
  {
    label: "Github URL",
    placeholder_text: "Github URL",
    name: "githubURL",
  },
  {
    label: "Appstore URL",
    placeholder_text: "Appstore URL",
    name: "AppstoreURL",
  },
  {
    label: "Google Play URL",
    placeholder_text: "Google Play URL",
    name: "googlePlayURL",
  },
  {
    label: "Markup percentage",
    placeholder_text: "Markup percentage",
    name: "markupPercentage",
  },
];

const app_id = 1089;

const AppRegistration = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      redirectURL: "",
      verificationURL: "",
      homepageURL: "",
      githubURL: "",
      AppstoreURL: "",
      googlePlayURL: "",
      markupPercentage: "",
    },
  });

  const [authToken, setAuthToken] = React.useState("");

  const itemsRef = React.useRef([]);
  const ws = React.useRef(null);

  React.useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, inputFields.length);
  }, []);

  React.useEffect(() => {
    ws.current = new WebSocket(
      "wss://ws.binaryws.com/websockets/v3?app_id=" + app_id
    );
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");

    ws.current.onmessage = (e) => handleMessage(e);

    return () => {
      ws.current.close();
    };
  }, []);

  const handleAuth = (e) => {
    ws.current.send(JSON.stringify({ authorize: authToken || "" }));
  };

  const onSubmit = (data) => console.log(data);

  const handleMessage = (e) => {
    console.log(e.data);
  };

  return (
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
              <div
                className={css.cta_button}
                onClick={() =>
                  (window.location.href =
                    "https://app.deriv.com/account/api-token")
                }
              >
                Get your API token
              </div>
            </div>
            <div className={css.api_token_wrapper}>
              <Input
                label="API Token"
                placeholder_text="Api Token"
                maxWidth="600px"
                value={authToken}
                onChange={(e) => setAuthToken(e.target.value)}
              />
              <Button variant="primary" onClick={handleAuth}>
                Authenticate
              </Button>
            </div>
            <div className={css.horizontal_separator}></div>
            <div className={css.main_form}>
              <h2 className={css.form_header}>Register your app</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                {inputFields.map((inputField, index) => {
                  return (
                    <Controller
                      key={inputField.name}
                      name={inputField.name}
                      control={control}
                      render={({ field }) => (
                        <Input
                          formFieldProps={field}
                          ref={(el) => (itemsRef.current[index] = el)}
                          label={inputField.label}
                          placeholder_text={inputField.placeholder_text}
                          maxWidth="800px"
                          type="form"
                        />
                      )}
                    />
                  );
                })}
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
                  <Button type="submit" variant="primary">
                    Register
                  </Button>
                </div>
              </form>
            </div>
            {/* <div class="table-wrapper">
              <table
                class="flex-table"
                id="applications-table"
                style="display: none"
              >
                <thead>
                  <tr class="flex-tr">
                    <th class="flex-tr-child name">Name</th>
                    <th class="flex-tr-child app_id">Application ID</th>
                    <th class="flex-tr-child scopes">Scopes</th>
                    <th class="flex-tr-child redirect_url">Redirect URL</th>
                    <th colspan="2" class="flex-tr-child actions">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div> */}
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
};

export default AppRegistration;
