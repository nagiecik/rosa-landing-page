import { useMemo } from "react";

const ContainerSectionHero = ({
  containerHeroLogoUrl,
  containerHeroAppStoreUrl,
  containerHeroGooglePlayUrl,
  containersectionheroWidth,
  containersectionheroHeight,
  containersectionheroPadding,
  containerdivGap,
  containerdivMaxWidth,
  containernav2Padding,
  containerdivWidth,
  containerdivHeight,
  imagelogoIconTop,
  imagelogoIconLeft,
  imagelogoIconWidth,
  imagelogoIconHeight,
  imagelogoIconObjectFit,
  containerdivlinksMaxWidth,
  textlabelFontSize,
  textlabelLineHeight,
  textlabelFontSize1,
  textlabelLineHeight1,
  textlabelFontSize2,
  textlabelLineHeight2,
  textlabelFontSize3,
  textlabelLineHeight3,
  textlabelFontSize4,
  textlabelLineHeight4,
  buttonmenuWidth,
  buttonmenuHeight,
  buttonmenuPadding,
  buttonmenuGap,
  iconline3horizontalWidth,
  iconline3horizontalHeight,
  textstrongFontSize,
  textstrongLineHeight,
  iconarrowrightWidth,
  iconarrowrightHeight,
  buttonctaPadding,
  buttonctaGap,
  iconarrowleftWidth,
  iconarrowleftHeight,
  textstrongFontSize1,
  textstrongLineHeight1,
  iconarrowrightWidth1,
  iconarrowrightHeight1,
  containerdivGap1,
  containerarticleGap,
  containerarticleMaxWidth,
  containerdivheaderGap,
  texth1FontSize,
  texth1LineHeight,
  texth1FontSize1,
  texth1LineHeight1,
  texth1FontSize2,
  texth1LineHeight2,
  textpFontSize,
  textpLineHeight,
  containerdivstorebuttonsGap,
  imageappstoreIconWidth,
  imageappstoreIconHeight,
  imageappstoreIconObjectFit,
  imagegoogleplayIconWidth,
  imagegoogleplayIconHeight,
  imagegoogleplayIconObjectFit,
  containerdivratingGap,
  containerdivtextGap,
  textlabelFontSize5,
  textlabelLineHeight5,
  textlabelCursor,
  textspanFontSize,
  textspanLineHeight,
  imageiconstarWidth,
  imageiconstarHeight,
  imageiconstarWidth1,
  imageiconstarHeight1,
  imageiconstarWidth2,
  imageiconstarHeight2,
  imageiconstarWidth3,
  imageiconstarHeight3,
  imageiconstarWidth4,
  imageiconstarHeight4,
  imageheroIconMaxWidth,
  imageheroIconHeight,
}) => {
  const containersectionheroStyle = useMemo(() => {
    return {
      width: containersectionheroWidth,
      height: containersectionheroHeight,
      padding: containersectionheroPadding,
    };
  }, [
    containersectionheroWidth,
    containersectionheroHeight,
    containersectionheroPadding,
  ]);

  const containerdivStyle = useMemo(() => {
    return {
      gap: containerdivGap,
      maxWidth: containerdivMaxWidth,
    };
  }, [containerdivGap, containerdivMaxWidth]);

  const containernav2Style = useMemo(() => {
    return {
      padding: containernav2Padding,
    };
  }, [containernav2Padding]);

  const containerdiv1Style = useMemo(() => {
    return {
      width: containerdivWidth,
      height: containerdivHeight,
    };
  }, [containerdivWidth, containerdivHeight]);

  const imagelogoIconStyle = useMemo(() => {
    return {
      top: imagelogoIconTop,
      left: imagelogoIconLeft,
      width: imagelogoIconWidth,
      height: imagelogoIconHeight,
      objectFit: imagelogoIconObjectFit,
    };
  }, [
    imagelogoIconTop,
    imagelogoIconLeft,
    imagelogoIconWidth,
    imagelogoIconHeight,
    imagelogoIconObjectFit,
  ]);

  const containerdivlinksStyle = useMemo(() => {
    return {
      maxWidth: containerdivlinksMaxWidth,
    };
  }, [containerdivlinksMaxWidth]);

  const textlabelStyle = useMemo(() => {
    return {
      fontSize: textlabelFontSize,
      lineHeight: textlabelLineHeight,
    };
  }, [textlabelFontSize, textlabelLineHeight]);

  const textlabel1Style = useMemo(() => {
    return {
      fontSize: textlabelFontSize1,
      lineHeight: textlabelLineHeight1,
    };
  }, [textlabelFontSize1, textlabelLineHeight1]);

  const textlabel2Style = useMemo(() => {
    return {
      fontSize: textlabelFontSize2,
      lineHeight: textlabelLineHeight2,
    };
  }, [textlabelFontSize2, textlabelLineHeight2]);

  const textlabel3Style = useMemo(() => {
    return {
      fontSize: textlabelFontSize3,
      lineHeight: textlabelLineHeight3,
    };
  }, [textlabelFontSize3, textlabelLineHeight3]);

  const textlabel4Style = useMemo(() => {
    return {
      fontSize: textlabelFontSize4,
      lineHeight: textlabelLineHeight4,
    };
  }, [textlabelFontSize4, textlabelLineHeight4]);

  const buttonmenuStyle = useMemo(() => {
    return {
      width: buttonmenuWidth,
      height: buttonmenuHeight,
      padding: buttonmenuPadding,
      gap: buttonmenuGap,
    };
  }, [buttonmenuWidth, buttonmenuHeight, buttonmenuPadding, buttonmenuGap]);

  const iconline3horizontalStyle = useMemo(() => {
    return {
      width: iconline3horizontalWidth,
      height: iconline3horizontalHeight,
    };
  }, [iconline3horizontalWidth, iconline3horizontalHeight]);

  const textstrongStyle = useMemo(() => {
    return {
      fontSize: textstrongFontSize,
      lineHeight: textstrongLineHeight,
    };
  }, [textstrongFontSize, textstrongLineHeight]);

  const iconarrowrightStyle = useMemo(() => {
    return {
      width: iconarrowrightWidth,
      height: iconarrowrightHeight,
    };
  }, [iconarrowrightWidth, iconarrowrightHeight]);

  const buttonctaStyle = useMemo(() => {
    return {
      padding: buttonctaPadding,
      gap: buttonctaGap,
    };
  }, [buttonctaPadding, buttonctaGap]);

  const iconarrowleftStyle = useMemo(() => {
    return {
      width: iconarrowleftWidth,
      height: iconarrowleftHeight,
    };
  }, [iconarrowleftWidth, iconarrowleftHeight]);

  const textstrong1Style = useMemo(() => {
    return {
      fontSize: textstrongFontSize1,
      lineHeight: textstrongLineHeight1,
    };
  }, [textstrongFontSize1, textstrongLineHeight1]);

  const iconarrowright1Style = useMemo(() => {
    return {
      width: iconarrowrightWidth1,
      height: iconarrowrightHeight1,
    };
  }, [iconarrowrightWidth1, iconarrowrightHeight1]);

  const containerdiv2Style = useMemo(() => {
    return {
      gap: containerdivGap1,
    };
  }, [containerdivGap1]);

  const containerarticleStyle = useMemo(() => {
    return {
      gap: containerarticleGap,
      maxWidth: containerarticleMaxWidth,
    };
  }, [containerarticleGap, containerarticleMaxWidth]);

  const containerdivheaderStyle = useMemo(() => {
    return {
      gap: containerdivheaderGap,
    };
  }, [containerdivheaderGap]);

  const texth1Style = useMemo(() => {
    return {
      fontSize: texth1FontSize,
      lineHeight: texth1LineHeight,
    };
  }, [texth1FontSize, texth1LineHeight]);

  const texth11Style = useMemo(() => {
    return {
      fontSize: texth1FontSize1,
      lineHeight: texth1LineHeight1,
    };
  }, [texth1FontSize1, texth1LineHeight1]);

  const texth12Style = useMemo(() => {
    return {
      fontSize: texth1FontSize2,
      lineHeight: texth1LineHeight2,
    };
  }, [texth1FontSize2, texth1LineHeight2]);

  const textpStyle = useMemo(() => {
    return {
      fontSize: textpFontSize,
      lineHeight: textpLineHeight,
    };
  }, [textpFontSize, textpLineHeight]);

  const containerdivstorebuttonsStyle = useMemo(() => {
    return {
      gap: containerdivstorebuttonsGap,
    };
  }, [containerdivstorebuttonsGap]);

  const imageappstoreIconStyle = useMemo(() => {
    return {
      width: imageappstoreIconWidth,
      height: imageappstoreIconHeight,
      objectFit: imageappstoreIconObjectFit,
    };
  }, [
    imageappstoreIconWidth,
    imageappstoreIconHeight,
    imageappstoreIconObjectFit,
  ]);

  const imagegoogleplayIconStyle = useMemo(() => {
    return {
      width: imagegoogleplayIconWidth,
      height: imagegoogleplayIconHeight,
      objectFit: imagegoogleplayIconObjectFit,
    };
  }, [
    imagegoogleplayIconWidth,
    imagegoogleplayIconHeight,
    imagegoogleplayIconObjectFit,
  ]);

  const containerdivratingStyle = useMemo(() => {
    return {
      gap: containerdivratingGap,
    };
  }, [containerdivratingGap]);

  const containerdivtextStyle = useMemo(() => {
    return {
      gap: containerdivtextGap,
    };
  }, [containerdivtextGap]);

  const textlabel5Style = useMemo(() => {
    return {
      fontSize: textlabelFontSize5,
      lineHeight: textlabelLineHeight5,
      cursor: textlabelCursor,
    };
  }, [textlabelFontSize5, textlabelLineHeight5, textlabelCursor]);

  const textspanStyle = useMemo(() => {
    return {
      fontSize: textspanFontSize,
      lineHeight: textspanLineHeight,
    };
  }, [textspanFontSize, textspanLineHeight]);

  const imageiconstarStyle = useMemo(() => {
    return {
      width: imageiconstarWidth,
      height: imageiconstarHeight,
    };
  }, [imageiconstarWidth, imageiconstarHeight]);

  const imageiconstar1Style = useMemo(() => {
    return {
      width: imageiconstarWidth1,
      height: imageiconstarHeight1,
    };
  }, [imageiconstarWidth1, imageiconstarHeight1]);

  const imageiconstar2Style = useMemo(() => {
    return {
      width: imageiconstarWidth2,
      height: imageiconstarHeight2,
    };
  }, [imageiconstarWidth2, imageiconstarHeight2]);

  const imageiconstar3Style = useMemo(() => {
    return {
      width: imageiconstarWidth3,
      height: imageiconstarHeight3,
    };
  }, [imageiconstarWidth3, imageiconstarHeight3]);

  const imageiconstar4Style = useMemo(() => {
    return {
      width: imageiconstarWidth4,
      height: imageiconstarHeight4,
    };
  }, [imageiconstarWidth4, imageiconstarHeight4]);

  const imageheroIconStyle = useMemo(() => {
    return {
      maxWidth: imageheroIconMaxWidth,
      height: imageheroIconHeight,
    };
  }, [imageheroIconMaxWidth, imageheroIconHeight]);

  return (
    <section
      className="w-[1920px] h-[1080px] flex flex-col items-center justify-start py-0 px-spacing-200 box-border bg-[url('/public/containersectionhero@3x.png')] bg-cover bg-no-repeat bg-[top] lg:w-[1200px] lg:pl-16 lg:pr-16 lg:box-border md:w-[960px] md:pl-8 md:pr-8 md:box-border sm:w-[420px] sm:pl-4 sm:pr-4 sm:box-border mq350small:w-[350px] mq350small:pl-4 mq350small:pr-4 mq350small:box-border"
      style={containersectionheroStyle}
    >
      <div
        className="w-full flex flex-col items-start justify-start gap-[128px] max-w-[1520px] lg:gap-[64px] md:gap-[64px] md:items-center md:justify-start md:pl-0 md:pr-0 md:box-border sm:gap-[32px] sm:pl-0 sm:pr-0 sm:box-border mq350small:gap-[32px] mq350small:items-center mq350small:justify-start"
        style={containerdivStyle}
      >
        <nav
          className="m-0 self-stretch flex flex-row items-center justify-between pt-spacing-24 px-0 pb-0 text-center text-base text-surfaces-default-surfaceprimary font-text-regular-headline"
          style={containernav2Style}
        >
          <div className="relative w-[165px] h-8" style={containerdiv1Style}>
            <img
              className="absolute top-[0px] left-[0px] w-28 h-8"
              alt=""
              src={containerHeroLogoUrl}
              style={imagelogoIconStyle}
            />
          </div>
          <div
            className="flex-1 flex flex-row items-start justify-between max-w-[800px] text-left text-xl text-texts-textprimary md:hidden mq350small:hidden"
            style={containerdivlinksStyle}
          >
            <a className="[text-decoration:none] flex-1 flex flex-row items-center justify-center text-[inherit]">
              <div
                className="relative leading-[36px] font-semibold cursor-pointer hover:[text-decoration:underline]"
                style={textlabelStyle}
              >
                Start
              </div>
            </a>
            <a className="[text-decoration:none] flex-1 flex flex-row items-center justify-center text-[inherit]">
              <div
                className="relative leading-[36px] font-semibold cursor-pointer hover:[text-decoration:underline]"
                style={textlabel1Style}
              >
                Features
              </div>
            </a>
            <a className="[text-decoration:none] flex-1 flex flex-row items-center justify-center text-[inherit]">
              <div
                className="relative leading-[36px] font-semibold cursor-pointer hover:[text-decoration:underline]"
                style={textlabel2Style}
              >
                Use Cases
              </div>
            </a>
            <a className="[text-decoration:none] flex-1 flex flex-row items-center justify-center text-[inherit]">
              <div
                className="relative leading-[36px] font-semibold cursor-pointer hover:[text-decoration:underline]"
                style={textlabel3Style}
              >
                Testimonials
              </div>
            </a>
            <a className="[text-decoration:none] flex-1 flex flex-row items-center justify-center text-[inherit]">
              <div
                className="relative leading-[36px] font-semibold cursor-pointer hover:[text-decoration:underline]"
                style={textlabel4Style}
              >
                Pricing
              </div>
            </a>
          </div>
          <div
            className="rounded-spacing-16 bg-surfaces-default-surfacetertiary w-16 h-16 hidden flex-row items-center justify-center p-4 box-border gap-[16px] md:flex mq350small:flex"
            style={buttonmenuStyle}
          >
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconline3horizontal.svg"
              style={iconline3horizontalStyle}
            />
            <b
              className="relative leading-[32px] hidden"
              style={textstrongStyle}
            >
              Get your app
            </b>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconarrowright.svg"
              style={iconarrowrightStyle}
            />
          </div>
          <div
            className="rounded-spacing-16 bg-surfaces-default-surfacetertiary flex flex-row items-center justify-center py-button-padding-top-bottom px-button-padding-left-right gap-[16px] hover:bg-texts-textprimary hover:cursor-pointer md:hidden mq350small:hidden"
            style={buttonctaStyle}
          >
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconarrowleft.svg"
              style={iconarrowleftStyle}
            />
            <strong
              className="relative leading-[32px] font-bold"
              style={textstrong1Style}
            >
              Get your app
            </strong>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/iconarrowright.svg"
              style={iconarrowright1Style}
            />
          </div>
        </nav>
        <div
          className="self-stretch flex flex-row items-start justify-center gap-[128px] md:flex-col md:items-center md:justify-start sm:items-start sm:justify-center"
          style={containerdiv2Style}
        >
          <article
            className="flex-1 flex flex-col items-start justify-start gap-[48px] max-w-[700px] text-left text-77xl text-texts-textprimary font-text-regular-headline lg:gap-[24px] md:gap-[24px] md:items-center md:justify-start md:flex-[unset] md:self-stretch sm:gap-[24px] mq350small:gap-[24px] mq350small:items-center mq350small:justify-start mq350small:pl-0 mq350small:box-border"
            style={containerarticleStyle}
          >
            <div
              className="self-stretch flex flex-col items-start justify-start gap-[24px] md:gap-[8px] md:items-center md:justify-start md:pl-0 md:box-border sm:gap-[8px] sm:pl-0 sm:box-border mq350small:items-center mq350small:justify-start"
              style={containerdivheaderStyle}
            >
              <h1
                className="m-0 self-stretch relative text-inherit tracking-[-0.04em] leading-[96px] font-thin font-inherit lg:text-45xl lg:leading-[80px] md:text-center sm:text-29xl sm:leading-[64px] mq350small:text-21xl mq350small:leading-[56px] mq350small:text-center"
                style={texth1Style}
              >
                Gamechanger
              </h1>
              <h1
                className="m-0 self-stretch relative text-inherit tracking-[-0.04em] leading-[96px] font-semibold font-inherit lg:text-45xl lg:leading-[80px] md:text-center sm:text-29xl sm:tracking-[-0.04em] sm:leading-[64px] mq350small:text-21xl mq350small:leading-[56px] mq350small:text-center"
                style={texth11Style}
              >
                In The Way
              </h1>
              <h1
                className="m-0 self-stretch relative text-inherit tracking-[-0.04em] leading-[96px] font-thin font-inherit lg:text-45xl lg:leading-[80px] md:text-center sm:text-29xl sm:leading-[64px] mq350small:text-21xl mq350small:leading-[56px] mq350small:text-center"
                style={texth12Style}
              >
                You Manage
              </h1>
            </div>
            <p
              className="m-0 self-stretch relative text-xl leading-[36px] font-light lg:text-base lg:leading-[32px] md:text-center mq350small:text-sm mq350small:leading-[28px] mq350small:text-center"
              style={textpStyle}
            >
              In the realm of sports governance, every organization encounters
              common challenges, irrespective of the specific laws and
              regulations they oversee. These challenges include the constant
              evolution of rules and the imperative to ensure their effective
              dissemination.
            </p>
            <div
              className="self-stretch flex flex-row items-start justify-start gap-[32px] md:items-start md:justify-center sm:flex-col mq350small:flex-col mq350small:items-start mq350small:justify-center"
              style={containerdivstorebuttonsStyle}
            >
              <img
                className="relative w-[207.7px] h-[60px]"
                alt=""
                src={containerHeroAppStoreUrl}
                style={imageappstoreIconStyle}
              />
              <img
                className="relative w-[207.4px] h-[60px]"
                alt=""
                src={containerHeroGooglePlayUrl}
                style={imagegoogleplayIconStyle}
              />
            </div>
            <div
              className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[16px] text-5xl md:items-start md:justify-center sm:flex-col mq350small:flex-col"
              style={containerdivratingStyle}
            >
              <div
                className="flex flex-row items-center justify-start gap-[8px]"
                style={containerdivtextStyle}
              >
                <div
                  className="relative leading-[40px]"
                  style={textlabel5Style}
                >
                  Excellent
                </div>
                <b
                  className="relative leading-[40px] text-surfaces-default-surfacetertiary"
                  style={textspanStyle}
                >
                  4.9 out of 5
                </b>
              </div>
              <div className="flex flex-row items-center justify-start">
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/imageiconstar@2x.png"
                  style={imageiconstarStyle}
                />
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/imageiconstar@2x.png"
                  style={imageiconstar1Style}
                />
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/imageiconstar@2x.png"
                  style={imageiconstar2Style}
                />
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/imageiconstar@2x.png"
                  style={imageiconstar3Style}
                />
                <img
                  className="relative w-8 h-8 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/imageiconstar@2x.png"
                  style={imageiconstar4Style}
                />
              </div>
            </div>
          </article>
          <img
            className="flex-1 relative max-w-[700px] overflow-hidden h-[1066px] object-cover lg:w-[400px] lg:h-full md:w-full md:h-[400px] md:flex-[unset] md:self-stretch"
            alt=""
            src="/imagehero@2x.png"
            style={imageheroIconStyle}
          />
        </div>
      </div>
    </section>
  );
};

export default ContainerSectionHero;
