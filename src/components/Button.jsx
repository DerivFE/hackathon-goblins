import { styled } from "stitches.config";

export const Button = styled("button", {
  // Reset
  alignItems: "center",
  appearance: "none",
  boxSizing: "border-box",
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  margin: "0",
  outline: "none",
  padding: "0",
  textDecoration: "none",
  userSelect: "none",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  // Custom
  border: "none",
  borderRadius: "4px",
  height: "auto",
  padding: "10px 16px",
  fontSize: "$4",
  lineHeight: 1.25,
  fontWeight: 700,
  fontWeight: "bold",
  cursor: "pointer",

  variants: {
    variant: {
      primary: {
        backgroundColor: "$coral",
        color: "$white",

        "&:hover": {
          backgroundColor: "#d43e47",
        },
      },
      secondary: {
        backgroundColor: "transparent",
        color: "$text",
        boxShadow: "0 0 0 2px #999",

        "&:hover": {
          backgroundColor: "#999",
        },
      },
      outlined: {
        backgroundColor: "transparent",
        color: "$text",
        boxShadow: "0 0 0 2px #999",
      },
      outlined2: {
        backgroundColor: "transparent",
        color: "$fadedGrey",
        border: "solid 1px",
        padding: "6px 16px",
      },
      table: {
        backgroundColor: "rgb(239, 239, 239)",
        padding: "8px",
        fontSize: "14px",
        fontWeight: 200,
        margin: "2px",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
