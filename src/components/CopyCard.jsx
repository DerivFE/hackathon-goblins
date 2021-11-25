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

  "@tablet": {
    width: "100%",
  },
});

const CopyCardText = styled("text", {
  width: "100%",
  padding: "16px 24px",
  color: "$text",

  "@tablet": {
    wordBreak: "break-all",
  },
});

const CopyButton = styled("div", {
  display: "flex",
  position: "relative",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "8px 16px",
  fontWeight: "400",
  cursor: "copy",
  borderLeft: "rgba(229,229,229,.4) 1px solid",

  "@tablet": {
    padding: "4px 8px",
  },
  "@mobileL": {
    flexDirection: "column-reverse",
  },

  variants: {
    hover: {
      true: {
        backgroundColor: "rgba(242,243,244,.2)",
      },
    },
  },
});

const ToolTip = styled("div", {
  width: "140px",
  backgroundColor: "$textLight",
  color: "$white",
  textAlign: "center",
  borderRadius: "6px",
  padding: "5px",
  position: "absolute",
  zIndex: "1",
  bottom: "150%",
  left: "50%",
  marginLeft: "-75px",
  transition: "all 0.3s",

  "&::after": {
    content: "",
    position: "absolute",
    top: "100%",
    left: "50%",
    marginLeft: "-5px",
    borderWidth: "5px",
    borderStyle: "solid",
    borderColor: "$textLight transparent transparent transparent",
  },

  "@tabletL": {
    left: "0%",
  },

  variants: {
    visibility: {
      visible: {
        visibility: "visible",
        opacity: "1",
      },
      hidden: {
        visibility: "hidden",
        opacity: "0",
      },
    },
  },
  defaultVariants: {
    visibility: "hidden",
  },
});

export const CopyCard = ({ children }) => {
  const [hoverState, setHoverState] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
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
          navigator.clipboard.writeText(children);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
      >
        <CopyIcon style={{ margin: "0 9px 0 3px" }} />
        <ToolTip visibility={copied ? "visible" : "hidden"}>
          Copied to clipboard
        </ToolTip>
        Copy
      </CopyButton>
    </CopyCardWrapper>
  );
};
