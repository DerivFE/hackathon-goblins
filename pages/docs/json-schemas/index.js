import React from "react";
import Layout from "components/layout/Layout";
import { Text } from "components/Text";
import { Box } from "components/Box";
import { Link } from "components/Link/Link";

const JsonSchemas = () => {
  return (
    <Layout>
      <Box col>
        <Text as="h1" type="heading2" css={{ mb: "40px", ta: "center" }}>
          JSON Schemas
        </Text>
        <Text as="p" type="paragraph1" css={{ mb: "16px" }}>
          Our API is defined by{" "}
          <Link
            href="https://github.com/binary-com/websockets/tree/gh-pages/config"
            target="_blank"
          >
            JSON Schemas
          </Link>
          . Get updates by looking for &quot;JSON Schema Update&quot; in the{" "}
          <Link
            href="https://github.com/binary-com/websockets/tree/gh-pages/config"
            target="_blank"
          >
            changelog
          </Link>
          .
        </Text>
        <Text as="h2" type="heading3" css={{ mb: "16px" }}>
          Useful tools:
        </Text>
        <Text as="p" type="paragraph1" css={{ mb: "16px" }}>
          <Link href="http://jeremydorn.com/json-editor/" target="_blank">
            JSON Editor with JSON Schema support
          </Link>
        </Text>
        <Text as="p" type="paragraph1" css={{ mb: "16px" }}>
          <Link href="https://lbovet.github.io/typson-demo/" target="_blank">
            Generate JSON Schema from TypeScript
          </Link>
        </Text>
        <Text as="p" type="paragraph1" css={{ mb: "16px" }}>
          <Link href="http://jsonschema.net/" target="_blank">
            Generate JSON Schema from JSON Object
          </Link>
        </Text>
        <Text as="p" type="paragraph1" css={{ mb: "16px" }}>
          <Link href="http://www.jsonschemavalidator.net/" target="_blank">
            JSON Schema Validator
          </Link>
        </Text>
      </Box>
    </Layout>
  );
};

export default JsonSchemas;
