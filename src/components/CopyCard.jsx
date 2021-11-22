import React from "react";
import { styled } from "stitches.config";
import CopyIcon from "assets/svg/copy.svg";

const CopyCardWrapper = styled("div", {
  borderRadius: "4px",
  border: "1px solid #e5e5e5",
  backgroundColor: "rgba(87,122,146,.04)",
  color: "$text",
  fontWeight: 700,
  display: "flex",
  flexWrap: "nowrap",
  alignItems: "center",
  mb: "8px",
});

const CopyCardText = styled("text", {
  width: "100%",
  padding: "16px 24px",
  color: "$text",
});

const CopyButton = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "8px 16px",
  fontWeight: "400",
  cursor: "copy",
  borderLeft: "rgba(229,229,229,.4) 1px solid",

  variants: {
    hover: {
      true: {
        backgroundColor: "rgba(242,243,244,.2)",
      },
    },
  },
});

export const CopyCard = ({ children }) => {
  const [hoverState, setHoverState] = React.useState(false);
  return (
    <CopyCardWrapper>
      <CopyCardText>{children}</CopyCardText>
      <CopyButton
        hover={hoverState}
        onMouseEnter={() => {
          setHoverState(true);
        }}
        onMouseLeave={() => {
          setHoverState(false);
        }}
        onClick={() => {
          navigator.clipboard.writeText(contents[selectedOption].content);
        }}
      >
        <CopyIcon style={{ margin: "0 9px 0 3px" }} />
        Copy
      </CopyButton>
    </CopyCardWrapper>
  );
};
