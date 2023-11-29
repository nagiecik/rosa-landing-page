import { useMemo } from "react";

const CardContext = ({
  cardNumberText,
  cardTitleText,
  cardDescriptionText,
  containerdivcardContextBackgroundColor,
  containerdivcardContextBorder,
  containerdivcardContextWidth,
  containerdivcardContextPadding,
  containerdivcardContextGap,
  containerdivnumberBackgroundColor,
  containerdivnumberPadding,
  textlabelnumberColor,
  textlabelnumberFontSize,
  textlabelnumberLineHeight,
  textlabelnumberWidth,
  textlabelnumberHeight,
  containerdivtextGap,
  texth5Color,
  texth5FontSize,
  texth5LineHeight,
  texth5Margin,
  texth5FontWeight,
  textpColor,
  textpFontSize,
  textpLineHeight,
  textpMargin,
}) => {
  const containerdivcardContextStyle = useMemo(() => {
    return {
      backgroundColor: containerdivcardContextBackgroundColor,
      border: containerdivcardContextBorder,
      width: containerdivcardContextWidth,
      padding: containerdivcardContextPadding,
      gap: containerdivcardContextGap,
    };
  }, [
    containerdivcardContextBackgroundColor,
    containerdivcardContextBorder,
    containerdivcardContextWidth,
    containerdivcardContextPadding,
    containerdivcardContextGap,
  ]);

  const containerdivnumberStyle = useMemo(() => {
    return {
      backgroundColor: containerdivnumberBackgroundColor,
      padding: containerdivnumberPadding,
    };
  }, [containerdivnumberBackgroundColor, containerdivnumberPadding]);

  const textlabelnumberStyle = useMemo(() => {
    return {
      color: textlabelnumberColor,
      fontSize: textlabelnumberFontSize,
      lineHeight: textlabelnumberLineHeight,
      width: textlabelnumberWidth,
      height: textlabelnumberHeight,
    };
  }, [
    textlabelnumberColor,
    textlabelnumberFontSize,
    textlabelnumberLineHeight,
    textlabelnumberWidth,
    textlabelnumberHeight,
  ]);

  const containerdivtext3Style = useMemo(() => {
    return {
      gap: containerdivtextGap,
    };
  }, [containerdivtextGap]);

  const texth5Style = useMemo(() => {
    return {
      color: texth5Color,
      fontSize: texth5FontSize,
      lineHeight: texth5LineHeight,
      margin: texth5Margin,
      fontWeight: texth5FontWeight,
    };
  }, [
    texth5Color,
    texth5FontSize,
    texth5LineHeight,
    texth5Margin,
    texth5FontWeight,
  ]);

  const textp5Style = useMemo(() => {
    return {
      color: textpColor,
      fontSize: textpFontSize,
      lineHeight: textpLineHeight,
      margin: textpMargin,
    };
  }, [textpColor, textpFontSize, textpLineHeight, textpMargin]);

  return (
    <div
      className="rounded-spacing-16 bg-texts-textprimary shadow-[-176px_226px_80px_rgba(23,_31,_78,_0),_-113px_144px_73px_rgba(23,_31,_78,_0.01),_-63px_81px_62px_rgba(23,_31,_78,_0.04),_-28px_36px_46px_rgba(23,_31,_78,_0.07),_-7px_9px_25px_rgba(23,_31,_78,_0.08)] box-border w-[640px] flex flex-col items-start justify-start p-8 gap-[48px] text-center text-21xl text-texts-textprimary font-text-regular-headline border-[1px] border-solid border-surfaces-default-surfaceprimary"
      style={containerdivcardContextStyle}
    >
      <div
        className="rounded-spacing-16 bg-surfaces-default-surfaceprimary flex flex-col items-end justify-start p-4"
        style={containerdivnumberStyle}
      >
        <div
          className="relative tracking-[-0.04em] leading-[56px] font-semibold flex items-center justify-center w-16 h-16 shrink-0"
          style={textlabelnumberStyle}
        >
          {cardNumberText}
        </div>
      </div>
      <div
        className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-13xl text-surfaces-default-surfaceprimary"
        style={containerdivtext3Style}
      >
        <b
          className="self-stretch relative tracking-[-0.04em] leading-[48px]"
          style={texth5Style}
        >
          {cardTitleText}
        </b>
        <div
          className="self-stretch relative text-5xl leading-[40px] font-semibold text-texts-textaccentsubtle1"
          style={textp5Style}
        >
          {cardDescriptionText}
        </div>
      </div>
    </div>
  );
};

export default CardContext;
