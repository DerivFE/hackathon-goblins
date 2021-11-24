/* eslint-disable */
import React from "react";
import * as Tabs from '@radix-ui/react-tabs';
import { styled } from "stitches.config";
import Link from 'next/link';

const StyledTabs = styled(Tabs.Root, {
  borderRadius: 6,
  display: 'flex',
  width: "100%",
});

const StyledList = styled(Tabs.List, {
  height: '100vh',
  minWidth: 220,
  width: 220,
  zIndex: 10,
});

const StyledHeader = styled('p', {
  color: '#333',
  fontSize: 32,
  fontWeight: 700,
  lineHeight: 1.25,
  margin: '0 0 16px 2px',
});

const StyledTrigger = styled(Tabs.Trigger, {
  alignItems: 'center',
  borderLeft: '4px solid transparent',
  color: '#333',
  cursor: 'pointer',
  display: 'flex',
  height: '44px',
  lineHeight: 1.88,
  marginBottom: '14px',
  opacity: 0.72,
  padding: '0 24px 0 17px',
  '&:hover': {
    backgroundColor: '#f0f1f3',
    borderLeft: '4px solid rgba(255, 0, 0, 0.72)',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    transition: 'all 0.2s ease-in-out',
  },
  '&[active="true"]': {
    backgroundColor: 'rgba(240,241,243,0.64)',
    borderBottomLeftRadius: 4,
    borderLeft: '4px solid red',
    borderTopLeftRadius: 4,
    fontWeight: 700,
    opacity: 1,
    transition: 'all 0.2s ease-in-out',
  },
});

const StyledContent = styled(Tabs.Content, {
  borderLeft: '1px solid #eee',
  paddingLeft: 42,
  width: 'calc(100% - 262px)',
});

export const CustomTabs = StyledTabs;
export const TabsList = StyledList;
export const TabsHeader = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledHeader {...props} ref={forwardedRef}>{children}</StyledHeader>
  )
);
TabsHeader.displayName = "TabsHeader";

export const TabsTrigger = React.forwardRef(
  ({ children, value, ...props }, forwardedRef) => (
    <Link href={value}>
      <StyledTrigger {...props} ref={forwardedRef}>{children}</StyledTrigger>
    </Link>
  )
);
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef} css={{ '@tabletL': { 
      border: 'none',
      width: '100%',
      padding: 0,
    }}}>{children}</StyledContent>
  )
);
TabsContent.displayName = "TabsContent";