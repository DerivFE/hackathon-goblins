import React from "react";
import { styled, keyframes } from "../../stitches.config";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import PlusIcon from "../assets/svg/plus.svg";
import MinusIcon from "../assets/svg/minus.svg";

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
  borderRadius: 6,
  width: "100%",
});

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: "hidden",
  marginTop: 1,
  marginBottom: "24px",
  borderRadius: 6,
  boxShadow: "-2px 6px 15px 0 rgb(195 195 195 / 31%)",

  "&:focus-within": {
    position: "relative",
    zIndex: 1,
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
  display: "flex",
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "transparent",
  padding: "0 40px",
  height: 56,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: 16,
  fontWeight: "bold",
  lineHeight: 1,
  color: "black",
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
  fontSize: 16,
  lineHeight: 1.75,
  color: "black",
  backgroundColor: "rgba(87,122,146,.04)",

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled("div", {
  padding: "24px 40px",
});

const StyledPlusIcon = styled(PlusIcon, {
  "[data-state=open] &": { display: "none" },
});
const StyledMinusIcon = styled(MinusIcon, {
  display: "none",
  "[data-state=open] &": { display: "block" },
});

// Exports
export const Accordion = StyledAccordion;
export const AccordionItem = StyledItem;
export const AccordionTrigger = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <StyledPlusIcon aria-hidden />
        <StyledMinusIcon aria-hidden />
      </StyledTrigger>
    </StyledHeader>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";
export const AccordionContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  )
);
AccordionContent.displayName = "AccordionContent";
