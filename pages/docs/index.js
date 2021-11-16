import React from "react";
import Layout from "components/layout/Layout";

import { Box } from "components/Box";
import DocWrapper from "components/tabs/DocWrapper";

const Docs = () => {
  return (
    <Layout>
      <Box col>
        <DocWrapper value='/docs'>Hello</DocWrapper>
      </Box>
    </Layout>
  );
};

export default Docs;
