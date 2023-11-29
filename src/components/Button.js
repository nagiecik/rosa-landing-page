import { useMemo } from "react";

const Button = ({
  buttonIconLeftUrl,
  buttonText = "Button Text",
  buttonIconRightUrl,
  showIconLeft = true,
  showIconRight = true,
  showButtonText = true,
  typeOutlineStateEnabledSBorder,
  typeOutlineStateEnabledSAlignSelf,
  typeOutlineStateEnabledSBackgroundColor,
  typeOutlineStateEnabledSBoxSizing,
  typeOutlineStateEnabledSPadding,
  typeOutlineStateEnabledSGap,
  typeOutlineStateEnabledSCursor,
  iconarrowleftWidth,
  iconarrowleftHeight,
  textlabelFontSize,
  textlabelLineHeight,
  textlabelColor,
  textlabelFontWeight,
  iconarrowrightWidth,
  iconarrowrightHeight,
}) => {
  const typeOutlineStateEnabledSStyle = useMemo(() => {
    return {
      border: typeOutlineStateEnabledSBorder,
      alignSelf: typeOutlineStateEnabledSAlignSelf,
      backgroundColor: typeOutlineStateEnabledSBackgroundColor,
      boxSizing: typeOutlineStateEnabledSBoxSizing,
      padding: typeOutlineStateEnabledSPadding,
      gap: typeOutlineStateEnabledSGap,
      cursor: typeOutlineStateEnabledSCursor,
    };
  }, [
    typeOutlineStateEnabledSBorder,
    typeOutlineStateEnabledSAlignSelf,
    typeOutlineStateEnabledSBackgroundColor,
    typeOutlineStateEnabledSBoxSizing,
    typeOutlineStateEnabledSPadding,
    typeOutlineStateEnabledSGap,
    typeOutlineStateEnabledSCursor,
  ]);

  const iconarrowleft1Style = useMemo(() => {
    return {
      width: iconarrowleftWidth,
      height: iconarrowleftHeight,
    };
  }, [iconarrowleftWidth, iconarrowleftHeight]);

  const textlabel7Style = useMemo(() => {
    return {
      fontSize: textlabelFontSize,
      lineHeight: textlabelLineHeight,
      color: textlabelColor,
      fontWeight: textlabelFontWeight,
    };
  }, [
    textlabelFontSize,
    textlabelLineHeight,
    textlabelColor,
    textlabelFontWeight,
  ]);

  const iconarrowright2Style = useMemo(() => {
    return {
      width: iconarrowrightWidth,
      height: iconarrowrightHeight,
    };
  }, [iconarrowrightWidth, iconarrowrightHeight]);

  return (
    <div
      className="rounded-spacing-16 box-border flex flex-row items-center justify-center py-button-padding-top-bottom px-button-padding-left-right gap-[16px] text-center text-base text-surfaces-default-surfaceprimary font-text-regular-headline self-stretch border-[2px] border-solid border-surfaces-default-surfaceprimary"
      style={typeOutlineStateEnabledSStyle}
    >
      {showIconLeft && (
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src={buttonIconLeftUrl}
          style={iconarrowleft1Style}
        />
      )}
      {showButtonText && (
        <b className="relative leading-[32px]" style={textlabel7Style}>
          {buttonText}
        </b>
      )}
      {showIconRight && (
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src={buttonIconRightUrl}
          style={iconarrowright2Style}
        />
      )}
    </div>
  );
};

export default Button;
