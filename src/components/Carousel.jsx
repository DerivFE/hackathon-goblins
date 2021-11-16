import React, { useCallback } from "react";
import {styled} from "stitches.config"
import useEmblaCarousel from "embla-carousel-react";
import { Text } from "./Text";

const MainWrapper = styled("div", {
    position: "relative",
    padding: "20px",
    maxWidth: "500px",
    marginLeft: "auto",
    marginRight: "auto",
})

const Viewport = styled("div", {
    overflow: "hidden",
    width: "100%",
})

const Container = styled("div", {
    display: "flex",
    userSelect: "none",
    marginLeft: "-10px",
})

const Slide = styled("div", {
    position: "relative",
    minWidth: "100%",
    paddingLeft: "10px",
})

const InnerSlide = styled("div", {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    position: "relative",
    overflow: "hidden",
    height: "190px",
})

const Button = styled("button", {
    outline: "0",
    cursor: "pointer",
    backgroundColor: "transparent",
    touchAction: "manipulation",
    position: "absolute",
    zIndex: "1",
    top: "50%",
    transform: "translateY(-50%)",
    border: "0",
    width: "30px",
    height: "30px",
    justifyContent: "center",
    alignItems: "center",
    fill: "$black",
    padding: "0",

    variants: {
        left: {
            true: {
                left: "-50px",
            },
        },
        right: {
            true: {
                right: "-50px",
            },
        },
    },

    '& svg': {
        width: "100%",
        height: "100%",
    },

})

const Title = styled(Text, {
    textAlign: "center",
    marginBottom: "40px",
})

export const Carousel = ({children, title}) => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true, skipSnaps: false });
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <>
        <Title type="heading2">
                {title}
        </Title>
        <MainWrapper>
            <Viewport ref={viewportRef}>
            <Container>
                {children}
            </Container>
            </Viewport>
            <Button left onClick={scrollPrev}>
                <svg viewBox="137.718 -1.001 366.563 644">
                    <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
                </svg>
            </Button>
            <Button right onClick={scrollNext}>
                <svg viewBox="0 0 238.003 238.003">
                    <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
                </svg>
            </Button>
        </MainWrapper>
    </>
  );
};

export const CarouselItem = ({children}) => {
    return (
        <Slide>
            <InnerSlide>
                {children}
            </InnerSlide>
        </Slide >
    )
}