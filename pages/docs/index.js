import React from "react";
import { styled } from "stitches.config";
import Layout from "components/layout/Layout";
import { Text } from "components/Text";
import { Box } from "components/Box";
import { Link } from "components/Link/Link";
import DocWrapper from "components/tabs/DocWrapper";

const StyledLi = styled("li", {
  my: "16px",
});
const StyledUl = styled("ul", {
  paddingInlineStart: "20px",
});

const Docs = () => {
  return (
    <Layout>
      <Box col>
        <DocWrapper value='/docs'>
            <Text as="h1" type="heading2" css={{ mb: "40px", ta: "center", color: "#333" }}>
            Quickstart to Deriv API
            </Text>
            <Text as="p" type="paragraph1" css={{ mb: "16px" }}>
            On this page, you&apos;ll find code samples in various programming
            languages showing you how to work with the Deriv API to perform some
            of the most important operations.
            </Text>
            <Text as="p" type="paragraph1" css={{ mb: "16px" }}>
            You can find all of the other available calls in the{" "}
            <Link href="/api">API Playground</Link>.
            </Text>
            <Text as="h2" type="heading4" css={{ color: "#333", mb: "8px" }}>
            Before you begin
            </Text>
            <StyledUl>
            <StyledLi>
                Open a{" "}
                <Link
                href="https://app.deriv.com/account/api-token"
                target="_blank"
                >
                Deriv account
                </Link>{" "}
                (either a demo or real account).
            </StyledLi>
            <StyledLi>
                Create a new token using the{" "}
                <Link href="https://deriv.com/" target="_blank">
                admin scope
                </Link>
                .
            </StyledLi>
            <StyledLi>
                Register your app to receive your <strong style={{ color: "#333" }}>app_id</strong> or use
                <strong style={{ color: "#333" }}> app_id 1089</strong> to test Deriv API.
            </StyledLi>
            </StyledUl>
            <Text as="h2" type="heading4" css={{ mb: "16px", color: "#333" }}>
            Setting up your environment
            </Text>
            <Text as="p" type="paragraph1">
            Instructions for setting up your environment and running the examples
            in your desired programming language are given as comments in the code
            samples.
            </Text>
            <Text as="h2" type="heading3" css={{ my: "16px", color: "#333" }}>
            Buy contract
            </Text>
            <Text as="p" type="paragraph1">
            A contract is an agreement to buy or sell an asset at an agreed-upon
            price. This example shows you how to buy a contract using Deriv API.
            </Text>
            <Text as="h2" type="heading3" css={{ my: "16px", color: "#333" }}>
            Ticks
            </Text>
            <Text as="p" type="paragraph1">
            A tick is a measure of minimum upward or downward movement in the
            price of a trading commodity. This example shows you how to collect
            ticks for your trading app using Deriv’s API.
            </Text>
            <Text as="h2" type="heading3" css={{ my: "16px", color: "#333" }}>
            Account balance
            </Text>
            <Text as="p" type="paragraph1">
            This example shows you how to use the Deriv API to retrieve account
            balance information.
            </Text>
            <Text as="h2" type="heading3" css={{ my: "16px", color: "#333" }}>
            Proposal
            </Text>
            <Text as="p" type="paragraph1" css={{ mb: "16px" }}>
            This example is for getting a contract proposal. You’ll be able to get
            the price, payout and spot value for your contract.
            </Text>
            <Text as="p" type="paragraph1" css={{ mb: "16px" }}>
            To keep this connection alive in case of inactivity timeouts, see the
            example for <Link href="/docs/#keep-alive">Keep alive</Link>.
            </Text>
            <Text as="h2" type="heading3" css={{ my: "16px", color: "#333" }}>
            Keep alive
            </Text>
            <Text as="p" type="paragraph1" css={{ mb: "16px" }}>
            In this example you’ll see how to keep a connection alive when getting
            contract proposals via the Deriv API. This example keeps the
            connection alive by sending a ping every 30 seconds.
            </Text>
        </DocWrapper>
      </Box>
    </Layout>
  );
};

export default Docs;
