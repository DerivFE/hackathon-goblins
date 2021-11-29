import React from "react";
import Layout from "components/Layout/Layout";
import { Text } from "components/Text";
import { Box } from "components/Box";
import { Link } from "components/Link/Link";
import DocWrapper from "components/tabs/DocWrapper";

const JsonSchemas = () => {
  return (
    <Layout>
      <Box col>
        <DocWrapper value="/docs/json-schemas">
          <Box col>
            <Text as="h1" type="heading2" css={{ mb: "40px", ta: "center" }}>
              JSON Schemas
            </Text>
            <Text as="p" type="paragraph1" css={{ mb: "16px" }}>
              Our API is defined by{" "}
              <Link
                href="https://github.com/binary-com/websockets/tree/gh-pages/config"
                external
              >
                JSON Schemas
              </Link>
              . Get updates by looking for &quot;JSON Schema Update&quot; in the{" "}
              <Link
                href="https://github.com/binary-com/websockets/tree/gh-pages/config"
                external
              >
                changelog
              </Link>
              .
            </Text>
            <Text as="h2" type="heading3" css={{ mb: "16px" }}>
              Useful tools:
            </Text>
            <Text as="p" type="paragraph1" css={{ mb: "16px" }}>
              <Link href="http://jeremydorn.com/json-editor/" external>
                JSON Editor with JSON Schema support
              </Link>
            </Text>
            <Text as="p" type="paragraph1" css={{ mb: "16px" }}>
              <Link href="https://lbovet.github.io/typson-demo/" external>
                Generate JSON Schema from TypeScript
              </Link>
            </Text>
            <Text as="p" type="paragraph1" css={{ mb: "16px" }}>
              <Link href="http://jsonschema.net/" external>
                Generate JSON Schema from JSON Object
              </Link>
            </Text>
            <Text as="p" type="paragraph1" css={{ mb: "16px" }}>
              <Link href="http://www.jsonschemavalidator.net/" external>
                JSON Schema Validator
              </Link>
            </Text>
          </Box>
        </DocWrapper>
      </Box>
    </Layout>
  );
};

export default JsonSchemas;
