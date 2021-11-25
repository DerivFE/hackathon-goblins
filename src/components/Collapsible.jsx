import React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { styled, keyframes } from "stitches.config";

const open = keyframes({
  from: { height: 0, opacity: 0 },
  to: { height: "var(--radix-collapsible-content-height)", opacity: 1 },
});

const close = keyframes({
  from: { height: "var(--radix-collapsible-content-height)", opacity: 1 },
  to: { height: 0, opacity: 0 },
});

const StyledCollapsible = styled(CollapsiblePrimitive.Root);

const StyledTrigger = styled(CollapsiblePrimitive.Trigger, {});

const StyledContent = styled(CollapsiblePrimitive.Content, {
  '&[data-state="open"]': {
    animation: `${open} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${close} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

// Exports
export const Collapsible = StyledCollapsible;
export const CollapsibleTrigger = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
    </StyledTrigger>
  )
);
CollapsibleTrigger.displayName = "CollapsibleTrigger";
export const CollapsibleContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef}>
      {children}
    </StyledContent>
  )
);
CollapsibleContent.displayName = "CollapsibleContent";
