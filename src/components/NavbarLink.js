import { useMemo } from "react";

const NavbarLink = ({
  linkText = "Link Text",
  textlabelColor,
  textlabelCursor,
}) => {
  const textlabelStyle = useMemo(() => {
    return {
      color: textlabelColor,
      cursor: textlabelCursor,
    };
  }, [textlabelColor, textlabelCursor]);

  return (
    <div className="flex flex-row items-center justify-center text-left text-xl text-surfaces-default-surfaceprimary font-text-regular-headline">
      <div
        className="relative leading-[36px] font-semibold"
        style={textlabelStyle}
      >
        {linkText}
      </div>
    </div>
  );
};

export default NavbarLink;
