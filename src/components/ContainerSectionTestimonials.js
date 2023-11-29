import { useMemo } from "react";

const ContainerSectionTestimonials = ({
  containerTestimonialsImageLogoUrl,
  containerTestimonialsImageMockupUrl,
  containersectiontestimoniWidth,
  containersectiontestimoniPadding,
  containerdivfootballRulesWidth,
  containerdivfootballRulesPadding,
  containerdivcontentGap,
  containerdivcontentMaxWidth,
  textspanFontSize,
  textspanLineHeight,
  textspanWidth,
  textstrongFontSize,
  textstrongLineHeight,
  textstrongWidth,
  containerdivtextGap,
  texth6FontSize,
  texth6LineHeight,
  texth6Margin,
  texth6FontWeight,
  textblockquoteFontSize,
  textblockquoteLineHeight,
  textblockquoteMargin,
  containerdivpersonDetailsGap,
  imagepersonIconWidth,
  imagepersonIconHeight,
  textlabelFontSize,
  textlabelLineHeight,
  textsFontSize,
  textsLineHeight,
  imagelogoifabIconWidth,
  imagelogoifabIconHeight,
  imagelogoifabIconObjectFit,
  imagemockup2IconRight,
  imagemockup2IconWidth,
  imagemockup2IconHeight,
  imagemockup1IconRight,
  imagemockup1IconWidth,
  imagemockup1IconHeight,
}) => {
  const containersectiontestimonialStyle = useMemo(() => {
    return {
      width: containersectiontestimoniWidth,
      padding: containersectiontestimoniPadding,
    };
  }, [containersectiontestimoniWidth, containersectiontestimoniPadding]);

  const containerdivfootballRulesStyle = useMemo(() => {
    return {
      width: containerdivfootballRulesWidth,
      padding: containerdivfootballRulesPadding,
    };
  }, [containerdivfootballRulesWidth, containerdivfootballRulesPadding]);

  const containerdivcontentStyle = useMemo(() => {
    return {
      gap: containerdivcontentGap,
      maxWidth: containerdivcontentMaxWidth,
    };
  }, [containerdivcontentGap, containerdivcontentMaxWidth]);

  const textspan1Style = useMemo(() => {
    return {
      fontSize: textspanFontSize,
      lineHeight: textspanLineHeight,
      width: textspanWidth,
    };
  }, [textspanFontSize, textspanLineHeight, textspanWidth]);

  const textstrong2Style = useMemo(() => {
    return {
      fontSize: textstrongFontSize,
      lineHeight: textstrongLineHeight,
      width: textstrongWidth,
    };
  }, [textstrongFontSize, textstrongLineHeight, textstrongWidth]);

  const containerdivtext1Style = useMemo(() => {
    return {
      gap: containerdivtextGap,
    };
  }, [containerdivtextGap]);

  const texth6Style = useMemo(() => {
    return {
      fontSize: texth6FontSize,
      lineHeight: texth6LineHeight,
      margin: texth6Margin,
      fontWeight: texth6FontWeight,
    };
  }, [texth6FontSize, texth6LineHeight, texth6Margin, texth6FontWeight]);

  const textblockquoteStyle = useMemo(() => {
    return {
      fontSize: textblockquoteFontSize,
      lineHeight: textblockquoteLineHeight,
      margin: textblockquoteMargin,
    };
  }, [textblockquoteFontSize, textblockquoteLineHeight, textblockquoteMargin]);

  const containerdivpersonDetailsStyle = useMemo(() => {
    return {
      gap: containerdivpersonDetailsGap,
    };
  }, [containerdivpersonDetailsGap]);

  const imagepersonIconStyle = useMemo(() => {
    return {
      width: imagepersonIconWidth,
      height: imagepersonIconHeight,
    };
  }, [imagepersonIconWidth, imagepersonIconHeight]);

  const textlabel6Style = useMemo(() => {
    return {
      fontSize: textlabelFontSize,
      lineHeight: textlabelLineHeight,
    };
  }, [textlabelFontSize, textlabelLineHeight]);

  const textsStyle = useMemo(() => {
    return {
      fontSize: textsFontSize,
      lineHeight: textsLineHeight,
    };
  }, [textsFontSize, textsLineHeight]);

  const imagelogoifabIconStyle = useMemo(() => {
    return {
      width: imagelogoifabIconWidth,
      height: imagelogoifabIconHeight,
      objectFit: imagelogoifabIconObjectFit,
    };
  }, [
    imagelogoifabIconWidth,
    imagelogoifabIconHeight,
    imagelogoifabIconObjectFit,
  ]);

  const imagemockup2IconStyle = useMemo(() => {
    return {
      right: imagemockup2IconRight,
      width: imagemockup2IconWidth,
      height: imagemockup2IconHeight,
    };
  }, [imagemockup2IconRight, imagemockup2IconWidth, imagemockup2IconHeight]);

  const imagemockup1IconStyle = useMemo(() => {
    return {
      right: imagemockup1IconRight,
      width: imagemockup1IconWidth,
      height: imagemockup1IconHeight,
    };
  }, [imagemockup1IconRight, imagemockup1IconWidth, imagemockup1IconHeight]);

  return (
    <div
      className="bg-texts-textprimary w-[1920px] flex flex-col items-center justify-end pt-spacing-256 px-spacing-200 pb-spacing-128 box-border text-left text-13xl text-texts-textprimary font-text-regular-headline"
      style={containersectiontestimonialStyle}
    >
      <div
        className="rounded-spacing-48 w-[1520px] overflow-hidden flex flex-col items-start justify-start p-16 box-border relative bg-[url('/public/containerdivfootballrules@3x.png')] bg-cover bg-no-repeat bg-[top]"
        style={containerdivfootballRulesStyle}
      >
        <div
          className="w-full flex flex-col items-start justify-start gap-[64px] max-w-[800px] z-[0]"
          style={containerdivcontentStyle}
        >
          <div className="flex flex-col items-start justify-start font-roag">
            <i
              className="relative leading-[32px] uppercase inline-block font-black w-[368px]"
              style={textspan1Style}
            >
              Official
            </i>
            <i
              className="relative text-45xl leading-[56px] uppercase inline-block font-black text-laws-light-green-200 w-[368px]"
              style={textstrong2Style}
            >
              Football Rules
            </i>
          </div>
          <div
            className="self-stretch flex flex-col items-start justify-start gap-[16px] text-5xl"
            style={containerdivtext1Style}
          >
            <b
              className="self-stretch relative tracking-[-0.04em] leading-[40px]"
              style={texth6Style}
            >
              Revolutized Our Rule Management
            </b>
            <i
              className="self-stretch relative text-xl leading-[36px] text-texts-textdisabledsubtle"
              style={textblockquoteStyle}
            >
              “After analysing and understanding the hassle of using printouts
              on the field of play, we decided to launch digitalised Laws. It
              was to give quick and easy access to the Laws, most importantly to
              the referees, both on- and offline.”
            </i>
          </div>
          <div className="self-stretch flex flex-row items-end justify-between text-xl">
            <div
              className="flex flex-row items-center justify-start gap-[16px]"
              style={containerdivpersonDetailsStyle}
            >
              <img
                className="relative rounded-[50%] w-20 h-20 object-cover"
                alt=""
                src="/imageperson@2x.png"
                style={imagepersonIconStyle}
              />
              <div className="flex flex-col items-start justify-start">
                <b
                  className="self-stretch relative leading-[36px]"
                  style={textlabel6Style}
                >
                  Lukas Brud
                </b>
                <i
                  className="self-stretch relative text-base leading-[32px] text-texts-textdisabledsubtle"
                  style={textsStyle}
                >{`The IFAB Secretary & CEO`}</i>
              </div>
            </div>
            <img
              className="relative w-[175.1px] h-[72px]"
              alt=""
              src={containerTestimonialsImageLogoUrl}
              style={imagelogoifabIconStyle}
            />
          </div>
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[calc(50%_-_280px)] right-[25px] w-[350px] h-[560px] object-cover z-[1]"
          alt=""
          src={containerTestimonialsImageMockupUrl}
          style={imagemockup2IconStyle}
        />
        <img
          className="absolute my-0 mx-[!important] top-[calc(50%_-_322px)] right-[200px] w-[400px] h-[640px] object-cover z-[2]"
          alt=""
          src="/imagemockup1@2x.png"
          style={imagemockup1IconStyle}
        />
      </div>
    </div>
  );
};

export default ContainerSectionTestimonials;
