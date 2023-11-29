import { useMemo } from "react";

const PricingFeatureListElementPerk = ({
  listIconLeftUrl,
  listText,
  containerdivfeatureListElGap,
  imageiconCheckWidth,
  imageiconCheckHeight,
  imageiconCheckObjectFit,
  textspanColor,
  textspanFontSize,
  textspanLineHeight,
}) => {
  const containerdivfeatureListEleStyle = useMemo(() => {
    return {
      gap: containerdivfeatureListElGap,
    };
  }, [containerdivfeatureListElGap]);

  const imageiconCheckStyle = useMemo(() => {
    return {
      width: imageiconCheckWidth,
      height: imageiconCheckHeight,
      objectFit: imageiconCheckObjectFit,
    };
  }, [imageiconCheckWidth, imageiconCheckHeight, imageiconCheckObjectFit]);

  const textspan2Style = useMemo(() => {
    return {
      color: textspanColor,
      fontSize: textspanFontSize,
      lineHeight: textspanLineHeight,
    };
  }, [textspanColor, textspanFontSize, textspanLineHeight]);

  return (
    <div
      className="flex flex-row items-center justify-start gap-[16px] text-left text-5xl text-surfaces-default-surfaceprimary font-text-regular-headline self-stretch"
      style={containerdivfeatureListEleStyle}
    >
      <img
        className="relative w-8 h-8"
        alt=""
        src={listIconLeftUrl}
        style={imageiconCheckStyle}
      />
      <div
        className="flex-1 relative leading-[40px] font-semibold"
        style={textspan2Style}
      >
        {listText}
      </div>
    </div>
  );
};

export default PricingFeatureListElementPerk;
