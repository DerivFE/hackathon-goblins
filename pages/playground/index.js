import React from "react";
import Highlight from "react-highlight";
import Layout from "components/Layout/Layout";
import { Box } from "components/Box";
import Autocomplete from "components/Autocomplete";
import css from "./Playground.module.css";
import { Button } from "components/Button";
import socket_base from "src/common/socket_base";
import { getJsonPaths } from "./helper";
import SchemaBlock from "./schema-block";

const apiCalls = [
  { name: "active_symbols", title: "Active Symbols" },
  { name: "api_token", title: "API Token" },
  { name: "app_delete", title: "Application: Delete" },
  { name: "app_get", title: "Application: Get Details" },
  { name: "app_list", title: "Application: List" },
  { name: "app_markup_details", title: "Application: Markup Details" },
  { name: "app_register", title: "Application: Register" },
  { name: "app_update", title: "Application: Update" },
  { name: "asset_index", title: "Asset Index" },
  { name: "authorize", title: "Authorize" },
  { name: "balance", title: "Balance" },
  { name: "buy", title: "Buy Contract" },
  {
    name: "buy_contract_for_multiple_accounts",
    title: "Buy Contract for Multiple Accounts",
  },
  { name: "cancel", title: "Cancel a Contract" },
  { name: "cashier", title: "Cashier Information" },
  { name: "contract_update", title: "Update Contract" },
  { name: "contract_update_history", title: "Update Contract History" },
  { name: "contracts_for", title: "Contracts For Symbol" },
  { name: "copy_start", title: "Copy Trading: Start" },
  { name: "copy_stop", title: "Copy Trading: Stop" },
  { name: "copytrading_list", title: "Copy Trading: List" },
  { name: "copytrading_statistics", title: "Copy Trading: Statistics" },
  { name: "document_upload", title: "Document Upload" },
  { name: "economic_calendar", title: "Economic Calendar" },
  { name: "exchange_rates", title: "Exchange Rates" },
  { name: "forget", title: "Forget" },
  { name: "forget_all", title: "Forget All" },
  { name: "get_account_status", title: "Account Status" },
  { name: "get_financial_assessment", title: "Get Financial Assessment" },
  { name: "get_limits", title: "Account Limits" },
  { name: "get_self_exclusion", title: "Get Self-Exclusion" },
  { name: "get_settings", title: "Get Account Settings" },
  {
    name: "identity_verification_document_add",
    title: "Identity Verification Add Document",
  },
  { name: "landing_company", title: "Landing Company" },
  { name: "landing_company_details", title: "Landing Company Details" },
  { name: "login_history", title: "Login History" },
  { name: "logout", title: "Log Out" },
  { name: "mt5_deposit", title: "MT5: Deposit" },
  { name: "mt5_get_settings", title: "MT5: Get Setting" },
  { name: "mt5_login_list", title: "MT5: Accounts List" },
  { name: "mt5_new_account", title: "MT5: New Account" },
  { name: "mt5_password_change", title: "MT5: Password Change" },
  { name: "mt5_password_check", title: "MT5: Password Check" },
  { name: "mt5_password_reset", title: "MT5: Password Reset" },
  { name: "mt5_withdrawal", title: "MT5: Withdrawal" },
  {
    name: "new_account_maltainvest",
    title: "New Real-Money Account: Deriv Investment (Europe) Ltd",
  },
  {
    name: "new_account_real",
    title: "New Real-Money Account: Default Landing Company",
  },
  { name: "new_account_virtual", title: "New Virtual-Money Account" },
  { name: "oauth_apps", title: "OAuth Applications" },
  { name: "p2p_advert_create", title: "P2P Advert Create" },
  { name: "p2p_advert_info", title: "P2P Advert Information" },
  { name: "p2p_advert_list", title: "P2P Advert List" },
  { name: "p2p_advert_update", title: "P2P Advert Update" },
  { name: "p2p_advertiser_adverts", title: "P2P Advertiser Adverts" },
  { name: "p2p_advertiser_create", title: "P2P Advertiser Create" },
  { name: "p2p_advertiser_info", title: "P2P Advertiser Information" },
  { name: "p2p_advertiser_relations", title: "P2P Advertiser Relations" },
  { name: "p2p_advertiser_update", title: "P2P Advertiser Update" },
  { name: "p2p_chat_create", title: "P2P Chat Create" },
  { name: "p2p_order_cancel", title: "P2P Order Cancel" },
  { name: "p2p_order_confirm", title: "P2P Order Confirm" },
  { name: "p2p_order_create", title: "P2P Order Create" },
  { name: "p2p_order_info", title: "P2P Order Information" },
  { name: "p2p_order_list", title: "P2P Order List" },
  { name: "payment_methods", title: "Payment Methods" },
  { name: "paymentagent_create", title: "Payment agent create" },
  { name: "paymentagent_details", title: "Payment agent details" },
  { name: "paymentagent_list", title: "Payment Agent: List" },
  { name: "paymentagent_transfer", title: "Payment Agent: Transfer" },
  { name: "paymentagent_withdraw", title: "Payment Agent: Withdraw" },
  { name: "payout_currencies", title: "Payout Currencies" },
  { name: "ping", title: "Ping" },
  { name: "portfolio", title: "Portfolio" },
  { name: "profit_table", title: "Profit Table" },
  { name: "proposal", title: "Price Proposal" },
  { name: "proposal_open_contract", title: "Price Proposal: Open Contracts" },
  { name: "reality_check", title: "Reality Check" },
  { name: "residence_list", title: "Countries List" },
  { name: "revoke_oauth_app", title: "Revoke Oauth Application" },
  { name: "sell", title: "Sell Contract" },
  {
    name: "sell_contract_for_multiple_accounts",
    title: "Sell Contracts: Multiple Accounts",
  },
  { name: "sell_expired", title: "Sell Expired Contracts" },
  { name: "set_account_currency", title: "Set Account Currency" },
  { name: "set_financial_assessment", title: "Set Financial Assessment" },
  { name: "set_self_exclusion", title: "Set Self-Exclusion" },
  { name: "set_settings", title: "Set Account Settings" },
  { name: "statement", title: "Statement" },
  { name: "states_list", title: "States List" },
  { name: "ticks", title: "Ticks Stream" },
  { name: "ticks_history", title: "Ticks History" },
  { name: "time", title: "Server Time" },
  { name: "tnc_approval", title: "Terms and Conditions Approval" },
  { name: "topup_virtual", title: "Top Up Virtual-Money Account" },
  { name: "trading_durations", title: "Trading Durations" },
  {
    name: "trading_platform_investor_password_reset",
    title: "Trading Platform: Investor Password Reset",
  },
  {
    name: "trading_platform_password_reset",
    title: "Trading Platform: Password Reset",
  },
  { name: "trading_servers", title: "Server list" },
  { name: "trading_times", title: "Trading Times" },
  { name: "transaction", title: "Transactions Stream" },
  { name: "transfer_between_accounts", title: "Transfer Between Accounts" },
  { name: "verify_email", title: "Verify Email" },
  { name: "website_status", title: "Server Status" },
];

