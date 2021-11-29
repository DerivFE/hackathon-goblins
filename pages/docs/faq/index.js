import React from "react";
import Layout from "components/Layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/Accordion";
import { Text } from "components/Text";
import { Box } from "components/Box";
import { Link } from "components/Link/Link";
import DocWrapper from "components/tabs/DocWrapper";

const FAQ = () => {
  return (
    <Layout>
      <Box col>
        <DocWrapper value="/docs/faq">
          <Text as="h1" type="heading2" css={{ mb: "40px", ta: "center" }}>
            FAQ
          </Text>
          <Accordion type="multiple" collapsible="true">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is the easiest way to get started with Deriv API?
              </AccordionTrigger>
              <AccordionContent>
                View our <Link href="/docs">code samples</Link>. You can use
                these code snippets in your app to open a connection to our
                WebSocket API service. Explore our{" "}
                <Link href="/playground">API playground</Link> for the method
                calls you need for your app.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                How do I build my own front-end app?
              </AccordionTrigger>
              <AccordionContent>
                Simply copy our open-source code and adapt it for your needs.
                Follow these steps to get started:
                <br />
                1. Open a{" "}
                <Link href="https://github.com" external>
                  GitHub
                </Link>{" "}
                account.
                <br />
                2. Download the{" "}
                <Link href="https://desktop.github.com" external>
                  GitHub Desktop application
                </Link>
                .
                <br />
                3. Fork any of our{" "}
                <Link
                  href="https://github.com/binary-com/?q=&type=&language=javascript&sort="
                  external
                >
                  open-source front-end repositories
                </Link>
                .
                <br />
                4. Make the code changes in your fork.
                <br />
                5. Publish your fork using the{" "}
                <Link href="https://pages.github.com/" external>
                  GitHub Pages
                </Link>{" "}
                facility.
                <br />
                6. For SSL and website acceleration for your app, open a free
                account on{" "}
                <Link href="https://www.cloudflare.com/" external>
                  Cloudflare
                </Link>
                .
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can someone build an app for me?
              </AccordionTrigger>
              <AccordionContent>
                Sure! You may hire developers who are familiar with JavaScript
                and WebSocket technology to build your app for you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Will I earn commissions if a client signed up with Deriv using
                my app?
              </AccordionTrigger>
              <AccordionContent>
                Yes! Follow these steps:
                <br />
                1. Sign up as an{" "}
                <Link href="https://deriv.com/partners/affiliate-ib/" external>
                  affiliate
                </Link>
                .
                <br />
                2. Insert your affiliate token into the{" "}
                <Link href="https://deriv.com/partners/affiliate-ib/" external>
                  <code>new_account_virtual</code>
                </Link>{" "}
                call in your app.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How else can I earn?</AccordionTrigger>
              <AccordionContent>
                Here are some ways:
                <br />
                <ol>
                  <li>
                    Sign up as a{" "}
                    <Link
                      href="https://deriv.com/partners/payment-agent/"
                      external
                    >
                      payment agent
                    </Link>{" "}
                    to process local payments for our clients in your country.
                    You may automate your payment agent facility using the{" "}
                    <Link
                      href="https://deriv.com/partners/affiliate-ib/"
                      external
                    >
                      <code>paymentagent_transfer</code>{" "}
                    </Link>
                    API call.
                  </li>
                  <li>
                    If you are prepared to offer higher contract prices than
                    ours, you may add a <strong>markup percentage</strong> when
                    you{" "}
                    <Link
                      href="https://api.deriv.com/docs/app-registration"
                      external
                    >
                      register
                    </Link>{" "}
                    your app. This is a percentage of contract payouts, and it’s
                    added to all contract prices in your app. At every
                    month-end, the aggregate markup is paid to you. Sign up as
                    our affiliate and contact your Affiliate Manager to learn
                    more.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                What does it mean if a schema property has the ‘sensitive’
                attribute?
              </AccordionTrigger>
              <AccordionContent>
                This means we will treat the value of this property as
                confidential, and will never return it in any API response. It
                is used for passwords and tokens.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>What is copy trading?</AccordionTrigger>
              <AccordionContent>
                Copy trading allows a client (the Copier) to automatically copy
                the trades of another client (the Trader).
                <br />
                To allow others to copy your trades, set the ‘allow_copiers’
                setting via the{" "}
                <Link
                  href="https://api.deriv.com/playground/#set_settings"
                  external
                >
                  set settings
                </Link>{" "}
                call.
                <br />
                The Trader may create a read-only API token and provide it to
                the Copier.
                <br />
                Enabling ‘allow_copiers’ will also make the copytrading
                statistics call available. The statistics call provides the
                information about an account. This is so that potential copiers
                have an idea about the trader’s past performance.
                <br />
                To start copying, use the{" "}
                <Link
                  href="https://api.deriv.com/playground/#copy_start"
                  external
                >
                  copy start
                </Link>{" "}
                call. To stop copying, use{" "}
                <Link
                  href="https://api.deriv.com/playground/#copy_stop"
                  external
                >
                  copy stop
                </Link>
                .
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>
                How do I check for server status updates?
              </AccordionTrigger>
              <AccordionContent>
                Use the{" "}
                <Link href="/playground/#website_status">website status</Link>{" "}
                call to check whether the website is online or not.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>
                How do I subscribe to server status notifications?
              </AccordionTrigger>
              <AccordionContent>
                This JavaScript code opens a WebSocket and makes a subscription
                for server status notifications. When a message is received, it
                sends the website status message, if available:
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>
                How do I subscribe to server status notifications?
              </AccordionTrigger>
              <AccordionContent>
                Visit our{" "}
                <Link href="https://binary.vanillacommunity.com/" external>
                  dev forum
                </Link>{" "}
                or email{" "}
                <a
                  href="mailto:api-support@deriv.com"
                  style={{ color: "var(--colors-coral)" }}
                >
                  api-support@deriv.com
                </a>
                .
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </DocWrapper>
      </Box>
    </Layout>
  );
};

export default FAQ;
