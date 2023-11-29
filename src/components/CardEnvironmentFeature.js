import { useMemo } from "react";

const CardEnvironmentFeature = ({
  cardIconUrl,
  cardNumberText = "01",
  cardTitleText = "Title Text",
  cardDescriptionText = "Content Text",
  showNumberText = true,
  showTitleText = true,
  showIcon = true,
  showDescriptionText = true,
  containerdivcardFeatureacPadding,
  containerdivcardFeatureacGap,
  containerdivcardFeatureacMinWidth,
  imageiconPadding,
  iconhouseWidth,
  iconhouseHeight,
  containerdivtextGap,
  texth6FontSize,
  texth6LineHeight,
  texth6Margin,
  texth6FontWeight,
  texth6FontSize1,
  texth6LineHeight1,
  texth6Margin1,
  texth6FontWeight1,
  textpFontSize,
  textpLineHeight,
  textpMargin,
}) => {
  const containerdivcardFeatureactStyle = useMemo(() => {
    return {
      padding: containerdivcardFeatureacPadding,
      gap: containerdivcardFeatureacGap,
      minWidth: containerdivcardFeatureacMinWidth,
    };
  }, [
    containerdivcardFeatureacPadding,
    containerdivcardFeatureacGap,
    containerdivcardFeatureacMinWidth,
  ]);

  const imageiconStyle = useMemo(() => {
    return {
      padding: imageiconPadding,
    };
  }, [imageiconPadding]);

  const iconhouseStyle = useMemo(() => {
    return {
      width: iconhouseWidth,
      height: iconhouseHeight,
    };
  }, [iconhouseWidth, iconhouseHeight]);

  const containerdivtext2Style = useMemo(() => {
    return {
      gap: containerdivtextGap,
    };
  }, [containerdivtextGap]);

  const texth61Style = useMemo(() => {
    return {
      fontSize: texth6FontSize,
      lineHeight: texth6LineHeight,
      margin: texth6Margin,
      fontWeight: texth6FontWeight,
    };
  }, [texth6FontSize, texth6LineHeight, texth6Margin, texth6FontWeight]);

  const texth62Style = useMemo(() => {
    return {
      fontSize: texth6FontSize1,
      lineHeight: texth6LineHeight1,
      margin: texth6Margin1,
      fontWeight: texth6FontWeight1,
    };
  }, [texth6FontSize1, texth6LineHeight1, texth6Margin1, texth6FontWeight1]);

  const textp3Style = useMemo(() => {
    return {
      fontSize: textpFontSize,
      lineHeight: textpLineHeight,
      margin: textpMargin,
    };
  }, [textpFontSize, textpLineHeight, textpMargin]);

  return (
    <div
      className="rounded-spacing-16 bg-texts-textprimary shadow-[-176px_226px_80px_rgba(23,_31,_78,_0),_-113px_144px_73px_rgba(23,_31,_78,_0.01),_-63px_81px_62px_rgba(23,_31,_78,_0.04),_-28px_36px_46px_rgba(23,_31,_78,_0.07),_-7px_9px_25px_rgba(23,_31,_78,_0.08)] flex flex-col items-end justify-start pt-spacing-24 px-spacing-24 pb-spacing-32 box-border gap-[16px] min-w-[356px] text-left text-5xl text-surfaces-default-surfacetertiary font-text-regular-headline flex-1"
      style={containerdivcardFeatureactStyle}
    >
      <div
        className="rounded-spacing-16 bg-surfaces-default-surfaceprimary flex flex-row items-end justify-start p-2"
        style={imageiconStyle}
      >
        {showIcon && (
          <img
            className="relative w-12 h-12 overflow-hidden shrink-0"
            alt=""
            src={cardIconUrl}
            style={iconhouseStyle}
          />
        )}
      </div>
      <div
        className="self-stretch flex flex-col items-start justify-start gap-[12px]"
        style={containerdivtext2Style}
      >
        {showNumberText && (
          <b
            className="self-stretch relative tracking-[-0.04em] leading-[40px]"
            style={texth61Style}
          >
            {cardNumberText}
          </b>
        )}
        {showTitleText && (
          <b
            className="self-stretch relative tracking-[-0.04em] leading-[40px] text-surfaces-default-surfaceprimary"
            style={texth62Style}
          >
            {cardTitleText}
          </b>
        )}
        {showDescriptionText && (
          <div
            className="self-stretch relative text-base leading-[32px] font-semibold text-texts-textaccentsubtle1"
            style={textp3Style}
          >
            {cardDescriptionText}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardEnvironmentFeature;
