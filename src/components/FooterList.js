import { useMemo } from "react";

const FooterList = ({
  footerListTitle = "Menu",
  footerListElement1,
  footerListElement2,
  showListElement1 = true,
  showListElement2 = true,
  showListElement3 = true,
  showListElement4 = true,
  showListElement5 = true,
  containerdivlinkscolumnWidth,
  containerdivlinkscolumnGap,
  texth5boldFontSize,
  texth5boldLineHeight,
  texth5boldMargin,
  texth5boldFontWeight,
  link1TextDecoration,
  textlabelFontSize,
  textlabelLineHeight,
  link2TextDecoration,
  textlabelFontSize1,
  textlabelLineHeight1,
  link3TextDecoration,
  textlabelFontSize2,
  textlabelLineHeight2,
  link4TextDecoration,
  textlabelFontSize3,
  textlabelLineHeight3,
  link5TextDecoration,
  textlabelFontSize4,
  textlabelLineHeight4,
}) => {
  const containerdivlinkscolumnStyle = useMemo(() => {
    return {
      width: containerdivlinkscolumnWidth,
      gap: containerdivlinkscolumnGap,
    };
  }, [containerdivlinkscolumnWidth, containerdivlinkscolumnGap]);

  const texth5boldStyle = useMemo(() => {
    return {
      fontSize: texth5boldFontSize,
      lineHeight: texth5boldLineHeight,
      margin: texth5boldMargin,
      fontWeight: texth5boldFontWeight,
    };
  }, [
    texth5boldFontSize,
    texth5boldLineHeight,
    texth5boldMargin,
    texth5boldFontWeight,
  ]);

  const link1Style = useMemo(() => {
    return {
      textDecoration: link1TextDecoration,
    };
  }, [link1TextDecoration]);

  const textlabel1Style = useMemo(() => {
    return {
      fontSize: textlabelFontSize,
      lineHeight: textlabelLineHeight,
    };
  }, [textlabelFontSize, textlabelLineHeight]);

  const link2Style = useMemo(() => {
    return {
      textDecoration: link2TextDecoration,
    };
  }, [link2TextDecoration]);

  const textlabel2Style = useMemo(() => {
    return {
      fontSize: textlabelFontSize1,
      lineHeight: textlabelLineHeight1,
    };
  }, [textlabelFontSize1, textlabelLineHeight1]);

  const link3Style = useMemo(() => {
    return {
      textDecoration: link3TextDecoration,
    };
  }, [link3TextDecoration]);

  const textlabel3Style = useMemo(() => {
    return {
      fontSize: textlabelFontSize2,
      lineHeight: textlabelLineHeight2,
    };
  }, [textlabelFontSize2, textlabelLineHeight2]);

  const link4Style = useMemo(() => {
    return {
      textDecoration: link4TextDecoration,
    };
  }, [link4TextDecoration]);

  const textlabel4Style = useMemo(() => {
    return {
      fontSize: textlabelFontSize3,
      lineHeight: textlabelLineHeight3,
    };
  }, [textlabelFontSize3, textlabelLineHeight3]);

  const link5Style = useMemo(() => {
    return {
      textDecoration: link5TextDecoration,
    };
  }, [link5TextDecoration]);

  const textlabel5Style = useMemo(() => {
    return {
      fontSize: textlabelFontSize4,
      lineHeight: textlabelLineHeight4,
    };
  }, [textlabelFontSize4, textlabelLineHeight4]);

  return (
    <div
      className="w-60 flex flex-col items-start justify-start gap-[16px] text-left text-base text-texts-textaccentsubtle font-text-regular-headline"
      style={containerdivlinkscolumnStyle}
    >
      <b
        className="self-stretch relative text-13xl tracking-[-0.04em] leading-[48px] text-texts-textprimary"
        style={texth5boldStyle}
      >
        {footerListTitle}
      </b>
      {showListElement1 && (
        <div
          className="self-stretch flex flex-row items-center justify-center"
          style={link1Style}
        >
          <div
            className="flex-1 relative leading-[32px] font-semibold"
            style={textlabel1Style}
          >
            {footerListElement1}
          </div>
        </div>
      )}
      {showListElement4 && (
        <div
          className="self-stretch flex flex-row items-center justify-center"
          style={link2Style}
        >
          <div
            className="flex-1 relative leading-[32px] font-semibold"
            style={textlabel2Style}
          >
            {footerListElement2}
          </div>
        </div>
      )}
      {showListElement2 && (
        <div
          className="self-stretch flex flex-row items-center justify-center"
          style={link3Style}
        >
          <div
            className="flex-1 relative leading-[32px] font-semibold"
            style={textlabel3Style}
          >
            USE CASES
          </div>
        </div>
      )}
      {showListElement3 && (
        <div
          className="self-stretch flex flex-row items-center justify-center"
          style={link4Style}
        >
          <div
            className="flex-1 relative leading-[32px] font-semibold"
            style={textlabel4Style}
          >
            TESTIMONIALS
          </div>
        </div>
      )}
      {showListElement5 && (
        <div
          className="self-stretch flex flex-row items-center justify-center"
          style={link5Style}
        >
          <div
            className="flex-1 relative leading-[32px] font-semibold"
            style={textlabel5Style}
          >
            PRICING
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterList;
