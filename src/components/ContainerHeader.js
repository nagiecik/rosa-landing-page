import { useMemo } from "react";

const ContainerHeader = ({
  containerHeaderLight,
  containerHeaderBold,
  containerDescription,
  containerheaderZIndex,
  containerheaderWidth,
  textsectionTitleh1Gap,
  texth1lightColor,
  texth1lightFontSize,
  texth1lightLineHeight,
  texth1lightMargin,
  texth1boldColor,
  texth1boldFontSize,
  texth1boldLineHeight,
  texth1boldMargin,
  textpColor,
  textpFontSize,
  textpLineHeight,
  textpMaxWidth,
  textpMargin,
  showSecondaryText,
  showPrimaryText,
}) => {
  const containerheaderStyle = useMemo(() => {
    return {
      zIndex: containerheaderZIndex,
      width: containerheaderWidth,
    };
  }, [containerheaderZIndex, containerheaderWidth]);

  const textsectionTitleh12Style = useMemo(() => {
    return {
      gap: textsectionTitleh1Gap,
    };
  }, [textsectionTitleh1Gap]);

  const texth1light2Style = useMemo(() => {
    return {
      color: texth1lightColor,
      fontSize: texth1lightFontSize,
      lineHeight: texth1lightLineHeight,
      margin: texth1lightMargin,
    };
  }, [
    texth1lightColor,
    texth1lightFontSize,
    texth1lightLineHeight,
    texth1lightMargin,
  ]);

  const texth1bold2Style = useMemo(() => {
    return {
      color: texth1boldColor,
      fontSize: texth1boldFontSize,
      lineHeight: texth1boldLineHeight,
      margin: texth1boldMargin,
    };
  }, [
    texth1boldColor,
    texth1boldFontSize,
    texth1boldLineHeight,
    texth1boldMargin,
  ]);

  const textp4Style = useMemo(() => {
    return {
      color: textpColor,
      fontSize: textpFontSize,
      lineHeight: textpLineHeight,
      maxWidth: textpMaxWidth,
      margin: textpMargin,
    };
  }, [textpColor, textpFontSize, textpLineHeight, textpMaxWidth, textpMargin]);

  return (
    <div
      className="w-[1520px] flex flex-row items-center justify-between text-left text-77xl text-surfaces-default-surfaceprimary font-text-regular-headline"
      style={containerheaderStyle}
    >
      <div
        className="flex flex-col items-start justify-start gap-[24px]"
        style={textsectionTitleh12Style}
      >
        <div
          className="relative tracking-[-0.04em] leading-[96px] font-thin"
          style={texth1light2Style}
        >
          {containerHeaderLight}
        </div>
        <div
          className="relative tracking-[-0.04em] leading-[96px] font-semibold"
          style={texth1bold2Style}
        >
          {containerHeaderBold}
        </div>
      </div>
      <div
        className="flex-1 relative text-5xl leading-[40px] inline-block max-w-[800px]"
        style={textp4Style}
      >
        {containerDescription}
      </div>
    </div>
  );
};

export default ContainerHeader;
