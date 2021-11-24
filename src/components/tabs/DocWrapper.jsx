import React from "react";
import {
  CustomTabs as Tabs,
  TabsHeader,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "components/tabs/CustomTabs";
import { styled } from "stitches.config";

const StyledListWrapper = styled("div", {
  position: "fixed",
  width: 220,
});

const StyledDiv = styled("div", {
  minHeight: "95vh",
  width: "80%",
  alignSelf: "center",
  padding: "105px 0 80px",
});

const DocWrapper = ({ children, value, ...props }) => {
  return (
    <StyledDiv
      css={{
        "@tabletL": {
          width: "100%",
          padding: "24px 16px",
          margin: "0 auto",
        },
      }}
    >
      <Tabs value={value} orientation="vertical" {...props}>
        <TabsList aria-label={value} css={{ "@tabletL": { display: "none" } }}>
          <StyledListWrapper>
            <TabsHeader>Deriv API</TabsHeader>
            <TabsTrigger value="/docs" active={getActiveState("/docs", value)}>
              Quickstart
            </TabsTrigger>
            <TabsTrigger
              value="/docs/app-registration"
              active={getActiveState("/docs/app-registration", value)}
            >
              App registration
            </TabsTrigger>
            <TabsTrigger
              value="/playground"
              active={getActiveState("/playground", value)}
            >
              API playground
            </TabsTrigger>
            <TabsTrigger
              value="/docs/api-guide"
              active={getActiveState("/docs/api-guide", value)}
            >
              API guide
            </TabsTrigger>
            <TabsTrigger
              value="/docs/faq"
              active={getActiveState("/docs/faq", value)}
            >
              FAQ
            </TabsTrigger>
            <TabsTrigger
              value="/docs/json-schemas"
              active={getActiveState("/docs/json-schemas", value)}
            >
              JSON Schemas
            </TabsTrigger>
            <TabsTrigger
              value="/docs/bug-bounty"
              active={getActiveState("/docs/bug-bounty", value)}
            >
              Bug Bounty
            </TabsTrigger>
          </StyledListWrapper>
        </TabsList>
        <TabsContent value={value}>{children}</TabsContent>
      </Tabs>
    </StyledDiv>
  );
};

const getActiveState = (triggerValue, currentPage) => {
  return (currentPage === triggerValue).toString();
};

export default DocWrapper;
