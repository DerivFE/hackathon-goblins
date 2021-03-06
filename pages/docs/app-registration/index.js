import React from "react";
import { useForm, Controller } from "react-hook-form";
import Layout from "components/Layout/Layout";
import css from "./AppRegistration.module.css";
import { Box } from "components/Box";
import { Input } from "components/Input";
import DocWrapper from "components/tabs/DocWrapper";
import { Button } from "components/Button";
import { Checkbox } from "components/Checkbox";
import { Table } from "components/Table";
import { PlaygroundCalls } from "pages/playground";

import inputFields from "../../../src/config/inputFields";

const app_id = 1089;

const AppRegistration = () => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: "",
      redirect_uri: "",
      verification_uri: "",
      homepage: "",
      github: "",
      appstore: "",
      googleplay: "",
      app_markup_percentage: "",
    },
  });

  const [authToken, setAuthToken] = React.useState("");
  const [tableData, setTableData] = React.useState([]);
  const [updatedAppID, setUpdatedAppID] = React.useState(null);
  const [response_list, setResponseList] = React.useState([]);

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

  const onSubmit = (data) => {
    const scopeList = Object.keys(data).filter((el) => {
      return data[el] === true;
    });

    ["read", "trade", "payments", "trading_information", "admin"].forEach(
      (el) => delete data[el]
    );
    const appData = {
      scopes: scopeList,
    };

    Object.keys(data).forEach((el) => {
      if (data[el]) appData[el] = data[el];
    });
    if (updatedAppID == null) {
      ws.current.send(JSON.stringify({ app_register: 1, ...appData }));
    } else {
      ws.current.send(JSON.stringify({ app_update: updatedAppID, ...appData }));
      setUpdatedAppID(null);
    }
  };

  const onUpdate = (index) => {
    const app = tableData[index];
    setUpdatedAppID(app.app_id);
    inputFields.forEach((el) => {
      setValue(el.name, app[el.name]);
    });
  };

  const onDelete = (index) => {
    const app = tableData[index];
    ws.current.send(JSON.stringify({ app_delete: app.app_id }));
  };

  const onError = (errorList, e) => {
    const firsError = Object.keys(errorList)[0];
    alert(`${firsError}: invalid input`);
  };

  const handleMessage = (e) => {
    const response = JSON.parse(e.data);

    if (response.error) {
      alert(response.error.message);
    } else {
      if (
        response.authorize ||
        response.app_register ||
        response.app_delete ||
        response.app_update
      ) {
        ws.current.send(JSON.stringify({ app_list: 1 }));
      } else if (response.app_list) {
        setTableData(response.app_list);
      }
    }

    setResponseList(response_list.push(response));
    console.log(response_list);
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
              <form onSubmit={handleSubmit(onSubmit, onError)}>
                {inputFields.map((inputField, index) => {
                  return (
                    <Controller
                      key={inputField.name}
                      name={inputField.name}
                      control={control}
                      rules={{
                        required: inputField.validationRules.required,
                        validate: (value) => {
                          return value
                            ? inputField.validationRules.regex.test(value) ||
                                "Invalid input"
                            : true;
                        },
                      }}
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
                <Controller
                  name="read"
                  control={control}
                  render={({ field }) => (
                    <Checkbox formFields={field}>
                      Read: View account activity
                    </Checkbox>
                  )}
                />
                <Controller
                  name="trade"
                  control={control}
                  render={({ field }) => (
                    <Checkbox formFields={field}>
                      Trade: Buy and sell contracts
                    </Checkbox>
                  )}
                />
                <Controller
                  name="trading_information"
                  control={control}
                  render={({ field }) => (
                    <Checkbox formFields={field}>
                      Trading Information: View trading and balance information
                    </Checkbox>
                  )}
                />
                <Controller
                  name="payments"
                  control={control}
                  render={({ field }) => (
                    <Checkbox formFields={field}>
                      Payments: Cashier (Deposit, Withdraw)
                    </Checkbox>
                  )}
                />
                <Controller
                  name="admin"
                  control={control}
                  render={({ field }) => (
                    <Checkbox formFields={field}>
                      Admin: API token management, application management
                    </Checkbox>
                  )}
                />
                <div className={css.button_wrapper}>
                  <Button type="submit" variant="primary">
                    {updatedAppID == null ? "Register" : "Update"}
                  </Button>
                </div>
              </form>
            </div>
            {tableData.length > 0 && (
              <Table data={tableData} onUpdate={onUpdate} onDelete={onDelete} />
            )}
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
          {response_list && response_list.length > 0 && (
            <PlaygroundCalls apiMessages={response_list} />
          )}
        </DocWrapper>
      </Box>
    </Layout>
  );
};

export default AppRegistration;
