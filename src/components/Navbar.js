import { useMemo } from "react";
import NavbarLink from "./NavbarLink";
import Button from "./Button";

const Navbar = ({
  navbarImageLogo,
  showContainerDivLinks = true,
  showButtonMenu = false,
  showButtonCta = true,
  imagelogoIconPadding,
  containerdivlinksWidth,
  containerdivlinksHeight,
  linkTop,
  linkLeft,
  linkWidth,
  linkHeight,
  linkObjectFit,
  textlabelMaxWidth,
  textlabelFontSize,
  textlabelLineHeight,
  textlabelFontSize1,
  textlabelLineHeight1,
  textlabelFontSize2,
  textlabelLineHeight2,
  textlabelFontSize3,
  textlabelLineHeight3,
  iconline3horizontalFontSize,
  iconline3horizontalLineHeight,
  textstrongWidth,
  textstrongHeight,
  textstrongPadding,
  textstrongGap,
  iconarrowrightWidth,
  iconarrowrightHeight,
  buttonctaFontSize,
  buttonctaLineHeight,
  iconarrowleftWidth,
  iconarrowleftHeight,
  textstrongPadding1,
  textstrongGap1,
  iconarrowrightWidth1,
  iconarrowrightHeight1,
  propFontSize,
  propLineHeight,
  propWidth,
  propHeight,
}) => {
  const containernav21Style = useMemo(() => {
    return {
      padding: imagelogoIconPadding,
    };
  }, [imagelogoIconPadding]);

  const containerdiv3Style = useMemo(() => {
    return {
      width: containerdivlinksWidth,
      height: containerdivlinksHeight,
    };
  }, [containerdivlinksWidth, containerdivlinksHeight]);

  const imagelogoIcon1Style = useMemo(() => {
    return {
      top: linkTop,
      left: linkLeft,
      width: linkWidth,
      height: linkHeight,
      objectFit: linkObjectFit,
    };
  }, [linkTop, linkLeft, linkWidth, linkHeight, linkObjectFit]);

  const containerdivlinks1Style = useMemo(() => {
    return {
      maxWidth: textlabelMaxWidth,
    };
  }, [textlabelMaxWidth]);

  const textlabel8Style = useMemo(() => {
    return {
      fontSize: textlabelFontSize,
      lineHeight: textlabelLineHeight,
    };
  }, [textlabelFontSize, textlabelLineHeight]);

  const textlabel8Style1 = useMemo(() => {
    return {
      fontSize: textlabelFontSize1,
      lineHeight: textlabelLineHeight1,
    };
  }, [textlabelFontSize1, textlabelLineHeight1]);

  const textlabel8Style2 = useMemo(() => {
    return {
      fontSize: textlabelFontSize2,
      lineHeight: textlabelLineHeight2,
    };
  }, [textlabelFontSize2, textlabelLineHeight2]);

  const textlabel8Style3 = useMemo(() => {
    return {
      fontSize: textlabelFontSize3,
      lineHeight: textlabelLineHeight3,
    };
  }, [textlabelFontSize3, textlabelLineHeight3]);

  const textlabel8Style4 = useMemo(() => {
    return {
      fontSize: iconline3horizontalFontSize,
      lineHeight: iconline3horizontalLineHeight,
    };
  }, [iconline3horizontalFontSize, iconline3horizontalLineHeight]);

  const buttonmenu1Style = useMemo(() => {
    return {
      width: textstrongWidth,
      height: textstrongHeight,
      padding: textstrongPadding,
      gap: textstrongGap,
    };
  }, [textstrongWidth, textstrongHeight, textstrongPadding, textstrongGap]);

  const iconline3horizontal1Style = useMemo(() => {
    return {
      width: iconarrowrightWidth,
      height: iconarrowrightHeight,
    };
  }, [iconarrowrightWidth, iconarrowrightHeight]);

  const textstrong3Style = useMemo(() => {
    return {
      fontSize: buttonctaFontSize,
      lineHeight: buttonctaLineHeight,
    };
  }, [buttonctaFontSize, buttonctaLineHeight]);

  const iconarrowright3Style = useMemo(() => {
    return {
      width: iconarrowleftWidth,
      height: iconarrowleftHeight,
    };
  }, [iconarrowleftWidth, iconarrowleftHeight]);

  const typeOutlineStateEnabledSStyle = useMemo(() => {
    return {
      padding: textstrongPadding1,
      gap: textstrongGap1,
    };
  }, [textstrongPadding1, textstrongGap1]);

  const iconarrowleft1Style = useMemo(() => {
    return {
      width: iconarrowrightWidth1,
      height: iconarrowrightHeight1,
    };
  }, [iconarrowrightWidth1, iconarrowrightHeight1]);

  const textlabel7Style = useMemo(() => {
    return {
      fontSize: propFontSize,
      lineHeight: propLineHeight,
    };
  }, [propFontSize, propLineHeight]);

  const iconarrowright2Style = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <nav
      className="m-0 self-stretch flex flex-row items-center justify-between pt-spacing-24 px-[0rem] pb-[0rem] text-center text-[1rem] text-surfaces-default-surfaceprimary font-text-regular-headline"
      style={containernav21Style}
    >
      <div
        className="relative w-[10.31rem] h-[2rem]"
        style={containerdiv3Style}
      >
        <img
          className="absolute top-[0rem] left-[0rem] w-[7rem] h-[2rem] object-cover"
          alt=""
          src={navbarImageLogo}
          style={imagelogoIcon1Style}
        />
      </div>
      {showContainerDivLinks && (
        <div
          className="flex-1 flex flex-row items-start justify-between max-w-[50rem] md:hidden mq350small:hidden"
          style={containerdivlinks1Style}
        >
          <NavbarLink
            linkText="Start"
            typeNavbarStateDefaultFoFlex="1"
            typeNavbarStateDefaultFoTextDecoration="none"
            textlabelColor="#fff"
            textlabelCursor="pointer"
            textlabelFontSize="1.25rem"
            textlabelLineHeight="2.25rem"
          />
          <NavbarLink
            linkText="Features"
            typeNavbarStateDefaultFoFlex="1"
            typeNavbarStateDefaultFoTextDecoration="none"
            textlabelColor="#fff"
            textlabelCursor="pointer"
            textlabelFontSize="1.25rem"
            textlabelLineHeight="2.25rem"
          />
          <NavbarLink
            linkText="Use Cases"
            typeNavbarStateDefaultFoFlex="1"
            typeNavbarStateDefaultFoTextDecoration="none"
            textlabelColor="#fff"
            textlabelCursor="pointer"
            textlabelFontSize="1.25rem"
            textlabelLineHeight="2.25rem"
          />
          <NavbarLink
            linkText="Testimonials"
            typeNavbarStateDefaultFoFlex="1"
            typeNavbarStateDefaultFoTextDecoration="none"
            textlabelColor="#fff"
            textlabelCursor="pointer"
            textlabelFontSize="1.25rem"
            textlabelLineHeight="2.25rem"
          />
          <NavbarLink
            linkText="Pricing"
            typeNavbarStateDefaultFoFlex="1"
            typeNavbarStateDefaultFoTextDecoration="none"
            textlabelColor="#fff"
            textlabelCursor="pointer"
            textlabelFontSize="1.25rem"
            textlabelLineHeight="2.25rem"
          />
        </div>
      )}
      {showButtonMenu && (
        <div
          className="rounded-spacing-16 bg-surfaces-default-surfacetertiary w-[4rem] h-[4rem] hidden flex-row items-center justify-center p-[1rem] box-border gap-[1rem] md:flex mq350small:flex"
          style={buttonmenu1Style}
        >
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
            alt=""
            src="/iconline3horizontal.svg"
            style={iconline3horizontal1Style}
          />
          <b
            className="relative leading-[2rem] hidden"
            style={textstrong3Style}
          >
            Get your app
          </b>
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 hidden"
            alt=""
            src="/iconarrowright.svg"
            style={iconarrowright3Style}
          />
        </div>
      )}
      <Button
        buttonIconLeftUrl="/iconarrowleft.svg"
        buttonText="Get your app"
        buttonIconRightUrl="/iconarrowright.svg"
        showIconLeft={false}
        showIconRight={false}
        showButtonText
        typeOutlineStateEnabledSBorder="unset"
        typeOutlineStateEnabledSAlignSelf="unset"
        typeOutlineStateEnabledSBackgroundColor="#fab300"
        typeOutlineStateEnabledSBoxSizing="border-box"
        typeOutlineStateEnabledSPadding="1rem 2rem"
        typeOutlineStateEnabledSGap="1rem"
        typeOutlineStateEnabledSCursor="unset"
        iconarrowleftWidth="1.5rem"
        iconarrowleftHeight="1.5rem"
        textlabelFontSize="1rem"
        textlabelLineHeight="2rem"
        textlabelColor="#181f4e"
        textlabelFontWeight="700"
        iconarrowrightWidth="1.5rem"
        iconarrowrightHeight="1.5rem"
      />
    </nav>
  );
};

export default Navbar;
