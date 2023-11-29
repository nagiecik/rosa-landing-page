import { useMemo } from "react";

const NavbarLink = ({
  linkText = "Link Text",
  typeNavbarStateDefaultFoFlex,
  typeNavbarStateDefaultFoTextDecoration,
  textlabelColor,
  textlabelCursor,
  textlabelFontSize,
  textlabelLineHeight,
}) => {
  const typeNavbarStateDefaultFoStyle = useMemo(() => {
    return {
      flex: typeNavbarStateDefaultFoFlex,
      textDecoration: typeNavbarStateDefaultFoTextDecoration,
    };
  }, [typeNavbarStateDefaultFoFlex, typeNavbarStateDefaultFoTextDecoration]);

  const textlabel8Style = useMemo(() => {
    return {
      color: textlabelColor,
      cursor: textlabelCursor,
      fontSize: textlabelFontSize,
      lineHeight: textlabelLineHeight,
    };
  }, [textlabelColor, textlabelCursor, textlabelFontSize, textlabelLineHeight]);

  return (
    <div
      className="flex flex-row items-center justify-center text-left text-xl text-surfaces-default-surfaceprimary font-text-regular-headline"
      style={typeNavbarStateDefaultFoStyle}
    >
      <div
        className="relative leading-[36px] font-semibold"
        style={textlabel8Style}
      >
        {linkText}
      </div>
    </div>
  );
};

export default NavbarLink;
