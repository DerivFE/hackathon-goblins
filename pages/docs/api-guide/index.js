import React from "react";
import { styled } from "stitches.config";
import Layout from "components/Layout/Layout";
import { Text } from "components/Text";
import { Box } from "components/Box";
import { CopyCard } from "components/CopyCard";
import { Link } from "components/Link/Link";
import DocWrapper from "components/tabs/DocWrapper";

const StyledOl = styled("ol", {
  paddingInlineStart: "20px",
  margin: "0",
});
const StyledUl = styled("ul", {
  paddingInlineStart: "20px",
  margin: "0",
});
const StyledLi = styled("li", {
  my: "16px",
});

const StyledCode = styled("code", {
  fontSize: "16px",
  borderRadius: "4px",
  padding: "2px 4px",
  border: "1px solid #eaeced",
});

const APIGuide = () => {
  return (
    <Layout>
      <Box col>
        <DocWrapper value="/docs/api-guide">
          <Box col>
            <Text as="h1" type="heading2" css={{ mb: "40px", ta: "center" }}>
              API guide
            </Text>
            <Text as="h2" type="heading3" css={{ mb: "16px" }}>
              App registration
            </Text>
            <Text as="h3" type="subtitle1">
              Register your app before using our API. Here’s how:
            </Text>
            <StyledOl>
              <StyledLi>
                <Link href="https://deriv.com/" target="_blank">
                  Open a Deriv account
                </Link>{" "}
                (either a demo or real account).
              </StyledLi>
              <StyledLi>
                <Link
                  href="https://app.deriv.com/account/api-token"
                  target="_blank"
                >
                  Create a new token
                </Link>{" "}
                using the <strong>admin</strong> scope.
              </StyledLi>
              <StyledLi>
                Register your app to obtain your
                <Link
                  href="https://api.deriv.com/docs/app-registration/"
                  target="_blank"
                >
                  <StyledCode>app_id</StyledCode>
                </Link>{" "}
                .
              </StyledLi>
            </StyledOl>

            <Text as="h2" type="heading3" css={{ mb: "16px", mt: "40px" }}>
              Client authentication
            </Text>
            <Text as="p" type="paragraph1" css={{ mb: "16px" }}>
              Some API calls require client authentication (e.g.
              <Link href="/playground/#portfolio">
                <StyledCode>portfolio</StyledCode>
              </Link>
              ) while others don’t (e.g.{" "}
              <Link href="/playground/#portfolio">
                <StyledCode>ticks</StyledCode>
              </Link>
              ).
            </Text>
            <Text as="h3" type="subtitle1">
              There are 2 ways to authenticate clients:
            </Text>

            <StyledOl>
              <StyledLi>
                <strong>
                  Client authentication by app-specific API tokens
                </strong>
              </StyledLi>
              <p>
                Clients can generate API tokens by logging to their Deriv
                account and going to <strong>Security & Limits</strong> &gt;{" "}
                <Link href="/playground/#portfolio">
                  <StyledCode>API token</StyledCode>.
                </Link>
              </p>
              <StyledLi>
                <strong>Client authentication by OAuth</strong>
              </StyledLi>
              <p>Send clients to:</p>
              <CopyCard>
                https://oauth.binary.com/oauth2/authorize?app_id=[..insert
                app_id..]
              </CopyCard>
              <p>
                Our system will authenticate the client and send them to the
                redirect URL you gave us during app registration. A valid{" "}
                <Link href="/playground/#api_token">
                  <StyledCode>token</StyledCode>
                </Link>{" "}
                will be returned in the token parameter of the URL.
              </p>
              <p>
                To display the authentication form in another language, add the
                language code to the OAuth URL as follows:
              </p>
              <CopyCard>
                https://oauth.binary.com/oauth2/authorize?app_id=[..insert
                app_id..]&l=ZH_CN
              </CopyCard>
              <p>
                Complete the authentication by calling{" "}
                <Link href="/playground/#authorize">authorize</Link> using
                clients’ API token.
              </p>
            </StyledOl>

            <Text as="h2" type="heading3" css={{ mb: "16px", mt: "40px" }}>
              Token scopes
            </Text>
            <Text as="h3" type="subtitle1">
              Each token can have one or more of these scopes:
            </Text>
            <StyledUl>
              <StyledLi>read - for calls that only read client’s data</StyledLi>
              <StyledLi>trade - for calls that can create trades</StyledLi>
              <StyledLi>
                trading_information - for calls that can read information on
                client’s trades
              </StyledLi>
              <StyledLi>
                payments - for calls that can access the cashier (for deposits
                and withdrawals)
              </StyledLi>
              <StyledLi>
                admin - for calls that can change client’s settings
              </StyledLi>
            </StyledUl>
            <p>
              Explore our <Link href="/playground">API playground</Link> to
              learn about the required scope for all our API calls.
            </p>

            <Text as="h2" type="heading3" css={{ mb: "16px", mt: "40px" }}>
              Opening Deriv accounts
            </Text>
            <p>
              To open accounts via our API, you&apos;ll first need to verify the
              client&apos;s email address using{" "}
              <Link href="/playground/#verify_email">
                <StyledCode>verify_email</StyledCode>
              </Link>{" "}
              to
            </p>
            <p>
              To open a virtual account, use{" "}
              <Link href="/playground/#new_virtual_account">
                <StyledCode>new_virtual_account</StyledCode>
              </Link>{" "}
              and then{" "}
              <Link href="/playground/#topup_virtual">
                <StyledCode>topup_virtual</StyledCode>
              </Link>{" "}
              to top-up the new account with virtual money.
            </p>
            <p>
              To open a real account, use{" "}
              <Link href="/playground/#residence_list">
                <StyledCode>residence_list</StyledCode>
              </Link>{" "}
              and{" "}
              <Link href="/playground/#states_list">
                <StyledCode>states_list</StyledCode>
              </Link>{" "}
              to get the information needed for the account opening form. Once
              you have all the necessary information, use{" "}
              <Link href="/playground/#new_account_real">
                <StyledCode>new_account_real</StyledCode>
              </Link>
              .
            </p>
            <p>
              If you are a registered affiliate, remember to include the{" "}
              <strong>affiliate_token</strong> parameter. You’ll earn commission
              for every new account.
            </p>
            <p>
              Based on the client’s country of residence, use landing_company to
              determine which landing company the account will be opened with.
              Use{" "}
              <Link href="/playground/#landing_company_details">
                <StyledCode>landing_company_details</StyledCode>
              </Link>{" "}
              to get information about the landing company.
            </p>

            <Text as="h2" type="heading3" css={{ mb: "16px", mt: "40px" }}>
              Accounting functionalites
            </Text>
            <p>
              You may get a client&apos;s{" "}
              <Link href="/playground/#portfolio" target="_blank">
                <StyledCode>portfolio</StyledCode>
              </Link>
              ,{" "}
              <Link href="/playground/#statement" target="_blank">
                <StyledCode>statement</StyledCode>
              </Link>
              ,{" "}
              <Link href="/playground/#profit_table" target="_blank">
                <StyledCode>profit_table</StyledCode>
              </Link>
              , and their account{" "}
              <Link href="/playground/#balance" target="_blank">
                <StyledCode>balance</StyledCode>
              </Link>
              . You may also sell an expired contract with{" "}
              <Link href="/playground/#sell_expired" target="_blank">
                <StyledCode>sell_expired</StyledCode>
              </Link>
              , or generate a real time stream of{" "}
              <Link href="/playground/#sell_expired" target="_blank">
                <StyledCode>transactions</StyledCode>
              </Link>
              .
            </p>

            <Text as="h2" type="heading3" css={{ mb: "16px", mt: "40px" }}>
              Option prices
            </Text>
            <StyledUl>
              <StyledLi>
                To price an option, call
                <Link href="/playground/#proposal" target="_blank">
                  <StyledCode>proposal</StyledCode>
                </Link>
                .
              </StyledLi>
              <StyledLi>
                To price options that are open in a client&apos;s portfolio, use{" "}
                <Link href="/playground/#paymentagent_transfer" target="_blank">
                  <StyledCode>paymentagent_transfer</StyledCode>
                </Link>
                .
              </StyledLi>
            </StyledUl>

            <Text as="h2" type="heading3" css={{ mb: "16px", mt: "40px" }}>
              Payment agents
            </Text>
            <StyledUl>
              <StyledLi>
                Clients may withdraw via a payment agent using{" "}
                <Link href="/playground/#paymentagent_withdraw" target="_blank">
                  <StyledCode>paymentagent_withdraw</StyledCode>
                </Link>
                .
              </StyledLi>
              <StyledLi>
                Payment agents may credit clients’ accounts using
                <Link href="/playground/#paymentagent_transfer" target="_blank">
                  <StyledCode>paymentagent_transfer</StyledCode>
                </Link>
                .
              </StyledLi>
            </StyledUl>

            <Text as="h2" type="heading3" css={{ mb: "16px", mt: "40px" }}>
              Utility calls
            </Text>
            <StyledUl>
              <StyledLi>
                To keep the connection alive, use{" "}
                <Link href="/playground/#paymentagent_withdraw" target="_blank">
                  <StyledCode>ping</StyledCode>
                </Link>
                .
              </StyledLi>
              <StyledLi>
                Get the server time with{" "}
                <Link href="/playground/#time" target="_blank">
                  <StyledCode>time</StyledCode>
                </Link>
                .
              </StyledLi>
              <StyledLi>
                Get the status of the website with{" "}
                <Link href="/playground/#website_status" target="_blank">
                  <StyledCode>website_status</StyledCode>
                </Link>
                .
              </StyledLi>
            </StyledUl>

            <Text as="h2" type="heading3" css={{ mb: "16px", mt: "40px" }}>
              Streams
            </Text>
            <p>
              Some functions generate streams of data (e.g.{" "}
              <Link href="/playground/#website_status" target="_blank">
                <StyledCode>ticks</StyledCode>
              </Link>
              ) while others don’t. Use{" "}
              <Link href="/playground/#website_status" target="_blank">
                <StyledCode>forget</StyledCode>
              </Link>{" "}
              to cancel an outstanding stream.
            </p>
          </Box>
        </DocWrapper>
      </Box>
    </Layout>
  );
};

export default APIGuide;
