import { useMemo } from "react";

const ContainerFeatureLeft = ({
  featureHeaderLight,
  featureHeaderBold,
  featureParagraphText,
  featureMockupImageUrl,
  containersectionfeature1Width,
  containersectionfeature1Padding,
  containersectionfeature1Gap,
  containerarticlefeatureHeight,
  containerarticlefeatureGap,
  textsectionTitleh1Gap,
  texth1lightFontSize,
  texth1lightLineHeight,
  texth1lightMargin,
  texth1boldFontSize,
  texth1boldLineHeight,
  texth1boldMargin,
  textpFontSize,
  textpLineHeight,
  textpMargin,
  imagemockupIconWidth,
  imagemockupIconHeight,
  showSecondaryText,
  showPrimaryText,
}) => {
  const containersectionfeature1Style = useMemo(() => {
    return {
      width: containersectionfeature1Width,
      padding: containersectionfeature1Padding,
      gap: containersectionfeature1Gap,
    };
  }, [
    containersectionfeature1Width,
    containersectionfeature1Padding,
    containersectionfeature1Gap,
  ]);

  const containerarticlefeatureStyle = useMemo(() => {
    return {
      height: containerarticlefeatureHeight,
      gap: containerarticlefeatureGap,
    };
  }, [containerarticlefeatureHeight, containerarticlefeatureGap]);

  const textsectionTitleh1Style = useMemo(() => {
    return {
      gap: textsectionTitleh1Gap,
    };
  }, [textsectionTitleh1Gap]);

  const texth1lightStyle = useMemo(() => {
    return {
      fontSize: texth1lightFontSize,
      lineHeight: texth1lightLineHeight,
      margin: texth1lightMargin,
    };
  }, [texth1lightFontSize, texth1lightLineHeight, texth1lightMargin]);

  const texth1boldStyle = useMemo(() => {
    return {
      fontSize: texth1boldFontSize,
      lineHeight: texth1boldLineHeight,
      margin: texth1boldMargin,
    };
  }, [texth1boldFontSize, texth1boldLineHeight, texth1boldMargin]);

  const textp1Style = useMemo(() => {
    return {
      fontSize: textpFontSize,
      lineHeight: textpLineHeight,
      margin: textpMargin,
    };
  }, [textpFontSize, textpLineHeight, textpMargin]);

  const imagemockupIconStyle = useMemo(() => {
    return {
      width: imagemockupIconWidth,
      height: imagemockupIconHeight,
    };
  }, [imagemockupIconWidth, imagemockupIconHeight]);

  return (
    <div
      className="bg-texts-textprimary w-[1920px] flex flex-row items-start justify-center pt-spacing-256 px-spacing-200 pb-spacing-200 box-border gap-[128px] text-left text-77xl text-surfaces-default-surfaceprimary font-text-regular-headline"
      style={containersectionfeature1Style}
    >
      <div
        className="flex-1 h-[528px] flex flex-col items-start justify-start gap-[32px]"
        style={containerarticlefeatureStyle}
      >
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[24px]"
          style={textsectionTitleh1Style}
        >
          <div
            className="relative tracking-[-0.04em] leading-[96px] font-thin"
            style={texth1lightStyle}
          >
            {featureHeaderLight}
          </div>
          <div
            className="relative tracking-[-0.04em] leading-[96px] font-semibold"
            style={texth1boldStyle}
          >
            {featureHeaderBold}
          </div>
        </div>
        <div
          className="self-stretch relative text-5xl leading-[40px]"
          style={textp1Style}
        >
          {featureParagraphText}
        </div>
      </div>
      <img
        className="relative rounded-spacing-64 w-[696px] h-[1181px] object-cover"
        alt=""
        src={featureMockupImageUrl}
        style={imagemockupIconStyle}
      />
    </div>
  );
};

export default ContainerFeatureLeft;
