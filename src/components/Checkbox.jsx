import React from "react";
import { styled } from "stitches.config";

const Checkmark = styled("span", {
    display: "flex",
    width: "22px",
    height: "22px",
    transform: "rotate(45deg)",

    '&:before': {
        content: '',
        position: "absolute",
        width: "2px",
        height: "9px",
        backgroundColor: "$white",
        left: "11px",
        top: "6px",
    },

    '&:after': {
        content: '',
        position: "absolute",
        width: "4px",
        height: "2px",
        backgroundColor: "$white",
        left: "8px",
        top: "13px",
    },
})

const ContentWrapper = styled("div", {
    margin: "auto 16px",
})

const OvalWrapper = styled("div", {
    width: "24px",
    height: "24px",
    lineHeight: "2.75rem",
    backgroundColor: "$coral",
    borderRadius: "50%",
    textAlign: "center",
    paddingLeft: "1px",
    margin: "17px 0 auto 16px",
})

const FlexWrapper = styled("div", {
    display: "flex",
    position: "relative",
    borderRadius: "4px",
    boxShadow: "0 4px 8px 0 rgba(14, 14, 14, 0.1)",
    minHeight: "80px",
    marginBottom: "16px",

    '&:last-child': {
        marginBottom: "0px"
    },
})

export const CheckboxItem = ({children}) => {
    return (   
        <FlexWrapper>
            <OvalWrapper>
                <Checkmark/>
            </OvalWrapper>
            <ContentWrapper>{children}</ContentWrapper>
        </FlexWrapper>         
    )
}

export const Checkbox = ({ children }) => {
    return(
        <>
            {children}
        </>
    )
}

