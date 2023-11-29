import { useMemo } from "react";

const ContainerFeatureRight = ({
  featureMockupImage,
  featureHeaderLight,
  featureHeaderBold,
  containersectionfeature2Width,
  containersectionfeature2Padding,
  containersectionfeature2Gap,
  imagemockupIconWidth,
  imagemockupIconHeight,
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
  showSecondaryText,
  showPrimaryText,
}) => {
  const containersectionfeature2Style = useMemo(() => {
    return {
      width: containersectionfeature2Width,
      padding: containersectionfeature2Padding,
      gap: containersectionfeature2Gap,
    };
  }, [
    containersectionfeature2Width,
    containersectionfeature2Padding,
    containersectionfeature2Gap,
  ]);

  const imagemockupIcon1Style = useMemo(() => {
    return {
      width: imagemockupIconWidth,
      height: imagemockupIconHeight,
    };
  }, [imagemockupIconWidth, imagemockupIconHeight]);

  const containerarticlefeature1Style = useMemo(() => {
    return {
      height: containerarticlefeatureHeight,
      gap: containerarticlefeatureGap,
    };
  }, [containerarticlefeatureHeight, containerarticlefeatureGap]);

  const textsectionTitleh11Style = useMemo(() => {
    return {
      gap: textsectionTitleh1Gap,
    };
  }, [textsectionTitleh1Gap]);

  const texth1light1Style = useMemo(() => {
    return {
      fontSize: texth1lightFontSize,
      lineHeight: texth1lightLineHeight,
      margin: texth1lightMargin,
    };
  }, [texth1lightFontSize, texth1lightLineHeight, texth1lightMargin]);

  const texth1bold1Style = useMemo(() => {
    return {
      fontSize: texth1boldFontSize,
      lineHeight: texth1boldLineHeight,
      margin: texth1boldMargin,
    };
  }, [texth1boldFontSize, texth1boldLineHeight, texth1boldMargin]);

  const textp2Style = useMemo(() => {
    return {
      fontSize: textpFontSize,
      lineHeight: textpLineHeight,
      margin: textpMargin,
    };
  }, [textpFontSize, textpLineHeight, textpMargin]);

  return (
    <div
      className="bg-texts-textprimary w-[1920px] flex flex-row items-start justify-center pt-spacing-256 px-spacing-200 pb-spacing-200 box-border gap-[128px] text-left text-77xl text-surfaces-default-surfaceprimary font-text-regular-headline"
      style={containersectionfeature2Style}
    >
      <img
        className="relative rounded-45xl w-[696px] h-[1181px] object-cover"
        alt=""
        src={featureMockupImage}
        style={imagemockupIcon1Style}
      />
      <div
        className="flex-1 h-[528px] flex flex-col items-start justify-start gap-[32px]"
        style={containerarticlefeature1Style}
      >
        <div
          className="self-stretch flex flex-col items-start justify-start gap-[24px]"
          style={textsectionTitleh11Style}
        >
          <div
            className="relative tracking-[-0.04em] leading-[96px] font-thin"
            style={texth1light1Style}
          >
            {featureHeaderLight}
          </div>
          <div
            className="relative tracking-[-0.04em] leading-[96px] font-semibold"
            style={texth1bold1Style}
          >
            {featureHeaderBold}
          </div>
        </div>
        <div
          className="self-stretch relative text-5xl leading-[40px]"
          style={textp2Style}
        >
          treamline access to crucial resources with the Documents Selection
          feature. Organize and display a wide range of file types, from PDFs to
          documents, within dedicated sections of your app. Whether it's
          competition rules, equipment specifications, or instructional
          materials, ROSA empowers your organization to provide a comprehensive
          library of documents, making it easy for users to find and download
          the information they need, enhancing their engagement and knowledge.
        </div>
      </div>
    </div>
  );
};

export default ContainerFeatureRight;
