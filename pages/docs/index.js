import React from "react";
import Layout from "components/layout/Layout";
import {
    CustomTabs as Tabs,
    TabsHeader,
    TabsList,
    TabsTrigger,
    TabsContent,
  } from "components/CustomTabs";

import { Text } from "components/Text";
import { Button } from "components/Button";
import { Box } from "components/Box";
import FAQ from "pages/docs/faq";

const Docs = () => {
  return (
    <Layout>
      <Box col>
        <div style={{
                padding: '105px 0 80px',
                minHeight: '95vh',
                width: '80%',
                marginTop: 20,
                alignSelf: 'center',
             }}>
            <Tabs defaultValue="tab1" orientation="vertical">
              <TabsList aria-label="tabs example">
              <TabsHeader>Deriv API</TabsHeader>
                <TabsTrigger value="tab1">Quickstart</TabsTrigger>
                <TabsTrigger value="tab2">App registration</TabsTrigger>
                <TabsTrigger value="tab4">API playground</TabsTrigger>
                <TabsTrigger value="tab5">API guide</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
                <TabsTrigger value="tab6">JSON Schemas</TabsTrigger>
                <TabsTrigger value="tab7">Bug Bounty</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab one content</TabsContent>
              <TabsContent value="tab2">Tab two content</TabsContent>
              <TabsContent value="tab3">Tab three content</TabsContent>
              <TabsContent value="tab4">Tab four content</TabsContent>
              <TabsContent value="tab5">Tab five content</TabsContent>
              <TabsContent value="tab6">Tab six content</TabsContent>
              <TabsContent value="tab7">Tab seven content</TabsContent>
              <TabsContent value="faq"><FAQ /></TabsContent>
            </Tabs>
        </div>
      </Box>
    </Layout>
  );
};

export default Docs;
