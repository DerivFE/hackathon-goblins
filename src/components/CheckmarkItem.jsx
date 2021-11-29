import React from "react";
import { styled } from "stitches.config";

const Checkmark = styled("span", {
  display: "flex",
  width: "32px",
  height: "32px",
  transform: "rotate(45deg)",
  "&:before": {
    content: "",
    position: "absolute",
    width: "2px",
    height: "11px",
    backgroundColor: "$white",
    left: "18px",
    top: "10px",
  },
  "&:after": {
    content: "",
    position: "absolute",
    width: "5px",
    height: "2px",
    backgroundColor: "$white",
    left: "14px",
    top: "19px",
  },
});

const ContentWrapper = styled("div", {
  marginLeft: "16px",
});

const OvalWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  lineHeight: "2.75rem",
  backgroundColor: "$coral",
  borderRadius: "50px",
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
  alignItems: "center",
  position: "relative",
  padding: "16px 16px 16px 17px",
});

export const CheckmarkItem = ({ children }) => {
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

export const CheckmarkGroup = ({ children }) => {
  return <>{children}</>;
};
