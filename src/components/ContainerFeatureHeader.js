import { useMemo } from "react";

const ContainerFeatureHeader = ({
  featureHeaderLight = "All Provided",
  featureHeaderBold = "Features",
  showPrimaryText = true,
  showSecondaryText = true,
  distributionVerticalAlignSelf,
  distributionVerticalGap,
  texth1lightColor,
  texth1lightFontSize,
  texth1lightLineHeight,
  texth1lightMargin,
  texth1boldColor,
  texth1boldFontSize,
  texth1boldLineHeight,
  texth1boldMargin,
}) => {
  const distributionVerticalStyle = useMemo(() => {
    return {
      alignSelf: distributionVerticalAlignSelf,
      gap: distributionVerticalGap,
    };
  }, [distributionVerticalAlignSelf, distributionVerticalGap]);

  const texth1light3Style = useMemo(() => {
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

  const texth1bold3Style = useMemo(() => {
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

  return (
    <div
      className="flex flex-col items-start justify-start gap-[24px] text-left text-77xl text-surfaces-default-surfaceprimary font-text-regular-headline"
      style={distributionVerticalStyle}
    >
      {showSecondaryText && (
        <div
          className="relative tracking-[-0.04em] leading-[96px] font-thin"
          style={texth1light3Style}
        >
          {featureHeaderLight}
        </div>
      )}
      {showPrimaryText && (
        <div
          className="relative tracking-[-0.04em] leading-[96px] font-semibold"
          style={texth1bold3Style}
        >
          {featureHeaderBold}
        </div>
      )}
    </div>
  );
};

export default ContainerFeatureHeader;
