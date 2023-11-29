import { useMemo } from "react";

const LogotypeIFAB = ({
  imageLogoIFABUrl,
  colorWhiteTypeExtendedIcoWidth,
  colorWhiteTypeExtendedIcoHeight,
  colorWhiteTypeExtendedIcoPosition,
  colorWhiteTypeExtendedIcoObjectFit,
}) => {
  const colorWhiteTypeExtendedIconStyle = useMemo(() => {
    return {
      width: colorWhiteTypeExtendedIcoWidth,
      height: colorWhiteTypeExtendedIcoHeight,
      position: colorWhiteTypeExtendedIcoPosition,
      objectFit: colorWhiteTypeExtendedIcoObjectFit,
    };
  }, [
    colorWhiteTypeExtendedIcoWidth,
    colorWhiteTypeExtendedIcoHeight,
    colorWhiteTypeExtendedIcoPosition,
    colorWhiteTypeExtendedIcoObjectFit,
  ]);

  return (
    <img
      className="w-[155.7px] h-16"
      alt=""
      src={imageLogoIFABUrl}
      style={colorWhiteTypeExtendedIconStyle}
    />
  );
};

export default LogotypeIFAB;
