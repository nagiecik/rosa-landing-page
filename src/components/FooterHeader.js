import { useMemo } from "react";

const FooterHeader = ({
  footerHeaderTitle = "All Provided",
  footerHeaderMail = "Features",
  showHeaderTitle = true,
  showHeaderMail = true,
  distributionVerticalFlex,
  distributionVerticalGap,
  texth2lightColor,
  texth2lightFontSize,
  texth2lightLineHeight,
  texth2lightMargin,
  texth2boldColor,
  texth2boldTextDecoration,
  texth2boldFontSize,
  texth2boldLineHeight,
  texth2boldMargin,
}) => {
  const distributionVertical1Style = useMemo(() => {
    return {
      flex: distributionVerticalFlex,
      gap: distributionVerticalGap,
    };
  }, [distributionVerticalFlex, distributionVerticalGap]);

  const texth2lightStyle = useMemo(() => {
    return {
      color: texth2lightColor,
      fontSize: texth2lightFontSize,
      lineHeight: texth2lightLineHeight,
      margin: texth2lightMargin,
    };
  }, [
    texth2lightColor,
    texth2lightFontSize,
    texth2lightLineHeight,
    texth2lightMargin,
  ]);

  const texth2boldStyle = useMemo(() => {
    return {
      color: texth2boldColor,
      textDecoration: texth2boldTextDecoration,
      fontSize: texth2boldFontSize,
      lineHeight: texth2boldLineHeight,
      margin: texth2boldMargin,
    };
  }, [
    texth2boldColor,
    texth2boldTextDecoration,
    texth2boldFontSize,
    texth2boldLineHeight,
    texth2boldMargin,
  ]);

  return (
    <div
      className="flex flex-col items-start justify-start gap-[24px] text-left text-61xl text-surfaces-default-surfaceprimary font-text-regular-headline"
      style={distributionVertical1Style}
    >
      {showHeaderMail && (
        <div
          className="relative tracking-[-0.04em] leading-[96px] font-thin"
          style={texth2lightStyle}
        >
          {footerHeaderTitle}
        </div>
      )}
      {showHeaderTitle && (
        <div
          className="relative tracking-[-0.04em] leading-[96px] font-semibold"
          style={texth2boldStyle}
        >
          {footerHeaderMail}
        </div>
      )}
    </div>
  );
};

export default FooterHeader;
