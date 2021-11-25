import React from "react";
import Highlight from "react-highlight";
import CopyIcon from "assets/svg/copy.svg";
import { styled } from "stitches.config";
import { ToolTip } from "components/CopyCard";

const MainWrapper = styled("div", {
  display: "flex",
  borderRadius: "6px",
  flexDirection: "column",
  width: "100%",
});

const HeadWrapper = styled("div", {
  display: "flex",
  flexWrap: "nowrap",
  borderRadius: "6px 6px 0 0",
  backgroundColor: "$black",
  borderBottom: "1px solid rgba(242,243,244,.2)",
  color: "$lightGrey",
  lineHeight: "1.5",
  alignItems: "center",
});

const ContentWrapper = styled("div", {
  display: "flex",
  backgroundColor: "$grey",
  borderRadius: "0 0 6px 6px",

  "& pre": {
    whiteSpace: "break-spaces",
    overflowX: "auto",
  },
});

const CopyButton = styled("div", {
  display: "flex",
  position: "relative",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "8px 16px",
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

const Options = styled("div", {
  width: "100%",
  paddingLeft: "24px",
});

const StyledSelect = styled("select", {
  backgroundColor: "inherit",
  border: "$black",
  color: "$lightGrey",
});

export const Codeblock = ({ contents }) => {
  const [selectedOption, setSelectedOption] = React.useState(
    Object.keys(contents)[0]
  );
  const [hoverState, setHoverState] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  return (
    <MainWrapper>
      <HeadWrapper>
        <Options>
          <StyledSelect
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {Object.keys(contents).map((item) => {
              return (
                <option value={item} key={item}>
                  {contents[item].name}
                </option>
              );
            })}
          </StyledSelect>
        </Options>
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
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
        >
          <CopyIcon style={{ margin: "0 9px 0 3px" }} />
          Copy
          <ToolTip visibility={copied ? "visible" : "hidden"}>
            Copied to clipboard
          </ToolTip>
        </CopyButton>
      </HeadWrapper>
      <ContentWrapper>
        <Highlight className={selectedOption}>
          {contents[selectedOption].content}
        </Highlight>
      </ContentWrapper>
    </MainWrapper>
  );
};
