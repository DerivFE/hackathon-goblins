import React from "react";
import { styled } from "stitches.config";

const Checkmark = styled("span", {
  display: "flex",
  width: "22px",
  height: "22px",
  transform: "rotate(45deg)",

  "&:before": {
    content: "",
    position: "absolute",
    width: "2px",
    height: "9px",
    backgroundColor: "$white",
    left: "11px",
    top: "6px",
  },

  "&:after": {
    content: "",
    position: "absolute",
    width: "4px",
    height: "2px",
    backgroundColor: "$white",
    left: "8px",
    top: "13px",
  },
});

const ContentWrapper = styled("div", {
  marginLeft: "16px",
});

const OvalWrapper = styled("div", {
  width: "24px",
  height: "24px",
  lineHeight: "2.75rem",
  backgroundColor: "$coral",
  borderRadius: "50%",
  textAlign: "center",
});

const FlexWrapper = styled("div", {
  borderRadius: "4px",
  boxShadow: "0 4px 8px 0 rgba(14, 14, 14, 0.1)",
  height: "80px",
  marginBottom: "16px",
  backgroundColor: "white",

  "&:last-child": {
    marginBottom: "0px",
  },

  "@tabletL": {
    height: "auto",
  },
});

const InnerWrapper = styled("div", {
  display: "flex",
  position: "relative",
  padding: "16px 16px 16px 17px",
});

export const CheckboxItem = ({ children }) => {
  return (
    <FlexWrapper>
      <InnerWrapper>
        <OvalWrapper>
          <Checkmark />
        </OvalWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </InnerWrapper>
    </FlexWrapper>
  );
};

export const Checkbox = ({ children }) => {
  return <>{children}</>;
};
