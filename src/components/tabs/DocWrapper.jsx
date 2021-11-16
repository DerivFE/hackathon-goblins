import React from "react";
import {
    CustomTabs as Tabs,
    TabsHeader,
    TabsList,
    TabsTrigger,
    TabsContent,
  } from "components/tabs/CustomTabs";

const DocWrapper = ({ children, value, ...props }) => {
  return (
    <div style={{
        padding: '105px 0 80px',
        minHeight: '95vh',
        width: '80%',
        marginTop: 20,
        alignSelf: 'center',
     }}>
        <Tabs value={value} orientation="vertical" {...props}>
          <TabsList aria-label={value}>
            <TabsHeader>Deriv API</TabsHeader>
            <TabsTrigger value="/docs" active={getActiveState('/docs', value)}>Quickstart</TabsTrigger>
            <TabsTrigger value="/docs/app-registration" active={getActiveState('/docs/app-registration', value)}>App registration</TabsTrigger>
            <TabsTrigger value="/playground" active={getActiveState('/playground', value)}>API playground</TabsTrigger>
            <TabsTrigger value="/docs/api-guide" active={getActiveState('/docs/api-guide', value)}>API guide</TabsTrigger>
            <TabsTrigger value='/docs/faq' active={getActiveState('/docs/faq', value)}>FAQ</TabsTrigger>
            <TabsTrigger value="/docs/json-schemas" active={getActiveState('/docs/json-schemas', value)}>JSON Schemas</TabsTrigger>
            <TabsTrigger value="/docs/bug-bounty" active={getActiveState('/docs/bug-bounty', value)}>Bug Bounty</TabsTrigger>
          </TabsList>
          <TabsContent value={value}>{children}</TabsContent>
        </Tabs>
    </div>
  );
};

const getActiveState = (triggerValue, currentPage) => {
  return (currentPage === triggerValue).toString();
};

export default DocWrapper;