const PlaygroundCalls = ({ apiMessages }) => {
  return (
    <Box col className={css.playground_calls}>
      {apiMessages.map((message, index) => (
        <Box key={index} className={css.code_block_wrapper}>
          <Box className={css.code_block}>
            <Highlight>{message}</Highlight>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const Playground = () => {
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [apiToken, setApiToken] = React.useState("");
  const [request, setRequest] = React.useState("");
  const [deriv_api, setDerivApi] = React.useState();
  const [apiMessages, setApiMessages] = React.useState([]);
  const [requestSchema, setRequestSchema] = React.useState("");
  const [responseSchema, setResponseSchema] = React.useState("");

  React.useEffect(() => {
    setDerivApi(socket_base.get());
  }, []);

  const isRequestValid = () => {
    try {
      JSON.parse(request);
      return true;
    } catch (e) {
      window.alert("Invalid JSON");
    }
    return false;
  };

  const pushToApiMessages = (message) => {
    apiMessages.push(message);
    setApiMessages([...apiMessages]);
  };

  const sendRequest = () => {
    if (isRequestValid()) {
      const request_obj = JSON.parse(request);
      deriv_api.send(request_obj).then((response) => {
        pushToApiMessages(JSON.stringify(response, null, 2));
      });
      pushToApiMessages(JSON.stringify(request_obj, null, 2));
    }
  };

  const onSelectAPI = async (item) => {
    setSelectedItem(item);
    if (item?.name) {
      const paths = getJsonPaths(item?.name);
      const example = await fetch(paths.example);
      setRequest(JSON.stringify(await example.json(), null, 2));
      const send = await fetch(paths.send);
      setRequestSchema(await send.json());
      const receive = await fetch(paths.receive);
      setResponseSchema(await receive.json());
    }
  };

  return (
    <Layout className={css.layout}>
      <Box col>
        <h1 className={css.page_title}>API playground</h1>
        <Box jc="center">
          <Box style={{ width: "90%" }}>
            <Box col>
              <Box col>
                <Autocomplete
                  label={"API Calls"}
                  getItemKey={(item) => item?.name || ""}
                  getItemValue={(item) => item?.title || ""}
                  items={apiCalls}
                  renderItem={(item) => (
                    <React.Fragment>{item.title}</React.Fragment>
                  )}
                  selectedItem={selectedItem}
                  onSelect={onSelectAPI}
                />
                <Box className={css.api_token_wrapper}>
                  <Box className={css.api_token} ai="center">
                    <input
                      className={css.api_token_input}
                      value={apiToken}
                      onChange={(e) => setApiToken(e.target.value)}
                      placeholder="API Token"
                    />
                    <Button
                      style={{
                        padding: "10px 16px",
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        fontSize: "14px",
                      }}
                      variant="primary"
                    >
                      Authenticate
                    </Button>
                  </Box>
                  <Box col className={css.get_api_token} ai="center">
                    <label
                      style={{
                        textAlign: "center",
                        marginBottom: "16px",
                        color: "#c2c2c2",
                        fontWeight: "bold",
                      }}
                    >
                      Looking for your API token?
                    </label>
                    <Button
                      style={{
                        fontSize: "14px",
                        color: "white",
                        border: "solid 2px #6e6e6e",
                        boxShadow: "none",
                      }}
                      variant="secondary"
                    >
                      Get your API token
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Box className={css.request_wrapper} col>
                <textarea
                  className={css.request_input}
                  value={request}
                  onChange={(e) => setRequest(e.target.value)}
                />
                <Box jc="center" className={css.request_input_wrapper}>
                  <Button
                    style={{
                      fontSize: "14px",
                      color: "white",
                      marginRight: "8px",
                      boxShadow: "none",
                      border: "solid 2px #6e6e6e",
                    }}
                    variant="secondary"
                  >
                    Reset Connection
                  </Button>
                  <Button
                    style={{ fontSize: "14px", color: "white" }}
                    variant="primary"
                    onClick={sendRequest}
                  >
                    Send Request
                  </Button>
                </Box>
              </Box>
              <Box col>
                <PlaygroundCalls apiMessages={apiMessages} />
              </Box>
            </Box>
            <Box col className={css.schema_blocks}>
              {requestSchema && <SchemaBlock schema={requestSchema} />}
              {responseSchema && <SchemaBlock schema={responseSchema} />}
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Playground;
